module.exports = {
  options: {
    prefix: 'dist'
  },
  files: {
    'index.html': 'index.html'
  },
  files: [{
    expand: true,
    src: ['dist/*.html'],
    dest: 'dist'
  }]
}
