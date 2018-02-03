const fs = require('fs');
const path = require('path');

module.exports = function(req, res){
  fs.exists('.' + req.url, function(exists){
    if(exists){
      if(req.url === '/'){
        fs.readFile('./views/index.html', 'utf8', function(errors, contents){
          res.write(contents);
          res.end();
        })
      }
      else{
        fs.readFile('.' + path.dirname(req.url) + '/' + path.basename(req.url), function(errors, contents){
          res.write(contents);
          res.end();
        })
      }
    }
    else{
      res.end("File not found!");
    }
  })
}