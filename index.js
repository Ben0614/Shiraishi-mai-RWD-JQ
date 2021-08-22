// 漢堡選單的開關鈕
let menuOpened = false;

$(function () {
    // 頁面載入中
    if ($(window).width() > 992) {
        // 灰白背景
        $("#preloader").delay(2000).fadeOut("slow");
        // 文字，delay:2s，打字機效果，13個字*2rem，文字置中
        $("#loading_txt").delay(2000).css({
            'width': '26rem',
            'animation': 'loading 1.5s steps(13,end)',
            'text-align': 'center'
        }).fadeOut("slow");
    } else {
        $("#preloader").delay(2000).fadeOut("slow");
        // 手機版調小文字大小
        $("#loading_txt").delay(2000).css({
            'width': '26rem',
            'font-size': '1.5rem',
            'animation': 'loading 1.5s steps(13,end)',
            'text-align': 'center'
        }).fadeOut("slow");
    }

    // 小輪播
    $('.small-slick').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 800,
    });

    // 大輪播
    $('.big-slick').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 800,
    });

    // 漢堡選單
    $('.hum').on('click', function () {
        // 點擊後開關狀態切換
        menuOpened = !menuOpened;
        if (menuOpened == true) {
            // 讓hum-list淡入，並改成flex
            $('.hum-list').stop(0).fadeIn(200);
            $('.hum-list').css('display', 'flex');

            // 選單的三條線修改
            // 中線隱藏，上下的線往中間靠並旋轉，長度為100%
            $('.hum .top-line').css({
                'top': '25%',
                'transform': 'rotate(45deg)'
            });
            $('.hum .center-line').css('display', 'none');
            $('.hum .bottom-line').css({
                'top': '25%',
                'transform': 'rotate(135deg)',
                'width': '100%'
            });
            $('body').css('overflow', 'hidden');
        } else {
            // 淡出
            $('.hum-list').stop().fadeOut(200);

            // 選單紐狀態恢復
            $('.hum .top-line').css({
                'top': '0',
                'transform': 'rotate(0)'
            });
            $('.hum .center-line').css('display', 'block');
            $('.hum .bottom-line').css({
                'top': '50%',
                'transform': 'rotate(0)',
                'width': '50%'
            });
            $('body').css('overflow', 'auto');
        }

    })

    // 獲取大輪播圖的高
    let big_slickHeight = $('.big-slick').height();
    // 獲取側邊條頂端距離頁面頂部的高度
    let big_followTop = $('.big-follow').offset().top;
    // 上面兩者相減後的距離 (側邊條在fixed狀態下須與頂端保持的高度)
    let slideTop = big_followTop - big_slickHeight;

    $(window).scroll(function () {
        // 被頁面被捲去的高度 >= 大輪播圖
        if ($(document).scrollTop() >= big_slickHeight) {
            // 側邊條改為fixed，高度改為相減後的距離
            $('.big-follow').css({
                'position': 'fixed',
                'top': slideTop + 'px'
            });
        } else {
            // 恢復原來的absolute和位置
            $('.big-follow').css({
                'position': 'absolute',
                'top': '120%'
            })
        }

        // 迴圈所有添加fade-area的元素
        $('.fade-area').each(function () {
            // 被捲去的高度 + 螢幕高度 >= 該元素頂端距離頁面頂部的高度
            if (($(document).scrollTop() + $(window).height()) >= $(this).offset().top) {
                // 讓該元素淡入
                $(this).stop().fadeIn(800);
            } else {
                // 讓該元素淡出
                $(this).stop().fadeOut(100);
            }
        })
        // 有添加fade-area的元素
        // news content
        // profile pic
        // profile content
        // schedule view-all
        // works content
        // yt mark
        // yt link
        // yt video
        // twitter mark
        // twitter link
        // web
        // footer


        // title加入動畫 呈現打字機效果

        // news
        // 桌機
        if ($(window).width() > 992) {
            // 被捲去的高度 + 螢幕高度 >= 該元素頂端距離頁面頂部的高度
            if (($(document).scrollTop() + $(window).height()) >= $('.main .news .title h4').offset().top) {
                // 字1.5rem，4個字，文字置中
                $('.main .news .title h4').css({
                    'width': '6rem',
                    'animation': 'news_h4 .6s steps(4,end)',
                    'text-align': 'center'
                })
            } else { // 恢復原狀
                $('.main .news .title h4').css({
                    'animation': 'none'
                })
            }
        } else { // 手機
            if (($(document).scrollTop() + $(window).height()) >= $('.main .news .title h4').offset().top) {
                // 文字靠左對齊
                $('.main .news .title h4').css({
                    'width': '6rem',
                    'animation': 'news_h4 .6s steps(4,end)',
                    'text-align': 'left'
                })
            } else {
                $('.main .news .title h4').css({
                    'animation': 'none'
                })
            }
        }

        // profile
        // 手機跟桌機的offset().top有些微落差，分開做
        if ($(window).width() > 992) {
            if (($(document).scrollTop() + $(window).height()) >= $('.main .profile .info').offset().top) {
                $('.main .profile .title h4').css({
                    'width': '10.5rem',
                    'animation': 'rem10_5_h4 1s steps(7,end)'
                })
            } else {
                $('.main .profile .title h4').css({
                    'animation': 'none'
                })
            }
        } else {
            if (($(document).scrollTop() + $(window).height()) >= $('.main .profile .info').offset().top - 350) {
                $('.main .profile .title h4').css({
                    'width': '10.5rem',
                    'animation': 'rem10_5_h4 1s steps(7,end)'
                })
            } else {
                $('.main .profile .title h4').css({
                    'animation': 'none'
                })
            }
        }

        // schedule
        // 桌機
        if ($(window).width() > 992) {
            // 被捲去的高度 + 螢幕高度 >= 該元素頂端距離頁面頂部的高度
            if (($(document).scrollTop() + $(window).height()) >= $('.main .schedule .title h4').offset().top) {
                // 字1.5rem，8個字，文字置中
                $('.main .schedule .title h4').css({
                    'width': '12rem',
                    'animation': 'schedule_h4 1s steps(8,end)',
                    'text-align': 'center'
                })
            } else { // 恢復原狀
                $('.main .schedule .title h4').css({
                    'animation': 'none'
                })
            }
        } else { // 手機
            if (($(document).scrollTop() + $(window).height()) >= $('.main .schedule .title h4').offset().top) {
                // 文字靠左對齊
                $('.main .schedule .title h4').css({
                    'width': '12rem',
                    'animation': 'schedule_h4 1s steps(8,end)',
                    'text-align': 'left'
                })
            } else {
                $('.main .schedule .title h4').css({
                    'animation': 'none'
                })
            }
        }

        // 嘗試用迴圈做
        // works h4
        if ($(window).width() > 992) {
            $('.rem7_5_h4').each(function () {
                if (($(document).scrollTop() + $(window).height()) >= $(this).offset().top) {
                    $(this).css({
                        'width': '7.5rem',
                        'animation': 'rem7_5_h4 .6s steps(4,end)',
                        'text-align': 'center'
                    })
                } else {
                    $(this).css({
                        'animation': 'none'
                    })
                }
            })
        } else {
            $('.rem7_5_h4').each(function () {
                if (($(document).scrollTop() + $(window).height()) >= $(this).offset().top) {
                    $(this).css({
                        'width': '7.5rem',
                        'animation': 'rem7_5_h4 .6s steps(4,end)',
                        'text-align': 'left'
                    })
                } else {
                    $(this).css({
                        'animation': 'none'
                    })
                }
            })
        }

        // 字數和字體大小一樣，用迴圈來做
        // yt h4
        // twitter h4
        $('.rem10_5_h4').each(function () {
            if (($(document).scrollTop() + $(window).height()) >= $(this).offset().top) {
                $(this).css({
                    'width': '10.5rem',
                    'animation': 'rem10_5_h4 1s steps(7,end)',
                    'margin': '20px auto',
                    'text-align': 'center'
                })
            } else {
                $(this).css({
                    'animation': 'none'
                })
            }
        })

    })

    // 點擊tabBar裡面的p，就切換內容
    $('.tabBar p').on('click', function () {
        // 先給p設定index
        let index = $(this).index();

        // 點到該p時，讓index相同的item-group顯示，並且高度設為385px，其他item-group隱藏
        $('.item-group-cate>div').eq(index).css({'min-height': '385px','display': 'block'}).show().siblings().hide();

        // 桌機
        if ($(window).width() >= 992) {
            // 改為flex，高度設為205px
            $('.item-group-cate>div').eq(index).css({
                'display': 'flex',
                'min-height': '205px'
            })
        }

        
          // 添加class="change",讓被點擊的p的底下保持粗黑線
            $(this).addClass('change').siblings().removeClass('change');


    })







})