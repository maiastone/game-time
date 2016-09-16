const assert = require('chai').assert;
const Grid = require('../lib/grid');


describe('Grid', function () {

  it('should be a function', function(){
    assert.isFunction(Grid);
  });

  it('should instantiate an object', function(){
    var grid = new Grid();
    assert.isObject(grid);
  });

  it.skip('should be able to create a new tile', function() {
    //some function that calls a new tile
    //maybe passes in some data and position
  });

  it.skip('should have a position', function() {
    //verify that tile.position is what you think it should be
  });

  it.skip('should have the data we assigned to it', function() {
    //verify that when we create a new tile with data, tile.data is what we think it should be
    // var tile = new Tile(2, '#c14')
    // assert.equal(tile.data, 2)
  });

  //for the grid
    it.skip('can create a row', function() {

    });
    

  it.skip('should move up when TileMoveUp is called', function() {
    //var tile = new tile (2, #c16)
    //Grid.tilesUp()
    //assert.equal(tile.postion, #c4)
  });

  it.skip('should move the tiles left');

  it.skip('should move the tiles right');


  it.skip('should combine with another tile if that tile has the same data');
    //var tile1 = new tile(data,position)
    //var tile2 = new Tile(data,postiion)
    //Grid.moveRight()
    //in the rightmost position there is 1 tile whose data is double the original
    //assert.equal (#c16, tile)
    //asser.equal (tile4.data, tile1.data + tile2.data)

  it.skip('should NOT combine with another tile if the data does not match');
});
//
// describe('board', function(){
//     it('should have a method called "leftArrow"',function(){
//         var board = new Grid ()
//       })
