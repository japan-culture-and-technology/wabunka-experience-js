jQuery(function () {
  // var isEnglishPage = location.href.includes("en.");
  // if (isEnglishPage) {
  //   // グローバルナビゲーションの出し分け対応
  //   jQuery('nav a:contains("English")').hide();
  //   jQuery('nav a:contains("開催場所")').hide();
  //   jQuery('nav a:contains("体験プログラム")').hide();
  //   jQuery('nav a:contains("メディア")').hide();
  //   jQuery('nav a:contains("お問い合わせ")').hide();
  // } else {
  //   jQuery('nav a:contains("日本語")').hide();
  //   jQuery('nav a:contains("Place")').hide();
  //   jQuery('nav a:contains("Program")').hide();
  //   jQuery('nav a:contains("Media")').hide();
  //   jQuery('nav a:contains("Contact")').hide();
  // }

  // トップページ 開催実績飛ばないようにする
  jQuery(".p-index-news__list a").attr("href", "javascript:void(0)");

  // フッタースライダー削除
  // jQuery(".p-footer-slider").hide();

  // 記事ページのパンくずリスト削除
  // jQuery(".c-breadcrumb").hide();
});
