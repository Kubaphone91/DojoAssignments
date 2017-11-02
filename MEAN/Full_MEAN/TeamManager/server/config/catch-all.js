const router = require('express').Router();
const path = require('path');

module.exports = router
  .all('*', function(req, res){
    res.sendfile(path.join(__dirname, '../../Team/dist/index.html'));
  })