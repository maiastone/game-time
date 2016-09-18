var $ = require('jquery');
var GameGrid = require('../lib/tile.js');
var Tile = require('../lib/tile.js');


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
  pullTile.data = pullTile.next.data;
  pullTile.next.data = null;
}

function multiply() {
  pullTile.data = pullTile.data * 2;
}


module.exports = GameGrid;
