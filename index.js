'use strict'

const check = require('./lib/check')
const sleep = require('./lib/sleep')

module.exports = async (
  token,
  newsSiteId,
  articleId,
  { pooling = false } = {}
) => {
  if (!pooling) {
    const isProcessed = await check(token, newsSiteId, articleId)
    return isProcessed
  }

  let final

  do {
    await sleep(2500)

    try {
      final = await check(token, newsSiteId, articleId)
    } catch (err) {}
  } while (!final)

  return final
}
