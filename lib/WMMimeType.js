(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

var BINARY      = "application/octet-stream";
var APP_PDF     = "application/pdf";
var APP_SWF     = "application/x-shockwave-flash";
var AUDIO_MP3   = "audio/mp3";
var AUDIO_WAVE  = "audio/wav";
var AUDIO_MIDI  = "audio/midi";
var AUDIO_M4A   = "audio/x-m4a";
var VIDEO_MP4   = "video/mp4";
var VIDEO_MPEG  = "video/mpeg";
var IMAGE_GIF   = "image/gif";
var IMAGE_PNG   = "image/png";
var IMAGE_JPEG  = "image/jpeg";
var IMAGE_SVG   = "image/svg+xml";
var TEXT        = "text/plain";
var TEXT_CSS    = "text/css";
var TEXT_HTML   = "text/html";
var TEXT_JS     = "text/javascript";
var APP_JSON    = "application/json";
var FONT_TTF    = "application/x-font-ttf";
var FONT_OTF    = "font/opentype";
var FONT_WOFF   = "application/font-woff";

var EXT_TO_SUFFIXES = {
        "bin":  BINARY,
        "ttf":  FONT_TTF,
        "otf":  FONT_OTF,
        "woff": FONT_WOFF,
        "pdf":  APP_PDF,
        "swf":  APP_SWF,
        "mp3":  AUDIO_MP3,
        "wav":  AUDIO_WAVE,
        "mid":  AUDIO_MIDI,
        "midi": AUDIO_MIDI,
        "m4a":  AUDIO_M4A,
        "mp4":  VIDEO_MP4,
        "mpg":  VIDEO_MPEG,
        "mpeg": VIDEO_MPEG,
        "gif":  IMAGE_GIF,
        "png":  IMAGE_PNG,
        "jpg":  IMAGE_JPEG,
        "jpeg": IMAGE_JPEG,
        "svg":  IMAGE_SVG,
        "svgz": IMAGE_SVG,
        "txt":  TEXT,
        "css":  TEXT_CSS,
        "htm":  TEXT_HTML,
        "html": TEXT_HTML,
        "js":   TEXT_JS,
        "json": APP_JSON
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
    return EXT_TO_SUFFIXES[ext] || BINARY;
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

