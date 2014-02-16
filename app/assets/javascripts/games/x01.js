'use strict';

var Games_x01 = function () {
  console.log('x01: start');

  var dartsUi = window.dartsUi;

  var scoreIndex = 1;
  var scoreElements = $('.scores td');
  var totalScore = 301;
  var totalScoreElements = $('.scores-total-score td');

  dartsUi.onHit(function (cellId, point, ratio) {
    // console.log(cellId + ' : ' + point + ' x ' + ratio + ' = ' + point * ratio);

    $(scoreElements[scoreIndex]).text(point * ratio);
    scoreIndex++;

    totalScore -= point * ratio;
    $(totalScoreElements).text(totalScore);

    if (totalScore <= 0) {
      console.log('Clear!');
    }
  });
};
