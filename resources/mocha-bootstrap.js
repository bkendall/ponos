'use strict'

const chai = require('chai')
chai.use(require('chai-as-promised'))

require('sinon').usingPromise(require('bluebird'))

/* istanbul ignore next */
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:')
  console.error((error && error.stack) || error)
  process.exit(2)
})
