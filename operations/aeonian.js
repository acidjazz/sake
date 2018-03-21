require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'sake-'
  },
  environments: {
    production: 'ELNGOBPLQW0TW',
    staging: 'E3TYLEGKGPPT5K',
  }
}).deploy(process.argv[2])
