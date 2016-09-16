var $ = require('jquery');
var GameGrid = require('../lib/tile.js');

// function Grid() {
//   this.column1 = [new Tile('#c1'),new Tile('#c5'),new Tile('#c9'),new Tile('#c13')];
//   this.column2 = [new Tile('#c2'),new Tile('#c6'),new Tile('#c10'),new Tile('#c14')];
//   this.column3 = [new Tile('#c3'),new Tile('#c7'),new Tile('#c11'),new Tile('#c15')];
//   this.column4 = [new Tile('#c4'),new Tile('#c8'),new Tile('#c12'),new Tile('#c16')];
//   this.row1 = [new Tile('#c1', new Tile('#c2')),new Tile('#c2'),new Tile('#c3'),new Tile('#c4')];
//   this.row2 = [new Tile('#c5'),new Tile('#c6'),new Tile('#c7'),new Tile('#c8')];
//   this.row3 = [new Tile('#c9'),new Tile('#c10'),new Tile('#c11'),new Tile('#c12')];
//   this.row3 = [new Tile('#c13'),new Tile('#c14'),new Tile('#c15'),new Tile('#c16')];
//   this.allRows = [$('.row1'), $('.row2'),$('.row3'),$('.row4')];
//   // this.allRows = [this.row1, this.row2, this.row3, this]
//   this.allColumns = [$('.column1'), $('.column2'),$('.column3'),$('.column4')];
// }
//
// Grid.prototype.compare = function(tile1, tile2) {
//   return tile1.data === tile2.data;
// };
//
//
// // on left arrow each row needs to iterate through it's own row array and for each index position, check the data(value?) and do the thing
// Grid.prototype.rightArrow = function() {
//
//   //array.forEach(function(c) {
//     // for(var t = 0; t < c.length; t++) {
//       //go do something to each item in that row
//     // }
// // });
//   // is this how you call all rows?
//   var array = this.allRows();
//   //array[0] = row1  array[1] = row2
//
//   for(var i = 0; i < array.length; i++) {
//
//     if (this.compare(array[i], array[i + 1])) {
//         // if array[i]===array[i+1]
//         array[i+1].multiple();
//         array[i].data = null;
//     }
//     if(array[i+1] === null){
//       array[i +1].change(array[i].data);
//       array[i].change(null);
//     }
//   }
// };
//
// // if 2 cells are ===
// Grid.prototype.leftArrow = function() {
//   var array = this.allRows();
//
//   for (var i=array.length; i > 0; i--) {
//     if (this.compare(array[i], array[i -1])) {
//       array[i-1].multiple();
//       array[i].data = null;
//   }
//     if(array[i-1] === null){
//       array[i-1].change(array[i].data);
//       array[i].change(null);
//     }
//   }
// };


// function change () {
//   $().append();
// }



function GameGrid() {
  this.head = null;
}

GameGrid.prototype.isEmpty = function(){
  return this.head === null;
};

GameGrid.prototype.size = function(){
  var currentTile = this.head;
  var count = 0;

  while (currentTile !== null) {
  count ++;
  currentTile = currentTile.next;
}
  return count;
};
// create a new node
// make it point to the currentTile node
// update this.head to point to the new node
GameGrid.prototype.prepend = function(val) {
  var newTile = {
    data: val,
    next: this.head
  };
  this.head = newTile;
};

var grid = new GameGrid();
grid.prepend(4);
grid.prepend(2);
console.log(grid);

// create new node using val
// traverse to end of list
// make the last node's next value point to the new node
GameGrid.prototype.append = function(val){
  var newTile = {
    data: val,
    next: null
  };
  if (this.isEmpty()) {
    this.head = newTile;
    return;
  }
  var currentTile = this.head;
  while (currentTile.next === null) {
    currentTile = currentTile.next;
  }
  currentTile.next = newTile;
};

GameGrid.prototype.contains = function(val) {
  var currentTile = this.head;

  while (currentTile !== null) {
    if (currentTile.data === val) {
      return true;
    }
    currentTile = currentTile.next;
  }
  return false;
};

//
GameGrid.prototype.remove = function(val) {
  if (!this.contains(val)) {
    return;
  }
  if (this.head.data === val) {
    this.head = this.head.next;
    return;
  }
  var prev = null;
  var currentTile = this.head;

  while (currentTile.data !== val) {
    prev = currentTile;
    currentTile = currentTile.next;
  }
  prev.next = currentTile.next;
};

GameGrid.prototype.searchTilePosition = function(position) {
  var currentTile = this.head,
  length = this._length,
  count = 1;
  if (length === 0 || position < 1 || position > length) {
    return;
  }
  while (count < position) {
    currentTile = currentTile.next;
    count++;
  }
  return currentTile;
};

GameGrid.prototype.print = function() {
  var output = "[";
  var currentTile = this.head;

  while (currentTile!== null) {
    output += currentTile.data;
    if (currentTile.next !== null) {
      output += ', ';
    }
    currentTile = currentTile.next;
  }


output += ']';
console.log(output);
};

var grid = new GameGrid();
// you can append anything
grid.append(4);
grid.append(2);
grid.append(8);
grid.prepend(10);
console.log(grid.contains(8));
console.log(grid.size());
console.log(grid.isEmpty);
grid.print();



module.exports = GameGrid;
