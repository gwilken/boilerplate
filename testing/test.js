var builder = require('../controllers/builder.js');
var db = require('../models');
var beautify = require('js-beautify').html;

var obj = {
      bootstrap: true,
      jquery: true,
      express: true,
      css_reset: true
    };

var options = {
      html: {
          markers: ['{--title--}', '{--comment--}'],
          strings: ['test title', 'comment added']
        }
      };


var args = builder.parseOptions(obj);


builder.build(args, function(data) {

  builder.beautify(data, function(res) {
    console.log(res);
  });

})


//
// builder.build(args, function(templates) {
//
// //  builder.replaceOptions(templates, options, function(data) {
//
//     builder.scrubMarkers(templates, function(res) {
//
//       console.log(res);
//
//     })
// //  })
// })
