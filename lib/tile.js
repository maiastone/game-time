var $ = require('jquery');
// var _ = require('lodash');


function Tile (position) {
  this.data = null;
  this.position = position;
}

Tile.prototype.start = function() {
  return this.data = 2;
};

// prototype change()
// finds position on DOM and changes value in it.


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
