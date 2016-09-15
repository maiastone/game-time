const assert = require('chai').assert;
const Grid = require('../lib/tile');
// describe function makeTile
// context game start
// it should be a function
//
// it should have a instantiate the object tile
//
// it should take the first argument and set the x property of the instantiated object
//
// it should take the second argument and set the y property to the instantiated object
//
// -- how does prototype fit in?
// we want each tile to have the same height and width
describe('Grid', function() {

  it('should be a function', function(){
    assert.isFunction(Grid);
  });

  it.skip('it should have a instantiate the object tile', function(){
    var tile = new Tile();
    assert.isObject(tile);
  });
});
