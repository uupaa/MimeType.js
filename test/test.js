var ModuleTestWMMimeType = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("WMMimeType", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        testWMMimeType_isText,
        testWMMimeType_isAudio,
        testWMMimeType_isVideo,
        testWMMimeType_getMimeType,
    ]).run().clone();

function testWMMimeType_isText(test, pass, miss) {
    if ( WMMimeType.isText("txt") ||
         WMMimeType.isText("css") ||
         WMMimeType.isText("html") ||
         WMMimeType.isText(".html") ||
         WMMimeType.isText(".HTML") ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWMMimeType_isAudio(test, pass, miss) {
    if ( WMMimeType.isAudio("mp3")  ||
         WMMimeType.isAudio("wave") ||
         WMMimeType.isAudio("mid")  ||
         WMMimeType.isAudio("m4a")  ||
         WMMimeType.isAudio(".m4a") ||
         WMMimeType.isAudio(".M4A") ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWMMimeType_isVideo(test, pass, miss) {
    if ( WMMimeType.isVideo("mp4") ||
         WMMimeType.isVideo("mpg") ||
         WMMimeType.isVideo(".mpg") ||
         WMMimeType.isVideo(".MPG") ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWMMimeType_getMimeType(test, pass, miss) {
    if ( WMMimeType.getMimeType("js")   === "application/javascript" ||
         WMMimeType.getMimeType("json") === "application/json" ||
         WMMimeType.getMimeType(".json") === "application/json" ||
         WMMimeType.getMimeType(".JSON") === "application/json" ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

})((this || 0).self || global);

