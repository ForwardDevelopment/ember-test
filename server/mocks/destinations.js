module.exports = function(app) {
  var express = require('express');
  var destinationsRouter = express.Router();

  destinationsRouter.get('/', function(req, res) {
  res.send({
    "destinations": [{
      id: 1,
      title: "Destination 1"
    }, {
      id: 2,
      title: "Destination 2"
    }
  ]});
});

  destinationsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  destinationsRouter.get('/:id', function(req, res) {
    res.send({
      'destinations': {
        id: req.params.id
      }
    });
  });

  destinationsRouter.put('/:id', function(req, res) {
    res.send({
      'destinations': {
        id: req.params.id
      }
    });
  });

  destinationsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/destinations', destinationsRouter);
};
