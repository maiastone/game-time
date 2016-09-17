var $ = require('jquery');
// var GameGrid = require('../lib/tile.js');
var Tile = require('../lib/tile.js');


var tile1 = new Tile(null, 1);
$('#c1').text(tile1.data);
tile1.next = new Tile(null, 2);
$('#c2').text(tile1.next.data);
tile1.next.next = new Tile(null,3);
$('#c3').text(tile1.next.next.data);
tile1.next.next.next = new Tile(null,4);
$('#c4').text(tile1.next.next.next.data);

tile1.start();
tile1.next.start();

$(document).on('keyup',function(e){
  var keyPressed = e.which;
  if (keyPressed === 39){
    // how can c2 be tile.next
    $('#c2').append(tile1.data);
    tile1.data = tile1.left;
    console.log(tile1.data);
    console.log(tile1.next.data);
  }
});


tile1.moveRight(tile1, tile1.next);
console.log(tile1.data);
console.log(tile1.next.data);

// $(document).on('keyup',function(e){
//   var keyPressed = e.which;
//   if (keyPressed === 39){
//     $('#c2').append(tile1.data);
//     tile1.data = null;
//     console.log(tile1.data);
//     console.log(tile1.next.data);
//   }
// });
