module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'assets/build/css/global.css': 'assets/css/global.scss'
    }
  }
}