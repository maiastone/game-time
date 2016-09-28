var $ = require('jquery');
var Grid = require('../lib/grid.js');
var grid = new Grid();


$(document).ready(function() {
  grid.pushArray();
  grid.loadGrid();
  grid.setHeads();
});

$('.new-game').on('click', function(){
  grid = new Grid();
  grid.pushArray();
  grid.loadGrid();
  grid.setHeads();

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


function checkForOpenTiles() {
  var emptyTiles = [];
  grid.allTiles.forEach(function(tile) {
    if(!tile.data){
      emptyTiles.push(tile);
    }
});

  var randomTile = Math.floor(Math.random() * emptyTiles.length);
  console.log(randomTile, "random tile pos");
  emptyTiles[randomTile].start();
  grid.loadGrid();

}
