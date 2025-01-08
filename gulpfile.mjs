import { src, dest, series, parallel, watch, task } from 'gulp';

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify-es';
import cleanCSS from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import noop from 'gulp-noop';
import gulpMode from 'gulp-mode';
import sourceMap from 'gulp-sourcemaps';
import { deleteAsync } from 'del';
import gulpAvif from 'gulp-avif';
import newer from 'gulp-newer';
import ttf2woff2 from 'gulp-ttf2woff2';

const JS_LIBS = ['./node_modules/jquery/dist/jquery.js', './node_modules/pagepiling.js/dist/jquery.pagepiling.js'];
const CSS_LIBS = ['./node_modules/pagepiling.js/dist/jquery.pagepiling.css'];

const sass = gulpSass(dartSass);
const bs = browserSync.create();

const plumberNotify = (title) => {
	return {
		errorHandler: notify.onError({
			title: title,
			message: 'Error: <%= error.message %>',
			sound: false,
		}),
	};
};

const mode = gulpMode({
	modes: ['production', 'development'],
	defaultMode: 'development',
	verbose: false,
});
const isProduction = mode.production();

async function clean() {
	await deleteAsync('local', { read: false, allowEmpty: true });
}

function images() {
	return src(['src/images/src/**/*.png', 'src/images/src/**/*.jpg', '!src/images/', '!src/images/src/**/*.svg'], {
		encoding: false,
	})
		.pipe(newer('./src/images'))
		.pipe(gulpAvif())
		.pipe(dest('./src/images'));
}

async function libsJS() {
	if (JS_LIBS.length <= 0) return;

	return src(JS_LIBS).pipe(concat('libs.min.js')).pipe(uglify.default()).pipe(dest('src/js'));
}

async function libsCSS() {
	if (CSS_LIBS.length <= 0) return;

	return src(CSS_LIBS)
		.pipe(concat('libs.min.css'))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(dest('src/css'));
}

function styles() {
	return src('src/scss/*.scss')
		.pipe(plumber(plumberNotify('SCSS')))
		.pipe(isProduction ? noop() : sourceMap.init())
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(
			postcss([
				autoprefixer({
					overrideBrowserslist: [
						'> 1%',
						'ie >= 8',
						'edge >= 15',
						'ie_mob >= 10',
						'ff >= 45',
						'chrome >= 45',
						'safari >= 7',
						'opera >= 23',
						'ios >= 7',
						'android >= 4',
						'bb >= 10',
					],
				}),
			]),
		)
		.pipe(isProduction ? noop() : sourceMap.write())
		.pipe(dest('src/css'))
		.pipe(bs.stream());
}

function scripts() {
	return src('src/js/**/*.js')
		.pipe(plumber(plumberNotify('JS')))
		.pipe(bs.stream());
}

function fonts() {
	return src(['src/fonts/src/*.ttf'], {
		encoding: false,
		removeBOM: false,
	})
		.pipe(ttf2woff2())
		.pipe(dest('./src/fonts'));
}

function watchFiles() {
	bs.init({
		server: {
			baseDir: 'src/',
		},
		open: true,
	});

	watch('./src/scss/**/*.scss', parallel('styles'));
	watch('./src/*.html').on('change', bs.reload);
	watch('./src/images/src/**/*', parallel('images')).on('change', bs.reload);
	watch('./src/fonts/src/**/*', parallel('fonts')).on('change', bs.reload);
	watch('./src/js/**/*.js', parallel('scripts'));
}

function build() {
	return src(
		[
			'src/css/*.css',
			'src/fonts/*.woff2',
			'src/images/**/*.avif',
			'src/images/**/*.svg',
			'!src/images/src/**/*.svg',
			'src/js/**/*.js',
			'src/*.html',
		],
		{ base: 'src' },
	).pipe(dest('local/templates/main/assets'));
}

task('images', images);
task('libsCSS', libsCSS);
task('libsJS', libsJS);
task('styles', styles);
task('scripts', scripts);
task('fonts', fonts);
task('clean', clean);
task('watch', watchFiles);
task('build', build);

task(
	'default',
	series('clean', parallel('libsCSS', 'libsJS'), parallel('styles', 'scripts', 'images', 'fonts', 'watch')),
);

task(
	'build',
	series('clean', parallel('libsCSS', 'libsJS'), parallel('styles', 'scripts', 'images', 'fonts'), parallel('build')),
);
