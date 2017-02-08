function index(response) {
	var request=require('request');
	request('https://api.vineapp.com/timelines/popular', function (err, res, body) {
        console.log(JSON.stringify(JSON.parse(res['body'])['data']['records'][0]['videoUrl']));
        
        
    });

	var fs = require('fs');
	var index = fs.readFileSync('../html/index.html');
	response.writeHead(200, {"Content-Type": "text/html"});
    
	response.write(index);
	response.end();

	console.log("Request handler 'index' was called.");
}

function sub1(response) {
	
	var request=require('request');


	var fs = require('fs');
	var index = fs.readFileSync('../html/sub1.html');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(index);
	response.end();

	console.log("Request handler 'sub1' was called.");
}

function sub2(response) {
	
	var request=require('request');


	var fs = require('fs');
	var index = fs.readFileSync('../html/sub2.html');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(index);
	response.end();

	console.log("Request handler 'sub2' was called.");
}

function sub3(response) {
	
	var request=require('request');


	var fs = require('fs');
	var index = fs.readFileSync('../html/sub3.html');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(index);
	response.end();

	console.log("Request handler 'sub3' was called.");
}

function sub4(response) {
	
	var request=require('request');


	var fs = require('fs');
	var index = fs.readFileSync('../html/sub4.html');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(index);
	response.end();

	console.log("Request handler 'sub4' was called.");
}

function sub5(response) {
	
	var request=require('request');


	var fs = require('fs');
	var index = fs.readFileSync('../html/sub5.html');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(index);
	response.end();

	console.log("Request handler 'sub5' was called.");
}

function sub6(response) {
	
	var request=require('request');


	var fs = require('fs');
	var index = fs.readFileSync('../html/sub6.html');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(index);
	response.end();

	console.log("Request handler 'sub6' was called.");
}

function sub7(response) {
	
	var request=require('request');


	var fs = require('fs');
	var index = fs.readFileSync('../html/sub7.html');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(index);
	response.end();

	console.log("Request handler 'sub7' was called.");
}

function stylesheet(response) {
	
	var request=require('request');


	var fs = require('fs');
	var index = fs.readFileSync('../stylesheets/stylesheet.css');
	response.writeHead(200, {"Content-Type": "text/css"});
	response.write(index);
	response.end();

	console.log("Request handler 'stylesheet' was called.");
}

function css_animations(response) {
	
	var request=require('request');


	var fs = require('fs');
	var index = fs.readFileSync('../stylesheets/css-animations.css');
	response.writeHead(200, {"Content-Type": "text/css"});
	response.write(index);
	response.end();

	console.log("Request handler 'css_animations' was called.");
}

function js_animations(response) {
	
	var request=require('request');


	var fs = require('fs');
	var index = fs.readFileSync('../javascript/js-animations.js');
	response.writeHead(200, {"Content-Type": "text/javascript"});
	response.write(index);
	response.end();

	console.log("Request handler 'js_animations' was called.");
}
exports.index = index;
exports.sub1 = sub1;
exports.sub2 = sub2;
exports.sub3 = sub3;
exports.sub4 = sub4;
exports.sub5 = sub5;
exports.sub6 = sub6;
exports.sub7 = sub7;

exports.stylesheet = stylesheet;
exports.css_animations = css_animations;
exports.js_animations = js_animations;
