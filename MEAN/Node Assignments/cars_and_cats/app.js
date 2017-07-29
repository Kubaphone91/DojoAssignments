
var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){

    console.log('client request URL: ', request.url);

    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === "/cars"){
      fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === "/cats"){
      fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === "/cars/new"){
      fs.readFile('./views/cars_form.html', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === "/stylesheets/style.css"){
      fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === "/images/cars/car1.jpg"){
      fs.readFile('./images/cars/car1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === "/images/cars/car2.jpg"){
      fs.readFile('./images/cars/car2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === "/images/cars/car3.jpg"){
      fs.readFile('./images/cars/car3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === "/images/cats/cat1.jpg"){
      fs.readFile('./images/cats/cat1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === "/images/cats/cat2.jpg"){
      fs.readFile('./images/cats/cat2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === "/images/cats/cat3.jpg"){
      fs.readFile('./images/cats/cat3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
      });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});

server.listen(7077);

console.log("Running in localhost at port 7077");
