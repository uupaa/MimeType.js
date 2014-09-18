# WMMimeType.js [![Build Status](https://travis-ci.org/uupaa/WMMimeType.js.png)](http://travis-ci.org/uupaa/WMMimeType.js)

[![npm](https://nodei.co/npm/uupaa.wmmimetype.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.wmmimetype.js/)

WMMimeType.js description.

## Document

- [WMMimeType.js wiki](https://github.com/uupaa/WMMimeType.js/wiki/WMMimeType)
- [WebModule](https://github.com/uupaa/WebModule)
    - [Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html)
    - [Development](https://github.com/uupaa/WebModule/wiki/Development)

## How to use

### Browser

```js
<script src="lib/WMMimeType.js"></script>
<script>
console.log( WMMimeType() );
</script>
```

### WebWorkers

```js
importScripts("lib/WMMimeType.js");

console.log( WMMimeType() );
```

### Node.js

```js
var WMMimeType = require("lib/WMMimeType.js");

console.log( WMMimeType() );
```
