const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
   title: {
       type: String,
       required:true,
       minlength:3,
   },
   preview:{
    type: String,
    required:true,
   },
   desc: {
    type: String,
    required:true,
    minlength:4
   },
   link: {
    type: String,
    required:true
   }

});

const serviceModel = mongoose.model('services',serviceSchema);

module.exports = serviceModel;