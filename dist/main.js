!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){const r=t(1),o=t(2);$(document).ready(function(){var e=$("#message-banner"),n=$("#board-container div"),t=$("#reset-button");$("#x-score"),$("#o-score");function u(){boardStatus=r.fetchBoard(),boardStatus.then(function(e){r.renderBoard(n,e)})}function a(){r.fetchMessage().then(function(n){r.updateMessage(e,n.result)})}u(),o.gameOverYet()||n.on("click",function(){r.tileClick($(this)[0].id).then(function(e){"Board updated"==e.result&&u()}),a()}),t.on("click",function(){r.resetBoard().then(function(e){r.renderBoard(n,e)}),a()})})},function(e,n){e.exports={fetchBoard:function(){return fetch("/api/game/gameboard/status").then(e=>e.json()).then(function(e){return e})},renderBoard:function(e,n){for(var t=0;t<9;t++)"X"==n[t]||"O"==n[t]?$(e[t]).html("<p>"+n[t]+"</p>"):$(e[t]).html("<p></p>")},tileClick:function(e){return fetch("/api/game/gameboard/updateBoard/"+e).then(e=>e.json()).then(function(e){return e})},resetBoard:function(){return fetch("/api/game/gameboard/resetBoard").then(e=>e.json()).then(function(e){return e})},fetchMessage:function(){return fetch("/api/game/gameboard/updateMessage").then(e=>e.json()).then(function(e){return e})},updateMessage:function(e,n){console.log(n),$(e).html(n)}}},function(e,n,t){const r=t(3);var o="X",u=!1,a="",i=0,c={0:"-",1:"-",2:"-",3:"-",4:"-",5:"-",6:"-",7:"-",8:"-",9:"-"};e.exports={boardStatus:function(){return c},updateBoard:function(e){return u?{result:"Game is over"}:"-"!=c[e]?{result:"Tile taken"}:(c[e]=o,i++,function(){var e=r.isWinner(c,o,i);""!=e.winner?(u=!0,a=e.winner):"Draw"==e.winner&&(u=!0)}(),"X"===o?o="O":"O"===o&&(o="X"),{result:"Board updated"})},resetBoard:function(){o="X",u=!1,i=0;for(var e=0;e<9;e++)c[e]="-";return c},updateMessage:function(){return u?"X"==a?{result:"Winner is X!"}:"O"==a?{result:"Winner is O!"}:{result:"Draw!"}:{result:o+", it's your turn!"}},gameOverYet:function(){return u}}},function(e,n){e.exports={isWinner:function(e,n,t){return e[0]===n&&e[1]===n&&e[2]===n||e[3]===n&&e[4]===n&&e[5]===n||e[6]===n&&e[7]===n&&e[8]===n||e[0]===n&&e[3]===n&&e[6]===n||e[1]===n&&e[4]===n&&e[7]===n||e[2]===n&&e[5]===n&&e[8]===n||e[0]===n&&e[4]===n&&e[8]===n||e[2]===n&&e[4]===n&&e[6]===n?{winner:n}:9==t?{winner:"Draw"}:{winner:""}}}}]);