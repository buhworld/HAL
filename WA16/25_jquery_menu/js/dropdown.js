$(function () {
    //TODO: class=menu の a リンクでアンカーを含むもの
    // .menu a[href^="#"]
    const $menuLink = $(".menu a[href^='#']");

    // メニュー取得: class=menu
    const $navMenus = $(".menu");

    // ホバーでサブメニュー表示・非表示
    $navMenus.hover(
        function () {
            // TODO: 親メニューの子要素 ul を slideDown() アニメーション
            // TODO: アニメーションは一旦停止
            $(this).children('ul').stop(true, true).slideDown();

            
        },
        function () {
            // TODO: 親メニューの子要素 ul を slideUp() アニメーション
            // TODO: アニメーションは一旦停止
            $(this).children('ul').stop(true, true).slideUp();
        }
    );
    $navMenus.on('click', function () {
        // TODO: 親メニューの子要素 ul を slideUp() アニメーション
        // TODO: アニメーションは一旦停止
        $(this).children('ul').stop(true, true).slideUp();
    });

    // スムーススクロール
    $menuLink.on('click', function (e) {
        // 今後の操作を止める
        e.preventDefault();

        // アンカーに設定された値を取得
        const anchor = this.getAttribute('href');
        if (target) {
            // TODO: アンカーのY座標取得: offset().top
            const targetOffset = $(anchor).offset().top;
            // TODO: アンカーにアニメーションでスクロール: scrollTop: targetOffset
            $('html, body').stop().animate({
                scrollTop: targetOffset
            }, 500);
        }
    });
});