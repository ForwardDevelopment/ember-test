module.exports = function(app) {
  var express = require('express');
  var listingsRouter = express.Router();

  listingsRouter.get('/', function(req, res) {
    res.send({
      'listings':
[
        {
     area:'SouthSide',
        id:1,
        p_id:1,
        address: '100 rent me lane 15332',
     startingBid: 450,
     currentBid: 475,
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius urna enim, sed tempus neque pellentesque in. Donec tortor turpis, maximus eu libero eu, semper ornare ex. Integer dictum aliquam tortor, eu auctor massa porttitor in. Etiam pretium risus eu massa consequat molestie. Sed risus ipsum, euismod vitae rutrum quis, elementum non neque. Duis at leo eget lectus posuere facilisis. Maecenas vitae lobortis odio, at cursus elit. Maecenas odio metus, tincidunt fringilla arcu a, congue varius nisl. Vestibulum a malesuada tortor, sit amet ultrices ex. Aenean tempor mauris sit amet commodo luctus. Vivamus mattis, odio et viverra dignissim, ante libero tempus ante, eu dictum elit orci ac turpis. Pellentesque tristique tellus at massa euismod, eget finibus tortor efficitur. Aliquam commodo, nisi quis lacinia ornare, ligula erat placerat augue, eget condimentum sapien tortor eu magna. Donec at pharetra sapien. Sed vitae arcu ligula.'

},

{
        area:'Oakland',
        id:2,
        p_id:2,
        address: '200 rent me lane 15332',
     startingBid: 900,
     currentBid: 935,
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius urna enim, sed tempus neque pellentesque in. Donec tortor turpis, maximus eu libero eu, semper ornare ex. Integer dictum aliquam tortor, eu auctor massa porttitor in. Etiam pretium risus eu massa consequat molestie. Sed risus ipsum, euismod vitae rutrum quis, elementum non neque. Duis at leo eget lectus posuere facilisis. Maecenas vitae lobortis odio, at cursus elit. Maecenas odio metus, tincidunt fringilla arcu a, congue varius nisl. Vestibulum a malesuada tortor, sit amet ultrices ex. Aenean tempor mauris sit amet commodo luctus. Vivamus mattis, odio et viverra dignissim, ante libero tempus ante, eu dictum elit orci ac turpis. Pellentesque tristique tellus at massa euismod, eget finibus tortor efficitur. Aliquam commodo, nisi quis lacinia ornare, ligula erat placerat augue, eget condimentum sapien tortor eu magna. Donec at pharetra sapien. Sed vitae arcu ligula.'

},

{
        area:'NorthShore',
        id:3,
        p_id:3,
        address: '300 rent me lane 15332',
     startingBid: 900,
     currentBid: 935,
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius urna enim, sed tempus neque pellentesque in. Donec tortor turpis, maximus eu libero eu, semper ornare ex. Integer dictum aliquam tortor, eu auctor massa porttitor in. Etiam pretium risus eu massa consequat molestie. Sed risus ipsum, euismod vitae rutrum quis, elementum non neque. Duis at leo eget lectus posuere facilisis. Maecenas vitae lobortis odio, at cursus elit. Maecenas odio metus, tincidunt fringilla arcu a, congue varius nisl. Vestibulum a malesuada tortor, sit amet ultrices ex. Aenean tempor mauris sit amet commodo luctus. Vivamus mattis, odio et viverra dignissim, ante libero tempus ante, eu dictum elit orci ac turpis. Pellentesque tristique tellus at massa euismod, eget finibus tortor efficitur. Aliquam commodo, nisi quis lacinia ornare, ligula erat placerat augue, eget condimentum sapien tortor eu magna. Donec at pharetra sapien. Sed vitae arcu ligula.'

},
 {
     area:'SouthSide',
        id:4,
        p_id:4,
        address: '400 rent me lane 15332',
     startingBid: 450,
     currentBid: 475,
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius urna enim, sed tempus neque pellentesque in. Donec tortor turpis, maximus eu libero eu, semper ornare ex. Integer dictum aliquam tortor, eu auctor massa porttitor in. Etiam pretium risus eu massa consequat molestie. Sed risus ipsum, euismod vitae rutrum quis, elementum non neque. Duis at leo eget lectus posuere facilisis. Maecenas vitae lobortis odio, at cursus elit. Maecenas odio metus, tincidunt fringilla arcu a, congue varius nisl. Vestibulum a malesuada tortor, sit amet ultrices ex. Aenean tempor mauris sit amet commodo luctus. Vivamus mattis, odio et viverra dignissim, ante libero tempus ante, eu dictum elit orci ac turpis. Pellentesque tristique tellus at massa euismod, eget finibus tortor efficitur. Aliquam commodo, nisi quis lacinia ornare, ligula erat placerat augue, eget condimentum sapien tortor eu magna. Donec at pharetra sapien. Sed vitae arcu ligula.'

},

{
        area:'Oakland',
        id:5,
        p_id:5,
        address: '500 rent me lane 15332',
     startingBid: 900,
     currentBid: 935,
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius urna enim, sed tempus neque pellentesque in. Donec tortor turpis, maximus eu libero eu, semper ornare ex. Integer dictum aliquam tortor, eu auctor massa porttitor in. Etiam pretium risus eu massa consequat molestie. Sed risus ipsum, euismod vitae rutrum quis, elementum non neque. Duis at leo eget lectus posuere facilisis. Maecenas vitae lobortis odio, at cursus elit. Maecenas odio metus, tincidunt fringilla arcu a, congue varius nisl. Vestibulum a malesuada tortor, sit amet ultrices ex. Aenean tempor mauris sit amet commodo luctus. Vivamus mattis, odio et viverra dignissim, ante libero tempus ante, eu dictum elit orci ac turpis. Pellentesque tristique tellus at massa euismod, eget finibus tortor efficitur. Aliquam commodo, nisi quis lacinia ornare, ligula erat placerat augue, eget condimentum sapien tortor eu magna. Donec at pharetra sapien. Sed vitae arcu ligula.'

},

{
        area:'NorthShore',
        id:6,
        p_id:6,
        address: '600 rent me lane 15332',
     startingBid: 900,
     currentBid: 935,
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius urna enim, sed tempus neque pellentesque in. Donec tortor turpis, maximus eu libero eu, semper ornare ex. Integer dictum aliquam tortor, eu auctor massa porttitor in. Etiam pretium risus eu massa consequat molestie. Sed risus ipsum, euismod vitae rutrum quis, elementum non neque. Duis at leo eget lectus posuere facilisis. Maecenas vitae lobortis odio, at cursus elit. Maecenas odio metus, tincidunt fringilla arcu a, congue varius nisl. Vestibulum a malesuada tortor, sit amet ultrices ex. Aenean tempor mauris sit amet commodo luctus. Vivamus mattis, odio et viverra dignissim, ante libero tempus ante, eu dictum elit orci ac turpis. Pellentesque tristique tellus at massa euismod, eget finibus tortor efficitur. Aliquam commodo, nisi quis lacinia ornare, ligula erat placerat augue, eget condimentum sapien tortor eu magna. Donec at pharetra sapien. Sed vitae arcu ligula.'

},
 {
     area:'SouthSide',
        id:7,
        p_id:7,
        address: '700 rent me lane 15332',
     startingBid: 450,
     currentBid: 475,
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius urna enim, sed tempus neque pellentesque in. Donec tortor turpis, maximus eu libero eu, semper ornare ex. Integer dictum aliquam tortor, eu auctor massa porttitor in. Etiam pretium risus eu massa consequat molestie. Sed risus ipsum, euismod vitae rutrum quis, elementum non neque. Duis at leo eget lectus posuere facilisis. Maecenas vitae lobortis odio, at cursus elit. Maecenas odio metus, tincidunt fringilla arcu a, congue varius nisl. Vestibulum a malesuada tortor, sit amet ultrices ex. Aenean tempor mauris sit amet commodo luctus. Vivamus mattis, odio et viverra dignissim, ante libero tempus ante, eu dictum elit orci ac turpis. Pellentesque tristique tellus at massa euismod, eget finibus tortor efficitur. Aliquam commodo, nisi quis lacinia ornare, ligula erat placerat augue, eget condimentum sapien tortor eu magna. Donec at pharetra sapien. Sed vitae arcu ligula.'

},

{
        area:'Oakland',
        id:8,
        p_id:8,
        address: '800 rent me lane 15332',
     startingBid: 900,
     currentBid: 935,
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius urna enim, sed tempus neque pellentesque in. Donec tortor turpis, maximus eu libero eu, semper ornare ex. Integer dictum aliquam tortor, eu auctor massa porttitor in. Etiam pretium risus eu massa consequat molestie. Sed risus ipsum, euismod vitae rutrum quis, elementum non neque. Duis at leo eget lectus posuere facilisis. Maecenas vitae lobortis odio, at cursus elit. Maecenas odio metus, tincidunt fringilla arcu a, congue varius nisl. Vestibulum a malesuada tortor, sit amet ultrices ex. Aenean tempor mauris sit amet commodo luctus. Vivamus mattis, odio et viverra dignissim, ante libero tempus ante, eu dictum elit orci ac turpis. Pellentesque tristique tellus at massa euismod, eget finibus tortor efficitur. Aliquam commodo, nisi quis lacinia ornare, ligula erat placerat augue, eget condimentum sapien tortor eu magna. Donec at pharetra sapien. Sed vitae arcu ligula.'

},

{
        area:'NorthShore',
        id:9,
        p_id:9,
        address: '900 rent me lane 15332',
     startingBid: 900,
     currentBid: 935,
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius urna enim, sed tempus neque pellentesque in. Donec tortor turpis, maximus eu libero eu, semper ornare ex. Integer dictum aliquam tortor, eu auctor massa porttitor in. Etiam pretium risus eu massa consequat molestie. Sed risus ipsum, euismod vitae rutrum quis, elementum non neque. Duis at leo eget lectus posuere facilisis. Maecenas vitae lobortis odio, at cursus elit. Maecenas odio metus, tincidunt fringilla arcu a, congue varius nisl. Vestibulum a malesuada tortor, sit amet ultrices ex. Aenean tempor mauris sit amet commodo luctus. Vivamus mattis, odio et viverra dignissim, ante libero tempus ante, eu dictum elit orci ac turpis. Pellentesque tristique tellus at massa euismod, eget finibus tortor efficitur. Aliquam commodo, nisi quis lacinia ornare, ligula erat placerat augue, eget condimentum sapien tortor eu magna. Donec at pharetra sapien. Sed vitae arcu ligula.'

}
    ]

    });
  });

  listingsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  listingsRouter.get('/:id', function(req, res) {
    res.send({
      'listings': {
        id: req.params.id
      }
    });
  });

  listingsRouter.put('/:id', function(req, res) {
    res.send({
      'listings': {
        id: req.params.id
      }
    });
  });

  listingsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/listings', listingsRouter);
};
