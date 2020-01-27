'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 10;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeStyle = 'red';
  ctx.strokeRect(x - 1, y - 1, CLOUD_WIDTH + 2, CLOUD_HEIGHT + 2);
};

var toneGenerator = function () {
  var a = Math.floor(Math.random() * 10);
  var graphColor = 'hsla' + '(' + '246, ' + '199%, ' + '50%, ' + '0.' + a + ')';
  return graphColor;
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  ctx.fillText('Вы', CLOUD_X + GAP * 3, 100 + BAR_HEIGHT + CLOUD_Y + FONT_GAP);
  ctx.fillText('Иван', 180, 270);
  ctx.fillText('Юлия', 230, 270);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + GAP * 3, 100, 40, 150);
  ctx.fillStyle = toneGenerator();
  ctx.fillRect(180, 100, 40, 150);
  ctx.fillStyle = toneGenerator();
  ctx.fillRect(230, 100, 40, 150);
};

