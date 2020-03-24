jQuery(function () {

  var isEnglishPage = location.href.includes("en.");
  if (isEnglishPage) {
    var $rotateTargetBlock = jQuery("#js-block03-0 .p-block03__header-title");
    // console.log($rotateTargetBlock);
    alert('@@');
    $rotateTargetBlock.css("writing-mode", "horizontal-tb");
    $rotateTargetBlock.text("Tsukiji Honganji");

    // 「書道」「茶道」「華道」ボタンの削除
    var $sliderNav = jQuery('#js-index-slider__nav');
    $sliderNav.hide();
  }
});
