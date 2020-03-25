jQuery(function () {
  var isEnglishPage = location.href.includes("en.");
  if (isEnglishPage) {
    // var $rotateTargetBlock = jQuery("#js-block03-0 .p-block03__header-title");
    // $rotateTargetBlock.css("writing-mode", "horizontal-tb");
    // $rotateTargetBlock.text("Tsukiji Honganji");

    // グローバルナビゲーションの出し分け対応
    jQuery('nav a:contains("English")').hide();
    jQuery('nav a:contains("開催場所例")').hide();
    jQuery('nav a:contains("体験プログラム")').hide();
    jQuery('nav a:contains("メディア")').hide();
  } else {
    jQuery('nav a:contains("日本語")').hide();
    jQuery('nav a:contains("Place")').hide();
    jQuery('nav a:contains("Program")').hide();
    jQuery('nav a:contains("Media")').hide();
  }

  // 「書道」「茶道」「華道」ボタンの削除
  var $sliderNav = jQuery('#js-index-slider__nav');
  $sliderNav.hide();

  // トップページ 開催実績飛ばないようにする
  jQuery('.p-index-news__list a').attr('href', 'javascript:void(0)');
  
  // フッタースライダー削除
  jQuery('.p-footer-slider').hide();
});
