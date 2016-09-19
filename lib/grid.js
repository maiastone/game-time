var $ = require('jquery');
var Tile = require('../lib/tile.js');


function linkedTiles(){
  this._length = 0;
  this.head = null;
  this.tail = null;
}

var allTiles = [];

for (var i = 0; i < 16; i++) {
  allTiles.push(new Tile('2', i));
}

allTiles.forEach(function(e, i) {
    e.next = allTiles[i + 1];
  if (i > 0) {
    e.previous = allTiles[i - 1];
  }
  if (i > 3) {
    e.above = allTiles[i-4];
  }
  if (i < 12) {
    e.below = allTiles[i+4];
  }
});

var head = allTiles[0];

console.log(head);

// create pullTiles
// when the up arrow is pressed -- key 38
// row 1 becomes all the pullTiles

// when the down arrow is pressed -- key 40
// row 4 becomes all the pullTiles

// when the left arrow is pressed -- key 37
// column 1 becomes all the pullTiles

// when the right arrow is pressed -- key 39
// column 4 becomes all the pullTiles


// when the up arrow is pressed
// row 1 becomes all the pullTiles
// should keep going until edge

// compare pullTile to pullTile.below

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

var pullTile;

function smush() {
  pullTile.data =   pullTile.next.data;
  pullTile.next.data = null;
}

function multiply() {
  pullTile.data = pullTile.data * 2;
}



module.exports = allTiles;
