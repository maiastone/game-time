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
  allTiles.push(new Tile('2' , i));
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

// Random newTile to Null cell
var currentGame;

function checkForOpenTiles() {
  var emptyTiles = [];
  currentGame.tiles.forEach(function (tile) {
    if(tile.data === null) {
       emptyTiles.push(tile);
    }
  });
}





$(document).on('keydown',function(e){
  var keyPressed = e.which;
  if (keyPressed === 39){
}
});




// $(document).on('keyup',function(e){
//   var keyPressed = e.which;
//   if (keyPressed === 39){
//     $('#c2').append(tile1.data);
//     tile1.data = null;
//     console.log(tile1.data);
//     console.log(tile1.next.data);
//   }
// });
