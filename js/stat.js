'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var TEXT_HEIGHT = 30;
var BAR_WIDTH = 40;
var MAX_HEIGHT = 150;
var PADDING_X = CLOUD_X + GAP;

var renderCloud = function(ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function(arr) {
  var maxEl = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxEl) {
      maxEl = arr[i];
    }
  }

  return maxEl;
};

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = '#fff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = ('16px PT Mono');
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText('Список результатов:', 110, 70);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var rand = (Math.random() * 0.9 + 0.1).toFixed(1);
      ctx.fillStyle = 'rgba(65, 105, 255, ' + rand + ')';
    }
    var barHeight = (MAX_HEIGHT * Math.round(times[i]) ) / maxTime;
    ctx.fillRect(PADDING_X + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - TEXT_HEIGHT - barHeight, BAR_WIDTH, barHeight);
    ctx.fillText(names[i], PADDING_X + (BAR_WIDTH + GAP) * i, 260);
  }
}
