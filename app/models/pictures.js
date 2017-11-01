var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    url: String,
    keyword: String,
    height: Number,
    thumb_height: Number,
    thumb_url:String,
    thumb_width: Number,
    type:String,
    width:Number

})

module.exports = mongoose.model('pictures', schema)
