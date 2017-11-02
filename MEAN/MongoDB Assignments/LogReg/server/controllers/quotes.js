const mongoose = require('mongoose');
const User = mongoose.model('User');
const Quote = mongoose.model('Quote');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  addQuote: function(req, res){
    console.log(req.params.id);
    User.findOne({ _id: req.params.id })
    .then( (user) => {
      req.session.name = req.params.id;
      console.log(req.session.name);
      let quote = new Quote(req.body)
      quote._user = user._id;
      quote.save((err) => {
        if(err){
          console.log(`Error: ${ err }`);
        }
        else{
          console.log("Successfully saved quote");
          user.quotes.push(quote);
          console.log(user);
          user.save((err) => {
            if(err){
            console.log(`Error: ${ err }`);
            }
            else{
              console.log("Successfully added a quote");
              Quote.find({}).populate('_user', 'name').exec(function(err, quotes){
                if(err){
                  console.log(`There was an error retrieving quotes: ${ err }`);
                  res.redirect('/');
                }
                else{
                  let session = req.session.name;
                  console.log("Successfully loaded quotes");
                  res.render("quotes", { quotes, session });
                }
              });
            }
          });
        }
      });
    })
    .catch((err) => {
      console.log(`This user is not registered and cannot add a quote: ${ err }`);
      req.session.destroy();
      res.redirect('/');
    });
  }
}