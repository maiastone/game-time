var $ = require('jquery');

// var _ = require('lodash');

// Since every instance of a DoublyList is instantiated without nodes, the default values of head and tail are set to null.
function Tile (data, position) {
  this.data = data || null;
  this.position = position;
  this.next = null;
  this.above = null;
  this.left = null;
  this.below = null;
}

function linkedTiles(){
  this._length = 0;
  this.head = null;
  this.tail = null;
}

Tile.prototype.start = function() {
  return this.data = 2;
};


Tile.prototype.moveRight = function(tile1, tile2) {
  // if c3 = 2 and c4 = 2, then c4 = c4*2 and c3 = null
  if (tile1.data === tile2.data ) {
    return (
    tile2.data * 2 && tile1.data === null
    );
  }
};


// what that file exports, otherwise everything in this file is private
// module.exports = makeFunctions;
// you can export functions or objects
// you only want one module.exports per file
//
module.exports = Tile;
