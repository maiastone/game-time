var $ = require('jquery');
var Tile = require('../lib/tile.js');
var grid = new Grid();




function Grid() {
  this._length = 0;
  this.allTiles = [];
  this.score = 0;
}

Grid.prototype.makeHighScore = function() {
 $('.userScore').text(this.score);
 localStorage.setItem('highScore', JSON.stringify(this.score));
};

Grid.prototype.retrieveHighScore = function() {
  return parseInt(JSON.parse(localStorage.getItem('highScore'))) || 0;
};

Grid.prototype.makeCurrentScore = function() {
 $('.currentScore').text(this.score);
 return this.score;
};

Grid.prototype.pushArray = function() {
  for (var i = 0; i < 16; i++) {
    this.allTiles.push(new Tile(null, i));
  }
};

Grid.prototype.setEdges = function() {
  var array = this.allTiles;
  this.allTiles.forEach(function(t, i) {
    if ([3,7,11,15].indexOf(t.position) === -1) {
      t.right = array[i + 1];
    }
    if ([0,4,8,12].indexOf(t.position) === -1) {
      t.left = array[i - 1];
    }
    if ([0, 1, 2, 3].indexOf(t.position) === -1) {
      t.above = (array[i-4]) ||  null;
    }
    if ([12, 13, 14, 15].indexOf(t.position) === -1) {
      t.below = array[i+4] || null;
    }
    t.compare = false;
  });
  this.allTiles = this.allTiles;
};

Grid.prototype.initGrid = function(){
  this.setHeads();
  this.allTiles[0].data = 2;
  this.allTiles[1].data = 4;
  this.allTiles[2].data = null;
  this.allTiles[3].data = null;
  this.allTiles[4].data = null;
  this.allTiles[5].data = 2;
  this.allTiles[6].data = null;
  this.allTiles[7].data = 2;
  this.allTiles[8].data = null;
  this.allTiles[9].data = 2;
  this.allTiles[10].data = null;
  this.allTiles[11].data = 4;
  this.allTiles[12].data = 2;
  this.allTiles[13].data = 2;
  this.allTiles[14].data = 4;
  this.allTiles[15].data = null;

  for (var i = 1; i < 17; i++) {
  $(`#c${i}`)[0].innerHTML = this.allTiles[i - 1].data;

  }
};


Grid.prototype.loadGrid = function() {
  this.setEdges();
  for (var i = 1; i < 17; i++) {
    $(`#c${i}`)[0].innerHTML = this.allTiles[i - 1].data;
  }
};

Grid.prototype.setHeads = function() {
  this.Lrow1 = this.allTiles[0];
  this.Lrow2 = this.allTiles[4];
  this.Lrow3 = this.allTiles[8];
  this.Lrow4 = this.allTiles[12];

  this.Rrow1 = this.allTiles[3];
  this.Rrow2 = this.allTiles[7];
  this.Rrow3 = this.allTiles[11];
  this.Rrow4 = this.allTiles[15];

  this.Ucolumn1 = this.allTiles[0];
  this.Ucolumn2 = this.allTiles[1];
  this.Ucolumn3 = this.allTiles[2];
  this.Ucolumn4 = this.allTiles[3];

  this.Dcolumn1 = this.allTiles[12];
  this.Dcolumn2 = this.allTiles[13];
  this.Dcolumn3 = this.allTiles[14];
  this.Dcolumn4 = this.allTiles[15];
};

Grid.prototype.rightRows = function(){
  var setRightRows =  [this.Rrow1, this.Rrow2, this.Rrow3, this.Rrow4];
  setRightRows.forEach(function(row){
    return grid.moveTiles(row, 'left');
  });
};

Grid.prototype.leftRows = function(){
  var setLeftRows =  [this.Lrow1, this.Lrow2, this.Lrow3, this.Lrow4];
  setLeftRows.forEach(function(row){
   return grid.moveTiles(row, 'right');
  });
};

Grid.prototype.upRows = function(){
  var setUpColumns =  [this.Ucolumn1, this.Ucolumn2, this.Ucolumn3, this.Ucolumn4];
  setUpColumns.forEach(function(column){
   return grid.moveTiles(column, 'below');
  });
};

Grid.prototype.downRows = function(){
  var setDownColumns =  [this.Dcolumn1, this.Dcolumn2, this.Dcolumn3, this.Dcolumn4];
  setDownColumns.forEach(function(column){
   return grid.moveTiles(column, 'above');
  });
};

// TODO Generate Tile at Random position


Grid.prototype.moveTiles = function(row, direction) {
  // tileWasSmushed

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
    if (compareTile[direction]) {
      pullTile = pullTile[direction];
      compareTile = compareTile[direction];
    }
  }

    var i = 1;
    while (i > 0) {
    pullTile = row;
    compareTile = row[direction];
    pullTile.compare = false;
    compareTile.compare = false;
    i = 0;
    for(var t = 0; t < 4; t++) {
      var equalTiles = (pullTile.data === compareTile.data && pullTile.data !== null && !pullTile.compare );
      var nullTiles = (compareTile.data === null);

// case equal
    if (equalTiles) {
      multiply();
      smush();
      i++;
    }

// case pullTile null
    if (pullTile.data === null) {
      pullTile.data = compareTile.data;
      compareTile.data = null;

        if (equalTiles) {
          multiply();
          smush();
        }
    }

// case compareTile null
    if(nullTiles){
        if(compareTile[direction]) {
            if(compareTile[direction].data !== null) {
          smush();
          i++;
          }
        }
      }
      nextTile();
    }
  }
};


module.exports = Grid;
