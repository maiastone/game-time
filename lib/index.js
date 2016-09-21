var $ = require('jquery');
// var GameGrid = require('../lib/tile.js');
var Grid = require('../lib/grid.js');
var grid = new Grid();


$(document).ready(function() {
  grid.initGrid();
  grid.loadGrid();
  grid.setHeads();
});

$(document).on('keydown',function(e){
  var keyPressed = e.which;
  if (keyPressed === 39){
  grid.rightRows();
  grid.loadGrid();
  }
});

$(document).on('keydown',function(e){
  var keyPressed = e.which;
  if (keyPressed === 37){
  grid.leftRows();
  grid.loadGrid();
  }
});

$(document).on('keydown',function(e){
  var keyPressed = e.which;
  if (keyPressed === 38){
  grid.upRows();
  grid.loadGrid();
  }
});

$(document).on('keydown',function(e){
  var keyPressed = e.which;
  if (keyPressed === 40){
  grid.downRows();
  grid.loadGrid();
  }
});
// when the up arrow is pressed -- key 38
// row 1 becomes all the pullTiles

// when the down arrow is pressed -- key 40
// row 4 becomes all the pullTiles





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
