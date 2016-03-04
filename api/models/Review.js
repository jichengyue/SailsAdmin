/**
* Review.js
*
* @description :: create a data modal to manage
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var uuid = require('node-uuid');
module.exports = {

  attributes: {
    title:'string',
    text:'text',
    category:'string',
    number:{
      type:'string',
      defaultsTo:uuid.v4()
    },
    money:{
      type:'float',
      size:100
    }
  }
};

