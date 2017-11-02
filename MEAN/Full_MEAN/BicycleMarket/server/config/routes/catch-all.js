const router= require('express').Router();
const path = require('path');

module.exports = router
  .all('*', function(req, res){
    res.sendFile(path.join(__dirname, '../../../MarketPlace/dist/index.html'));
  })