(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

var SUFFIXES = {
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
function WMMimeType() { }

WMMimeType["isText"] = isText;            // WMMimeType.isText(ext:IgnoreCaseString):Boolean
WMMimeType["isFont"] = isFont;            // WMMimeType.isFont(ext:IgnoreCaseString):Boolean
WMMimeType["isImage"] = isImage;          // WMMimeType.isImage(ext:IgnoreCaseString):Boolean
WMMimeType["isAudio"] = isAudio;          // WMMimeType.isAudio(ext:IgnoreCaseString):Boolean
WMMimeType["isVideo"] = isVideo;          // WMMimeType.isVideo(ext:IgnoreCaseString):Boolean
WMMimeType["getMimeType"] = getMimeType;  // WMMimeType.getMimeType(ext:IgnoreCaseString):MimeTypeString

// --- implements ------------------------------------------
function isText(ext) { // @arg IgnoreCaseString - "ext" or ".ext"
                       // @ret Boolean
    return /^text/.test(getMimeType(ext));
}

function isFont(ext) { // @arg IgnoreCaseString - "ext" or ".ext"
                       // @ret Boolean
    return /font/.test(getMimeType(ext));
}

function isImage(ext) { // @arg IgnoreCaseString - "ext" or ".ext"
                        // @ret Boolean
    return /^image/.test(getMimeType(ext));
}

function isAudio(ext) { // @arg IgnoreCaseString - "ext" or ".ext"
                        // @ret Boolean
    return /^audio/.test(getMimeType(ext));
}

function isVideo(ext) { // @arg IgnoreCaseString - "ext" or ".ext"
                        // @ret Boolean
    return /^video/.test(getMimeType(ext));
}

function getMimeType(ext) { // @arg IgnoreCaseStrign - file extension. "ext" or ".ext"
                            // @ret String - mime type
//{@dev
    $valid($type(ext, "String"), getMimeType, "ext");
//}@dev

    ext = ext.replace(/^./, "").toLowerCase();
    return SUFFIXES[ext] || SUFFIXES["bin"];
}

// --- validate / assertions -------------------------------
//{@dev
function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if ("process" in global) {
    module["exports"] = WMMimeType;
}
global["WMMimeType" in global ? "WMMimeType_"
                              : "WMMimeType"] = WMMimeType; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

