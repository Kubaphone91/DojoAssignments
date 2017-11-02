const Book = require('mongoose').model('Book');

module.exports = {
  index(request, response){
    Book.find(request.body)
    .then(books => response.json(books))
    .catch(console.log);
  },
  show(request, response){
    Book.findById(request.params.id)
    .then(book => response.json(book))
    .catch(console.log);
  },
  create(request, response){
    Book.create(request.body)
    .then(book => response.json(book))
    .catch(error => {
      console.log(error);

      response.status(422).json(
        Object.keys(error.errors).map(key => error.errors[key].message)
      );
    });
  },
  update(request, response){
    console.log('updating book', request.params.id);
    console.log('updating book', request.body);

    Book.findByIdAndUpdate(request.params.id, request.body, { new: true })
    .then(book => {
      console.log('updated book', book)
      response.json(book);
    })
    .catch(console.log);
  },
  destroy(request, response){
    console.log('removing book', request.params.id);

    Book.findByIdAndRemove(request.params.id)
    .then(book => response.json(book))
    .catch(console.log);
  }
};
