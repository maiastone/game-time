var $ = require('jquery');
// var GameGrid = require('../lib/tile.js');
var Grid = require('../lib/grid.js');
var grid = new Grid();


$(document).ready(function() {
  grid.pushArray();
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
