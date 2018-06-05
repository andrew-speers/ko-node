//A comment
var http = require('http');
var fileSystem = require('fs');

var server = http.createServer(function(req, resp){
	fileSystem.readFile('./index.html', function(error, fileContent){
		if(error){
			resp.writeHead(500, {'Content-Type': 'text/plain'});
			resp.end('Error');
		}
		else{
			resp.writeHead(200, {'Content-Type': 'text/html'});
			resp.write(fileContent);
			resp.end();
		}
	});
    	fileSystem.readFile('./js/head.js', function(error, fileContent){
		if(error){
			resp.writeHead(500, {'Content-Type': 'text/plain'});
			resp.end('Error');
		}
		else{
			resp.writeHead(200, {'Content-Type': 'text/javascript'});
			resp.write(fileContent);
			resp.end();
		}
	});
    	fileSystem.readFile('./js/knockout.js', function(error, fileContent){
		if(error){
			resp.writeHead(500, {'Content-Type': 'text/plain'});
			resp.end('Error');
		}
		else{
			resp.writeHead(200, {'Content-Type': 'text/javascript'});
			resp.write(fileContent);
			resp.end();
		}
	});
    	fileSystem.readFile('./js/jquery.js', function(error, fileContent){
		if(error){
			resp.writeHead(500, {'Content-Type': 'text/plain'});
			resp.end('Error');
		}
		else{
			resp.writeHead(200, {'Content-Type': 'text/javascript'});
			resp.write(fileContent);
			resp.end();
		}
	});
    	fileSystem.readFile('./js/app.js', function(error, fileContent){
		if(error){
			resp.writeHead(500, {'Content-Type': 'text/plain'});
			resp.end('Error');
		}
		else{
			resp.writeHead(200, {'Content-Type': 'text/javascript'});
			resp.write(fileContent);
			resp.end();
		}
	});
});

server.listen(8080);
