var $ = require('jquery');


function Tile (data, position) {
  this.data = data || null;
  this.position = position;
  this.right = null;
  this.above = null;
  this.left = null;
  this.below = null;
  this.compare = false;
}

Tile.prototype.start = function() {
  return this.data = 2;
};



module.exports = Tile;
