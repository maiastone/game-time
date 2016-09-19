var $ = require('jquery');
// var GameGrid = require('../lib/tile.js');
var Tile = require('../lib/tile.js');







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

function tilesAreEmpty(data){
  if (data === null){
    return data;
  }
}
function filterTiles(allTiles){
  allTiles = allTiles.filter(tilesAreEmpty);
  return allTiles;
}
console.log(filterTiles);

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
