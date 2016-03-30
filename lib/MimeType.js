(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("MimeType", function moduleClosure(global, WebModule, VERIFY /*, VERBOSE */) {
"use strict";

// --- technical terms / data structure --------------------
// --- dependency modules ----------------------------------
// --- import / local extract functions --------------------
// --- define / local variables ----------------------------
var MIME_TYPE = {
    "bin":  "application/octet-stream",
    "ttf":  "application/x-font-ttf",
    "otf":  "font/opentype",
    "woff": "application/font-woff",
    "pdf":  "application/pdf",
    "swf":  "application/x-shockwave-flash",
    "mp3":  "audio/mp3",
    "wav":  "audio/wav",
    "mid":  "audio/midi",
    "midi": "audio/midi",
    "m4a":  "audio/x-m4a",
    "mp4":  "video/mp4",
    "mpg":  "video/mpeg",
    "mpeg": "video/mpeg",
    "gif":  "image/gif",
    "png":  "image/png",
    "jpg":  "image/jpeg",
    "jpeg": "image/jpeg",
    "svg":  "image/svg+xml",
    "svgz": "image/svg+xml",
    "txt":  "text/plain",
    "css":  "text/css",
    "htm":  "text/html",
    "html": "text/html",
    "js":   "text/javascript",
    "json": "application/json"
};

// --- class / interfaces ----------------------------------
var MimeType = {
    "getMimeType":  MimeType_getMimeType,   // MimeType.getMimeType(ext:String):MimeTypeString
    "isText":       MimeType_isText,        // MimeType.isText(ext:String):Boolean
    "isFont":       MimeType_isFont,        // MimeType.isFont(ext:String):Boolean
    "isImage":      MimeType_isImage,       // MimeType.isImage(ext:String):Boolean
    "isAudio":      MimeType_isAudio,       // MimeType.isAudio(ext:String):Boolean
    "isVideo":      MimeType_isVideo,       // MimeType.isVideo(ext:String):Boolean
    "repository":   "https://github.com/uupaa/MimeType.js",
};


// --- implements ------------------------------------------
function MimeType_getMimeType(ext) { // @arg String - file extension. "jpg"
                                     // @ret String - mime type. "image/jpeg"
                                     // @desc file extension string to MimeType. ".ext" to mimetype
//{@dev
    if (VERIFY) {
        $valid($type(ext, "String"), MimeType_getMimeType, "ext");
    }
//}@dev

    ext = ext.replace(/^./, "").toLowerCase();
    return MIME_TYPE[ext] || MIME_TYPE["bin"];
}

function MimeType_isText(ext) { // @arg String - "ext" or ".ext"
                                // @ret Boolean
    return /^text/.test( MimeType_getMimeType(ext) );
}

function MimeType_isFont(ext) { // @arg String - "ext" or ".ext"
                                // @ret Boolean
    return /font/.test( MimeType_getMimeType(ext) );
}

function MimeType_isImage(ext) { // @arg String - "ext" or ".ext"
                                 // @ret Boolean
    return /^image/.test( MimeType_getMimeType(ext) );
}

function MimeType_isAudio(ext) { // @arg String - "ext" or ".ext"
                                 // @ret Boolean
    return /^audio/.test( MimeType_getMimeType(ext) );
}

function MimeType_isVideo(ext) { // @arg String - "ext" or ".ext"
                                 // @ret Boolean
    return /^video/.test( MimeType_getMimeType(ext) );
}

return MimeType; // return entity

});

