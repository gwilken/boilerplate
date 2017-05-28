var builder = require('../controllers/builder.js');
var db = require('../models');
var beautify = require('js-beautify').html;

var obj = {
      bootstrap: true,
      jquery: true
    };

var options = {
      html: {
          markers: ['{--title--}', '{--comment--}'],
          strings: ['test title', 'comment added']
        }
      };


var args = builder.parseOptions(obj);


builder.build(args, function(data) {

  console.log(data);

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
