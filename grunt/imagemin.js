module.exports = {
	dynamic: {
		files: [{
			expand: true,
			cwd: 'assets/src/images/',
			src: ['**/*.{png,jpg,gif}'],
			dest: 'assets/build/images/'
		}]
	}
};
