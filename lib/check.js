'use strict'

const Speechkit = require('speechkit-js')

module.exports = (token, newsSiteId, articleId) => {
  const speechkit = new Speechkit(token)

  return speechkit.getArticle(newsSiteId, articleId).then(({ state }) => {
    if (state === 'processed') {
      return true
    }

    return false
  })
}
