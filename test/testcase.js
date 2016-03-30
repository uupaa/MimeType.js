var ModuleTestMimeType = (function(global) {

var test = new Test(["MimeType"], { // Add the ModuleName to be tested here (if necessary).
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        el:         true,  // enable electron (render process) test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
            console.error(error.message);
        }
    });

if (IN_BROWSER || IN_NW || IN_EL || IN_WORKER || IN_NODE) {
    test.add([
        testMimeType_isText,
        testMimeType_isFont,
        testMimeType_isImage,
        testMimeType_isAudio,
        testMimeType_isVideo,
        testMimeType_getMimeType,
    ]);
}

var MimeType = WebModule["MimeType"];

// --- test cases ------------------------------------------
function testMimeType_isText(test, pass, miss) {
    if ( MimeType.isText("txt") ||
         MimeType.isText("css") ||
         MimeType.isText("html") ||
         MimeType.isText(".html") ||
         MimeType.isText(".HTML") ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testMimeType_isFont(test, pass, miss) {
    if ( MimeType.isFont("ttf") ||
         MimeType.isFont("otf") ||
         MimeType.isFont("woff") ||
         MimeType.isFont(".woff") ||
         MimeType.isFont(".WOFF") ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testMimeType_isImage(test, pass, miss) {
    if ( MimeType.isImage("gif") ||
         MimeType.isImage("png") ||
         MimeType.isImage("jpeg") ||
         MimeType.isImage(".jpg") ||
         MimeType.isImage(".JPEG") ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testMimeType_isAudio(test, pass, miss) {
    if ( MimeType.isAudio("mp3")  ||
         MimeType.isAudio("wave") ||
         MimeType.isAudio("mid")  ||
         MimeType.isAudio("m4a")  ||
         MimeType.isAudio(".m4a") ||
         MimeType.isAudio(".M4A") ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testMimeType_isVideo(test, pass, miss) {
    if ( MimeType.isVideo("mp4") ||
         MimeType.isVideo("mpg") ||
         MimeType.isVideo(".mpg") ||
         MimeType.isVideo(".MPG") ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testMimeType_getMimeType(test, pass, miss) {
    if ( MimeType.getMimeType("js")   === "application/javascript" ||
         MimeType.getMimeType("json") === "application/json" ||
         MimeType.getMimeType(".json") === "application/json" ||
         MimeType.getMimeType(".JSON") === "application/json" ) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

return test.run();

})(GLOBAL);

