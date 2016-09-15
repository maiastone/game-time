var $ = require('jquery');
var Tile = require('tile.js');

function Grid() {
  this.column1 = [new Tile(1),new Tile(5),new Tile(9),new Tile(13)];
  this.column2 = [];
  this.column3 = [];
  this.column4 = [];
  this.row1 = [];
  this.row2 = [];
  this.row3 = [];
  this.row3 = [];
  this.allRows = [];
  this.allColumns = [];
}

Grid.prototype.compare = function(tile, tile2 ) {
  return tile.data === tile2.data;
};

Grid.prototype.runRowLeft = function() {
  var array;
  for(var i = 0; i < array.length; i++) {
    if (this.compare(array[i], array[i + 1])) {
        array[i+1].multiple();
        array[i].data = null;
    }
    if(array[i+1] === null){
      array[i +1].change(array[i].data);
      array[i].change(null);
    }
  }
};


Grid.prototype.tiles = [];


module.exports = Grid;
