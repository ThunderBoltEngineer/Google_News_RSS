var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const GoogleNewsRss = require('google-news-rss');
  
  const googleNews = new GoogleNewsRss();
  
  googleNews
     .search('billboard advertising')
     .then(resp => { console.log(resp); res.render('index', { title: 'Express' }); } )
     .catch(err => { console.log(err); res.render('index', { title: err }); });

  
});

module.exports = router;
