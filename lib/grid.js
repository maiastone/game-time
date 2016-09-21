var $ = require('jquery');
var Tile = require('../lib/tile.js');
var grid = new Grid();

function Grid(){
  this._length = 0;
  this.allTiles = [];
}


Grid.prototype.orient = function(){

  for (var i = 0; i < 16; i++) {
    this.allTiles.push(new Tile( null, i));
  }
  var array = this.allTiles;

  this.allTiles.forEach(function(t, i) {
    if ((t.position+1) % 4 !== 0) {
      t.right = array[i + 1];
    }
    if ((t.position) % 4 !== 0) {
      t.left = array[i - 1];
    }
    if ((t.position) % 4 !==0) {
      t.above = (array[i-4]) ? array[i-4] : null;
    }
    if ((t.position+1) % 4 !==0) {
      t.below = array[i+4];
    }
  });

  this.allTiles = this.allTiles;
};


Grid.prototype.initGrid = function(){
  this.orient();
  this.allTiles[0].data = 4;
  this.allTiles[1].data = 2;
  this.allTiles[2].data = null;
  this.allTiles[3].data = null;
  this.allTiles[4].data = 2;
  this.allTiles[5].data = null;
  this.allTiles[6].data = null;
  this.allTiles[7].data = 2;

  for (var i = 1; i < 17; i++) {
  $(`#c${i}`)[0].innerHTML = this.allTiles[i - 1].data;

  }
};

Grid.prototype.loadGrid = function (){
  this.orient();

// render
  for (var i = 1; i < 17; i++) {
    $(`#c${i}`)[0].innerHTML = this.allTiles[i - 1].data;
// TODO also need to iterate through, grab the values, and apply classes

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


Grid.prototype.rightRows = function(){
  var setRightRows =  [
  this.row1 = this.Rrow1,
  this.row2 = this.Rrow2,
  this.row3 = this.Rrow3,
  this.row4 = this.Rrow4,
  ];
  setRightRows.forEach(function(row){
    return grid.moveRight(row, 'left');
  });
};

Grid.prototype.leftRows = function(){
  var setLeftRows =  [
  this.row1 = this.Lrow1,
  this.row2 = this.Lrow2,
  this.row3 = this.Lrow3,
  this.row4 = this.Lrow4,
  ];
  setLeftRows.forEach(function(row){
   return grid.moveLeft(row);
  });
};


// TODO Generate Tile at Random position


Grid.prototype.moveRight = function(row, direction) {
  // tileWasSmushed
  row.compare = null;
  row[direction].compare = null;
  var pullTile = row;
  var compareTile = row[direction];
  // debugger;

  function multiply() {
    (pullTile.data *= 2);
    pullTile.compare = true; // the pull tile was multiplied (and by extension we know it shouldn't continue moving until the next move() is called/arrow is clicked)
  }

  function smush() {
    if (compareTile[direction]) {
      compareTile.data = compareTile[direction].data;
      // compareTile.compare = false///
      compareTile[direction].data = null;
    }
  }

  function nextTile() {
    pullTile = pullTile[direction];
    compareTile = compareTile[direction];
  }


  // for (let i = 0;  i < 4; i++) {

    var i = 1;
  while (i > 0) {
    pullTile = row;
    compareTile = row[direction];
    i = 0;
    // debugger
    for(var t = 0; t < 4; t++) {
      var equalTiles = (pullTile.data === compareTile.data && pullTile.data !== null && !pullTile.compare );
      var nullTiles = (compareTile.data === null);
      // console.log(pullTile.position);

// case pullTile null
// smushed, then moved pullTile before multiply
    if (pullTile.data === null) {
          pullTile.data = compareTile.data;
          compareTile.data = null;
            if (equalTiles) {
              multiply();
            }
        }
// case equal
      if (equalTiles) {
        multiply();
        smush();
      }

// case null

      if(nullTiles){
          if(compareTile[direction]) {
              if(compareTile[direction].data !== null) {
            i++;
            smush();
            // nextTile();
              }
            }
          }
// TODO 2 nulls not skipping enough tiles

      if(pullTile.data !== null && nullTiles) {
      {
        nextTile();
        // compareTile.data = pullTile[direction][direction][direction].data;
          }
        }
      }
    }
  };



module.exports = Grid;
