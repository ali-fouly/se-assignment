var express = require('express');
var router = express.Router();
var db = require('../db.js');
/*
router.get('/api/post', function(req, res, next) {
    db.db().collection('post').findOne(function(err, post) {
        if (err) return next(err);
        res.send(post);
    });
});
*/
module.exports = router;