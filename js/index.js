jQuery(function () {
  var isEnglishPage = location.href.includes("en.");
  if (isEnglishPage) {
    var $rotateTargetBlock = jQuery("#js-block03-0 .p-block03__header-title");
    // console.log($rotateTargetBlock);
    $rotateTargetBlock.css("writing-mode", "horizontal-tb");
    $rotateTargetBlock.text("Tsukiji Honganji");
  }
});
