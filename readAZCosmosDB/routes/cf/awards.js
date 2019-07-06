var express = require('express');
var router = express.Router();

/* GET Contentful Awards list. */
router.get('/', function(req, res, next) {
    console.log(req.url);
    var db = req.db;
    var collection = db.get('awards');
    collection.find({},{},function(e, docs){
        res.render('cf/awards', { awardslist: docs});
        });
});

module.exports = router;
