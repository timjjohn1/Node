//require = import in java
var routes = require('express').Router();
var db = require('../dao/db');
var authorDao = require('../dao/authorDao');

//eq to request mapping
routes.get('/author', function (req, res) {
  authorDao.getAllAuthors(function (error, result) {
    if (error) throw error;
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  });
});

routes.post('/author', function (req, res) {
  var author = req.body;
  authorDao.addAuthor(author, function (err, result) {
    if (err) {
      res.status(400);
      res.send('Add Author Failed!');
    }
    res.status(201);
    res.send('Add Author Successful!');
  });
});

routes.delete('/author/:id', function (req, res) {
  authorDao.removeAuthor(req.params.id, function (err, result) {
    if (err) {
      res.status(400);
      res.send('Delete Author Failed!');
    }
    res.send('Delete Author Successful!');
  });
});

routes.put('/author', function (req, res) {
  var author = req.body;
  authorDao.updateAuthor(author, function (err, result) {
    if (err) {
      res.status(400);
      res.send('Update Author Failed!');
    }
    res.status(201);
    res.send('Update Author Successful!');
  });

});

module.exports = routes;
