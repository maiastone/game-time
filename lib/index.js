var $ = require('jquery');
var GameGrid = require('../lib/tile.js');
var Tile = require('../lib/tile.js');


var tile1 = new Tile(2, 1);
$('#c1').text(tile1.data);
tile1.next = new Tile(2, 2);
$('#c2').text(tile1.next.data);
tile1.next.next = new Tile(2,3);
$('#c3').text(tile1.next.next.data);
tile1.next.next.next = new Tile(2,4);
$('#c4').text(tile1.next.next.next.data);



tile1.moveRight(tile1);
