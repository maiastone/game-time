var $ = require('jquery');
// var GameGrid = require('../lib/tile.js');
var Grid = require('../lib/grid.js');
var grid = new Grid();




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


$(document).ready(function() {
  grid.initGrid();
  grid.setHeads();
  grid.setRightRows();
  console.log(grid)
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
    grid.moveRight();
    grid.loadGrid();
  }
});


// when the up arrow is pressed -- key 38
// row 1 becomes all the pullTiles

// when the down arrow is pressed -- key 40
// row 4 becomes all the pullTiles

// when the left arrow is pressed -- key 37
// column 1 becomes all the pullTiles

// when the right arrow is pressed -- key 39
// column 4 becomes all the pullTiles
