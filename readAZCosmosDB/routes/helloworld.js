var express = require('express');
var router = express.Router();

/* GET hello world page. */
router.get('/', function(req, res, next) {
    console.log(req.url);
  res.render('helloworld', { title: 'Hello, World! page' });
});

module.exports = router;
