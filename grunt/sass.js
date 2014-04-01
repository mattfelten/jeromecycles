module.exports = {
	dist: {
		options: {
			loadPath: [
				require('node-bourbon').includePaths,
				require('node-neat').includePaths
			],
			style: 'compressed'
		},
		files: {
			'assets/build/css/site.css': 'assets/src/scss/site.scss'
		}
	}
};
