$(function () {
  if ($('#darts-ui')[0]) {
    var dartsUi = new DartsUi('#darts-ui');
    dartsUi.setDebugMode(true);

    window.dartsUi = dartsUi;
  }
});
