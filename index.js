jQuery(function () {
  var isEnglishPage = location.href.includes("en.");
  if (isEnglishPage) {
    var $rotateTargetBlock = jQuery("#js-block03-0 .p-block03__header-title");
    $rotateTargetBlock.css("writing-mode", "horizontal-tb");
    $rotateTargetBlock.text("Tsukiji Honganji");
    jQuery('a[href="https://en.wabunka-experience.com/"]').hide();
  } else {
    jQuery('a[href="https://wabunka-experience.com/"]').hide();
  }

  // 「書道」「茶道」「華道」ボタンの削除
  var $sliderNav = jQuery('#js-index-slider__nav');
  $sliderNav.hide();

  // トップページ 開催実績飛ばないようにする
  jQuery('.p-index-news__list a').attr('href', 'javascript:void(0)');
  
  // フッタースライダー削除
  jQuery('.p-footer-slider').hide();
});
