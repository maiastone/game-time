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

Tile.prototype.start = function() {
  return this.data = 2;
};


Tile.prototype.moveRight = function() {
  // if (tile.data === tile.next.data) {
debugger;
    this.data = 7;
    // tile.next.data + tile.data;
};


// what that file exports, otherwise everything in this file is private
// module.exports = makeFunctions;
// you can export functions or objects
// you only want one module.exports per file
//
module.exports = Tile;
