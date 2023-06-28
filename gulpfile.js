const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");

const scripts = () => {
	return src(["app/**/*.js", "!app/js/main.min.js"])
		.pipe(concat("main.min.js"))
		.pipe(uglify())
		.pipe(dest("app/js"))
		.pipe(browserSync.stream());
};

const styles = () => {
	return src("app/scss/style.scss")
		.pipe(autoprefixer({ overrideBrowserlist: ["last 10 version"] }))
		.pipe(concat("style.min.css"))
		.pipe(scss({ outputStyle: "compressed" }))
		.pipe(dest("app/css"))
		.pipe(browserSync.stream());
};

const watching = () => {
	watch(["app/scss/style.scss"], styles);
	watch(["app/js/main.js"], scripts);
	watch(["app/*.html"]).on("change", browserSync.reload);
};

const browserSynchronization = () => {
	browserSync.init({
		server: {
			baseDir: "app/",
		},
	});
};

const clearDist = () => {
	return src('dist')
		.pipe(clean())
}

const building = () => {
	return src(["app/css/style.min.css", "app/js/main.min.js", "app/**/*.html"], {
		base: "app",
	}).pipe(dest("dist"));
};

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browserSynchronization = browserSynchronization;

exports.build = series(clearDist, building)
exports.default = parallel(styles, scripts, browserSynchronization, watching);
