/**
 * Created by john on 2017/8/24.
 */
var mongoose = require('mongoose');
var contentsSchema = require('../schemas/contents');

module.exports = mongoose.model('Contents',contentsSchema);
