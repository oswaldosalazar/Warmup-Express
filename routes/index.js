var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'g31 Clothes Catalog',
      image1: 'images/image1xxl.jpg',
      image2: 'images/1_41_278.1456386167.jpg',
      comment1: 'comm1',
      comment2: 'comm2',
      image3: 'images/shoe1.jpg',
      image4: 'images/shoe2.jpg',
      comment3: 'comm3',
      comment4: 'comm4',
  });
  next()
});

module.exports = router;
