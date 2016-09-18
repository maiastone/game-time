var $ = require('jquery');
var GameGrid = require('../lib/tile.js');
var Tile = require('../lib/tile.js');


// 
// function GameGrid() {
//   this.head = null;
// }
//
// GameGrid.prototype.isEmpty = function(){
//   return this.head === null;
// };
//
// GameGrid.prototype.size = function(){
//   var currentTile = this.head;
//   var count = 0;
//
//   while (currentTile !== null) {
//   count ++;
//   currentTile = currentTile.next;
// }
//   return count;
// };
// // create a new node
// // make it point to the currentTile node
// // update this.head to point to the new node
// GameGrid.prototype.add = function(val) {
//   var tile = new Tile(val);
//
//   if (this.length) {
//     this.tail.next = tile;
//     tile.previous = this.tile;
//     this.tail = tile;
//   } else {
//     this.head = tile;
//     this.tail = tile;
//   }
//   this._length++;
//   return tile;
// };
//
//
//
// GameGrid.prototype.contains = function(val) {
//   var currentTile = this.head;
//
//   while (currentTile !== null) {
//     if (currentTile.data === val) {
//       return true;
//     }
//     currentTile = currentTile.next;
//   }
//   return false;
// };
//
// //
// // GameGrid.prototype.remove = function(position) {
// //   var currentTile = this.head,
// //       length = this._length,
// //       count = 1,
// //       message = {failure: 'non-existent tile in this list'},
// //       beforeTileToDelete = null,
// //       tileToDelete = null,
// //       deletedTile = null;
// // // 1st case: invalid position
// //   if (length === 0 || position < 1 || position > length) {
// //     throw new Error(message.failure);
// //   }
// // // 2nd case: first tile is removed, then 2 nested cases
// //   if (position === 1) {
// //     this.head = currentTile.next;
// //   }
// //   // there is a second tile
// //       if(!this.head) {
// //         this.head.previous = null;
// //       // there is no second tile
// //       } else {
// //         this.tail = null;
// //   }
// // // the last tile is removed
//
//
// GameGrid.prototype.searchTilePosition = function(position) {
//   var currentTile = this.head,
//   length = this._length,
//   count = 1;
//   if (length === 0 || position < 1 || position > length) {
//     return;
//   }
//   while (count < position) {
//     currentTile = currentTile.next;
//     count++;
//   }
//   return currentTile;
// };
//
// GameGrid.prototype.print = function() {
//   var output = "[";
//   var currentTile = this.head;
//
//   while (currentTile!== null) {
//     output += currentTile.data;
//     if (currentTile.next !== null) {
//       output += ', ';
//     }
//     currentTile = currentTile.next;
//   }
//
//
// output += ']';
// console.log(output);
// };
//
// //emptyTiles = [];
// // check for null tiles
// // if tile.data === null
// // emptyTiles.push(tile);


module.exports = GameGrid;
