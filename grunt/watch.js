module.exports = {
	css: {
		files: ['assets/src/scss/**/*.scss'],
		tasks: ['sass'],
	},
	js: {
		files: ['assets/src/js/**/*.js'],
		tasks: ['concat', 'uglify'],
	},
	img: {
		files: ['assets/src/img/*.{png,jpg,gif}'],
		tasks: ['imagemin'],
	}
};
