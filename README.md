# ajax-input-validator

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Developed for use in React html input's to watch for changes and AJAX run a validator

## Usage

[![NPM](https://nodei.co/npm/ajax-input-validator.png)](https://www.npmjs.com/package/ajax-input-validator)

`let aiv = new AjaxInputValidator({time:2000, validate_func:validate_func});`

`<input onKeyUp={aiv.keyUp} onPaste={aiv.paste} onBlur{aiv.blur} />`

## License

MIT, see [LICENSE.md](http://github.com/txm/ajax-input-validator/blob/master/LICENSE.md) for details.

## HEALTH WARNING

The big fail is that the plugin is dumb by design and doesn't know what validation function is being executed, therefore I don't yet have a test I can run.
