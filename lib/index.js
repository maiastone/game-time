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

var allTiles = [];

for (var i = 0; i < 16; i++) {
  allTiles.push(new Tile('oooo' , i));
}

allTiles.forEach(function(e, i) {
  e.next = allTiles[i + 1];

  if (i > 0) {
    e.previous = allTiles[i - 1];
  }

  if (i > 3) {
    e.above = allTiles[i-4];
  }

  if (i < 12) {
    e.below = allTiles[i+4];
  }

});

var head = allTiles[0];

console.log(head);

var loadGrid = function() {
  for (var i = 1; i < 17; i++) {
    $(`#c${i}`)[0].innerHTML = allTiles[i - 1].data;
  }
};

$(document).ready(function() {
  loadGrid();
});
// $(document).on('keyup',function(e){
//   var keyPressed = e.which;
//   if (keyPressed === 39){
//THIS IS OUR RENDER LOOP! FIGURE IT OUT
// }
// });
    // how can c2 be tile.next
//     this.next = tile1.data;
//     if(tile1.data === 2){
//     }
//     tile1.data = tile1.left;
//     console.log(tile1.data);
//     console.log(tile1.next.data);
//   }
// });




// $(document).on('keyup',function(e){
//   var keyPressed = e.which;
//   if (keyPressed === 39){
//     $('#c2').append(tile1.data);
//     tile1.data = null;
//     console.log(tile1.data);
//     console.log(tile1.next.data);
//   }
// });
