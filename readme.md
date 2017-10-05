# speechkit-state [![Build Status](https://travis-ci.org/bukinoshita/speechkit-state.svg?branch=master)](https://travis-ci.org/bukinoshita/speechkit-state)

> Check if the state of SpeechKit article has been processed


## Install

```bash
$ yarn add speechkit-state
```


## Usage

```js
const speechkitState = require('speechkit-state')

await speechkitState(<token>, <newsSiteId>, <articleId>)
// => true
```


## API

### speechkitState(token, newsSiteId, articleId, [options])

Returns a `promise`

#### token

Type: `string`<br/>
Description: Your [SpeechKit](https://speechkit.io/) token<br/>
Required

#### newsSiteId

Type: `string`<br/>
Description: The id of your site you want to fetch all articles for. This can also be your news_sites external id<br/>
Required

#### articleId

Type: `string`<br/>
Description:  The id of the article you want to request.

##### options

Type: `object`

##### pooling

Type: `boolean`<br/>
Default: `false`

It will pool the API until it the article is processed


## Related

- [speechkit](https://github.com/bukinoshita/speechkit) — AI-read audio for your news posts
- [speechkit-js](https://github.com/bukinoshita/speechkit-js) — JavaScript client for interacting with the [SpeechKit API](https://docs.speechkit.io)


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
