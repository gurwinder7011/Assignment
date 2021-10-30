var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    userName: 'Gurwinder Singh' });
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
     title: 'About' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {
     title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', {
     title: 'Services' });
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
     title: 'Contact me' });
});

module.exports = router;
