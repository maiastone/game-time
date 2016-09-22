var $ = require('jquery');
// var GameGrid = require('../lib/tile.js');
var Grid = require('../lib/grid.js');
var Tile = require('../lib/tile.js');
var grid = new Grid();


$(document).ready(function() {
  grid.pushArray();
  grid.initGrid();
  grid.loadGrid();
  grid.setHeads();
  // checkForOpenTiles();
});

$(document).on('keydown',function(e){
  var keyPressed = e.which;
  if (keyPressed === 39){
  grid.rightRows();
  grid.loadGrid();
  checkForOpenTiles();
  }
});

$(document).on('keydown',function(e){
  var keyPressed = e.which;
  if (keyPressed === 37){
  grid.leftRows();
  grid.loadGrid();
  checkForOpenTiles();
  }
});

$(document).on('keydown',function(e){
  var keyPressed = e.which;
  if (keyPressed === 38){
  grid.upRows();
  grid.loadGrid();
  checkForOpenTiles();
  }
});

$(document).on('keydown',function(e){
  var keyPressed = e.which;
  if (keyPressed === 40){
  grid.downRows();
  grid.loadGrid();
  checkForOpenTiles();
  }
});


// Random newTile to Null cell

// function checkForOpenTiles() {
//   var allTiles = grid.allTiles;
//   var emptyTiles = [];
//   for (var i = 0; i < grid.allTiles.length; i++) {
//     if(allTiles[i].data === null){
//       emptyTiles.push(allTiles[i]);
//       console.log(emptyTiles);
//
//   var randomTile = Math.floor(Math.random() * grid.allTiles.length) + 1;
//   emptyTiles[randomTile].data = 2;
//     }
//   }
// }



function checkForOpenTiles() {
  var emptyTiles = [];
  grid.allTiles.forEach(function(tile) {
    if(!tile.data){
      emptyTiles.push(tile);
    }
  });
  var randomTile = Math.floor(Math.random() * emptyTiles.length) + 1;
  emptyTiles[randomTile].data = 2;
}
