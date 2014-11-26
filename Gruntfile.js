module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					relativeUrls: true,
					sourceMap: true,
					dumpLineNumbers: true
				},
				files: {
					'web/css/custom.css': 'sources/less/custom.less' 
				}
			},
			production: {
				options: {
					relativeUrls: true,
					cleancss: true
				},
				files: {
					'web/css/custom.css': 'sources/less/custom.less' 
				}
			}
		},
		copy: { 
			files: {
				cwd: 'sources/images',  	// set working folder / root to copy
				src: '**/*',            // copy all files and subfolders
				dest: 'web/images',    	// destination folder
				expand: true            // required when using cwd
			},
			js: {
				cwd: 'sources/js',  	// set working folder / root to copy
				src: '**/*',            // copy all files and subfolders
				dest: 'web/js',    	// destination folder
				expand: true            // required when using cwd
			},
			fonts: {
				cwd: 'sources/fonts',  	// set working folder / root to copy
				src: '**/*',            // copy all files and subfolders
				dest: 'web/fonts',    	// destination folder
				expand: true            // required when using cwd
			},

		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	grunt.registerTask('default', ['copy:files', 'copy:fonts', 'copy:js', 'less:development']);
	grunt.registerTask('prod', ['copy:files', 'copy:fonts', 'copy:js', 'less:production']);

};
