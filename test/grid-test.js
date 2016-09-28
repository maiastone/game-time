const assert = require('chai').assert;
const smush = require('../lib/grid');
// const Tile = require('../lib/tile');
const Tile = require('../lib/tile');
const Grid = require('../lib/grid');


describe('allTiles', function() {
  it('should be set to an empty array', function(){
    var allTiles = [];
    assert.isArray(allTiles);
  });
});

describe ('Grid', function() {
  it('should have a method called "smush"', function(){
    assert.isFunction(smush);
  });

  it('"smush" should change the data of the tile to the data next to it', function(){
    var grid = new Grid();
    var tile1 = new Tile(null);
    var tile2 = new Tile(null);
    var tile3 = new Tile(2);
    tile1.left = tile2;
    tile2.left = tile3;
    grid.smush(tile1 ,'left');
    assert.equal(tile1.data, null);
    assert.equal(tile2.data, 2);
  });

  it('"multiply" should take tile data and multiply by 2' ,function() {
    var tile1 = new Tile(2);
    var tile2 = new Tile(2);
    multiply();
    assert.equal(tile1.data, 4);
    assert.equal(tile2.data, 2);
  });

});


describe('moveTiles', function() {
  it('should be a function', function(){
    assert.isFunction(Grid);
  });
  it('should take the first parameter and set it as "row"', function(){
    var grid = new Grid(row, direction);
    assert.equal(grid.row)
  });
});
