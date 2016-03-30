# MimeType.js [![Build Status](https://travis-ci.org/uupaa/MimeType.js.svg)](https://travis-ci.org/uupaa/MimeType.js)

[![npm](https://nodei.co/npm/uupaa.mimetype.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.mimetype.js/)

MimeType detection.

This module made of [WebModule](https://github.com/uupaa/WebModule).

## Documentation
- [Spec](https://github.com/uupaa/MimeType.js/wiki/)
- [API Spec](https://github.com/uupaa/MimeType.js/wiki/MimeType)

## Browser, NW.js and Electron

```js
<script src="<module-dir>/lib/WebModule.js"></script>
<script src="<module-dir>/lib/MimeType.js"></script>
<script>
console.log( MimeType.getMimeType("swf") ); // "application/x-shockwave-flash"
</script>
```

## WebWorkers

```js
importScripts("<module-dir>lib/WebModule.js");
importScripts("<module-dir>lib/MimeType.js");

```

## Node.js

```js
require("<module-dir>lib/WebModule.js");
require("<module-dir>lib/MimeType.js");

```

