'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_TOP = 100;
var GAP_RIGHT = 30;
var FONT_GAP = 10;
var BAR_WIDTH = 40;
var barHeight = 150;
var COLUMN_SPACE = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeStyle = 'red';
  ctx.strokeRect(x - 1, y - 1, CLOUD_WIDTH + 2, CLOUD_HEIGHT + 2);
};

var toneGenerator = function () {
  var a = Math.ceil(Math.random() * 100);
  var graphColor = 'hsl' + '(' + '246, ' + a + '%, ' + '50%' + ')';
  return graphColor;
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_RIGHT + COLUMN_SPACE * i, GAP_TOP + barHeight + CLOUD_Y + FONT_GAP);
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + GAP_RIGHT + COLUMN_SPACE * i, barHeight - (barHeight * times[i]) / maxTime + GAP_TOP - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = toneGenerator();
    }
    ctx.fillRect(CLOUD_X + GAP_RIGHT + COLUMN_SPACE * i, barHeight - (barHeight * times[i]) / maxTime + GAP_TOP, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }
};

