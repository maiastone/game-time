var $ = require('jquery');
var Tile = require('../lib/tile.js');


function Grid(){
  this._length = 0;
  this.allTiles = [];
}

Grid.prototype.orient = function(){

  for (var i = 0; i < 16; i++) {
    this.allTiles.push(new Tile( null, i));
  }
  var array = this.allTiles;

  this.allTiles.forEach(function(e, i) {
    if ((e.position+1) % 4 !== 0) {
      e.right = array[i + 1];
    }
    if (i > 0) {
      e.left = array[i - 1];
    }
    if (i > 3) {
      e.above = array[i-4];
    }
    if (i < 12) {
      e.below = array[i+4];
    }
  });

  this.allTiles = this.allTiles;
};


Grid.prototype.initGrid = function(){
  this.orient();
  this.allTiles[0].data = 2;
  this.allTiles[1].data = 4;
  this.allTiles[2].data = null;
  this.allTiles[3].data = 4;
  this.allTiles[4].data = 2;
  this.allTiles[5].data = null;
  this.allTiles[6].data = 2;
  this.allTiles[7].data = 2;

  for (var i = 1; i < 17; i++) {
  $(`#c${i}`)[0].innerHTML = this.allTiles[i - 1].data;

  }
};

Grid.prototype.loadGrid = function (){
  this.orient();

  for (var i = 1; i < 17; i++) {
    $(`#c${i}`)[0].innerHTML = this.allTiles[i - 1].data;

  }
};

Grid.prototype.setHeads = function() {
  this.Lrow1 = this.allTiles[0];
  this.Rrow1 = this.allTiles[3];
  this.Lrow2 = this.allTiles[4];
  this.Rrow2 = this.allTiles[7];
  this.Lrow3 = this.allTiles[8];
  this.Rrow3 = this.allTiles[11];
  this.Lrow4 = this.allTiles[12];
  this.Rrow4 = this.allTiles[15];

  this.Ucolumn1 = this.allTiles[0];
  this.Dcolumn1 = this.allTiles[12];
  this.Ucolumn2 = this.allTiles[1];
  this.Dcolumn2 = this.allTiles[13];
  this.Ucolumn3 = this.allTiles[2];
  this.Dcolumn3 = this.allTiles[14];
  this.Ucolumn4 = this.allTiles[3];
  this.Dcolumn4 = this.allTiles[15];
};

Grid.prototype.setRightRows = function () {
  this.row1 = this.Rrow1;
  this.row2 = this.Rrow2;
  this.row3 = this.Rrow3;
  this.row4 = this.Rrow4;
};

Grid.prototype.moveRight = function() {

// case equal
    if (this.row1.data === this.row1.left.data) {
      // function multiply
      this.row1.data = this.row1.left.data * 2;
      this.row1.left.data = null;
    }
    // if (this.row2.data === this.row2.left.data) {
    //   // function multiply
    //   this.row2.data = this.row2.left.data * 2;
    //   this.row2.left.data = null;
    // }

    if(this.row1.left.data === null){
      // function smush
      this.row1.left.data = this.row1.left.left.data;
      this.row1.left.left.data = null;
    }
        if (this.row1.data === this.row1.left.data) {
          // function multiply
          this.row1.data = this.row1.left.data * 2;
          this.row1.left.data = null;
        }
        if(this.row1.left.data === null){
          // function smush
          this.row1.left.data = this.row1.left.left.data;
          this.row1.left.left.data = null;
          // function smush
          if (this.row1.left.left.data === null){
            this.row1.left.left.data = this.row1.left.left.left.data;
            this.row1.left.left.left.data = null;
          }
        }
        else {
          // do nothing
          this.row1.data = this.row1.data;
          this.row1.left.data = this.row1.left.data;
        }
      {
      // do nothing
       this.row1.data = this.row1.data;
       this.row1.left.data = this.row1.left.data;
     }
   };


// case equal pullTile === pullTile.below
// function multiply();
// case null pullTile.below === null
// function smush();
  	  // case equal
  		// function multiply();
  		// case null
  		// function smush();
  		// case different
  		// done
// case different pullTile.below.data != pullTile.data
// done


// Grid.prototype.multiply = function() {
//   this.data = this.data * 2;
// };





module.exports = Grid;
