const assert = require('assert')
const axios = require('axios')

const { url } = require('./config')

module.exports = async function main(args) {
  const { _, ...params } = args
  assert(_.length === 1)
  const { data } = await axios.post(url, {
    method: _[0],
    params,
  })
  console.log(data)
}
