var $ = require('jquery');
// var GameGrid = require('../lib/tile.js');
var allTiles = require('../lib/grid.js');




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
