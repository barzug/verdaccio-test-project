const first = require('@test-project/first')
const second = require('@test-project/second')
const { logger } = require('@test-project/utils')

function main() {
  logger('main new')
}

function run() {
  main()
  first()
  second()
}

run()