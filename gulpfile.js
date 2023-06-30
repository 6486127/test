const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const avif = require("gulp-avif");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const svgSprite = require("gulp-svg-sprite");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

const fonts = () => {
	return src("app/fonts/src/*.*")
		.pipe(
			fonter({
				formats: ["woff", "ttf"],
			})
		)
		.pipe(src("app/fonts/*.ttf"))
		.pipe(ttf2woff2())
		.pipe(dest("app/fonts"));
};

const images = () => {
	return src(["app/images/src/*.*", "!app/images/src/*.svg"])
		.pipe(newer("app/images/dist"))
		.pipe(avif({ quality: 50 }))

		.pipe(src("app/images/src/*.*"))
		.pipe(newer("app/images/dist"))
		.pipe(webp())

		.pipe(src("app/images/src/*.*"))
		.pipe(newer("app/images/dist"))
		.pipe(imagemin())

		.pipe(dest("app/images/dist"));
};

const sprite = () => {
	return src("app/images/dist/*.svg")
		.pipe(
			svgSprite({
				mode: {
					stack: {
						sprite: "../sprite.svg",
						example: true,
					},
				},
			})
		)
		.pipe(dest("app/images/dist"));
};

const scripts = () => {
	return src(["app/**/*.js", "!app/js/main.min.js"])
		.pipe(concat("main.min.js"))
		.pipe(uglify())
		.pipe(dest("app/js"))
		.pipe(browserSync.stream());
};

const styles = () => {
	return src("app/scss/main.scss")
		.pipe(autoprefixer({ overrideBrowserlist: ["last 10 version"] }))
		.pipe(concat("style.min.css"))
		.pipe(scss({ outputStyle: "compressed" }))
		.pipe(dest("app/css"))
		.pipe(browserSync.stream());
};

const watching = () => {
	browserSync.init({
		server: {
			baseDir: "app/",
		},
	});
	watch(["app/scss/**/*.scss"], styles);
	watch(["app/images/src"], images);
	watch(["app/**/*.js", "!app/js/main.min.js"], scripts);
	watch(["app/*.html"]).on("change", browserSync.reload);
};

const clearDist = () => {
	return src("dist").pipe(clean());
};

const building = () => {
	return src(
		[
			"app/css/style.min.css",
			"app/images/dist/*.*",
			"app/images/dist/sprite.svg",
			"app/fonts/*.*",
			"app/js/main.min.js",
			"app/**/*.html",
		],
		{
			base: "app",
		}
	).pipe(dest("dist"));
};

exports.styles = styles;
exports.images = images;
exports.fonts = fonts;
exports.sprite = sprite;
exports.scripts = scripts;
exports.watching = watching;

exports.build = series(clearDist, building);
exports.default = parallel(styles, images, scripts, watching);
