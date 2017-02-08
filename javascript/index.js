var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.index;
handle["/all"] = requestHandlers.index;
handle["/sports"] = requestHandlers.sub1;
handle["/news"] = requestHandlers.sub2;
handle["/vines"] = requestHandlers.sub3;
handle["/gaming"] = requestHandlers.sub4;
handle["/random"] = requestHandlers.sub5;
handle["/funny"] = requestHandlers.sub6;
handle["/other"] = requestHandlers.sub7;


handle["/stylesheet"] = requestHandlers.stylesheet;
handle["/css_animations"] = requestHandlers.css_animations;
handle["/js_animations"] = requestHandlers.js_animations;
server.start(router.route, handle);