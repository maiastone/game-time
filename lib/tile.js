var $ = require('jquery');
// var _ = require('lodash');

// Since every instance of a DoublyList is instantiated without nodes, the default values of head and tail are set to null.
function Tile (data, position) {
  this.data = data || null;
  this.previous = position || null;
  this.next = position || null;
}

Tile.prototype.start = function() {
  return this.data = 2;
};

// prototype change()
// finds position on DOM and changes value in it.
//prototype move right() {
//my current position is #c1, does my position + 1 have data? || is my position+1.data null? if so my position is now my position + 1
//
//}

  // this.number = number;

  // this.moveDown =function moveDown (){
  // };
  // this.moveLeft =function moveLeft (){
  // };
  // this.moveRight =function moveRight (){
  // };



// what that file exports, otherwise everything in this file is private
// module.exports = makeFunctions;
// you can export functions or objects
// you only want one module.exports per file
//
module.exports = Tile;
