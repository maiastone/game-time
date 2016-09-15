const assert = require('chai').assert;
const Grid = require('../lib/grid');

describe('Grid', function () {

  it('should be a function', function(){
    assert.isFunction(Grid);
  });
  it('should instantiate the grid object', function(){
    var board = new Grid();
    assert.isObject(board);
  });

  it('should take the argument size and set it as the size property of the object', function () {
    var board = new Grid(16);
    assert.equal(board.size, 16);
  });

  it('should have a "tiles" property, which starts out as an empty array', function(){
    var board = new Grid ();
    assert.isArray(board.tiles);
    assert.deepEqual(board.tiles, []);
  });

});
