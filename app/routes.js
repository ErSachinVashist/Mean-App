var Pictures = require('./models/pictures');

var scrapPics = require('../custom/getPicsFromGoogle')
module.exports = function(app) {

    app.get('/api/getPicsFromDb', function(req, res) {
        // use mongoose to get all nerds in the database
        Pictures.find(function(err, pics) {
            if (err)
                res.send(err);

            res.json(pics);
        });
    });

    app.get('/api/scrapPics', function(req, res) {
        // use mongoose to get all nerds in the database
        scrapPics(Pictures,req,res)
    });

};