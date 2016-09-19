var $ = require('jquery');
// var _ = require('lodash');

// Since every instance of a DoublyList is instantiated without nodes, the default values of head and tail are set to null.
function Tile (data, position) {
  this.data = data || null;
  this.position = position;
  this.right = null;
  this.above = null;
  this.left = null;
  this.below = null;
}

Tile.prototype.start = function() {
  return this.data = 2;
};
//
// var tile1 = new Tile(null, 1);
// $('#c1').text(tile1.data);
// tile1.next = new Tile(null, 2);
// $('#c2').text(tile1.next.data);
// tile1.next.next = new Tile(null,3);
// $('#c3').text(tile1.next.next.data);
// tile1.next.next.next = new Tile(null,4);
// $('#c4').text(tile1.next.next.next.data);
//
// tile1.start();





// you can export functions or objects
// you only want one module.exports per file
//
module.exports = Tile;
