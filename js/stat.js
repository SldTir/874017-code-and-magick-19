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
var TEXT_COLOR = '#000';
var FONT = '16px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeStyle = 'red';
  ctx.strokeRect(x - 1, y - 1, CLOUD_WIDTH + 2, CLOUD_HEIGHT + 2);
};

var saturationGenerator = function () {
  var saturation = Math.ceil(Math.random() * 100);
  var graphColor = 'hsl' + '(' + '246, ' + saturation + '%, ' + '50%' + ')';
  return graphColor;
};

var graphColorGenerator = function (ctx, names) {
  if (names === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = saturationGenerator();
  }
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

var tableHeader = function (ctx, titleTextColor, titleFont) {
  ctx.fillStyle = titleTextColor;
  ctx.font = titleFont;
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, GAP * 4);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, GAP * 6);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  tableHeader(ctx, TEXT_COLOR, FONT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], CLOUD_X + GAP_RIGHT + COLUMN_SPACE * i, GAP_TOP + barHeight + CLOUD_Y + FONT_GAP);
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + GAP_RIGHT + COLUMN_SPACE * i, barHeight - (barHeight * times[i]) / maxTime + GAP_TOP - GAP);
    graphColorGenerator(ctx, players[i]);
    ctx.fillRect(CLOUD_X + GAP_RIGHT + COLUMN_SPACE * i, barHeight - (barHeight * times[i]) / maxTime + GAP_TOP, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }
};

