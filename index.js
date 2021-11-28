// 漢堡選單的開關鈕
let menuOpened = false;
const preloader = document.querySelector('#preloader')
const loading_txt = document.querySelector('#loading_txt')

if (window.innerWidth > 992) {
    setTimeout(function () {
        // 灰白背景
        preloader.classList.add('change')
    }, 2500)
} else {
    // 手機版調小文字大小
    loading_txt.classList.add('change')
    setTimeout(function () {
        // 灰白背景
        preloader.classList.add('change')
    }, 2500)
}

const hum = document.querySelector('.hum')
const hum_list = document.querySelector('.hum-list')
const top_line = document.querySelector('.top-line')
const center_line = document.querySelector('.center-line')
const bottom_line = document.querySelector('.bottom-line')

hum.addEventListener('click', () => {
    menuOpened = !menuOpened;
    if (menuOpened) {
        // 讓hum-list淡入，並改成flex
        hum_list.style.opacity = 1
        hum_list.style.zIndex = 2
        // 選單的三條線修改
        // 中線隱藏，上下的線往中間靠並旋轉，長度為100%
        top_line.style.top = '25%'
        top_line.style.transform = 'rotate(45deg)'
        center_line.style.display = 'none'
        bottom_line.style.top = '25%'
        bottom_line.style.transform = 'rotate(135deg)'
        bottom_line.style.width = '100%'
        document.body.style.overflow = 'hidden'
    } else {
        // 淡出
        hum_list.style.opacity = 0
        hum_list.style.zIndex = -1
        // 選單紐狀態恢復   
        top_line.style.top = '0'
        top_line.style.transform = 'rotate(0)'
        center_line.style.display = 'block'
        bottom_line.style.top = '50%'
        bottom_line.style.transform = 'rotate(0)'
        bottom_line.style.width = '50%'
        document.body.style.overflow = 'auto'
    }
})

// 獲取大輪播圖的高
// 這裡取得的輪播高度是三個img加起來的高度，所以要除掉
const big_slickHeight = document.querySelector('.big-slick').offsetHeight / 3
// 獲取側邊條頂端距離頁面頂部的高度
// 因為follow在輪播底下，所以也要除掉
const big_followTop = document.querySelector('.big-follow').offsetTop / 3;
// 上面兩者相減後的距離 (側邊條在fixed狀態下須與頂端保持的高度)
const slideTop = big_followTop - big_slickHeight;
const big_follow = document.querySelector('.big-follow')
const fade_area = document.querySelectorAll('.fade-area')

const news_title = document.querySelector('.main .news .title h4')
const profile_info = document.querySelector('.main .profile .info')
const profile_title = document.querySelector('.main .profile .info .title h4')
const profile_mobile_title = document.querySelector('.main .profile .title h4')
const schedule_title = document.querySelector('.main .schedule .title h4')
const work_title = document.querySelector('.rem7_5_h4')
const yt_twitter = document.querySelectorAll('.rem10_5_h4')


window.addEventListener('scroll', function () {
    // 被頁面被捲去的高度 >= 大輪播圖
    if (document.documentElement.scrollTop >= big_slickHeight) {
        // 側邊條改為fixed，高度改為相減後的距離
        big_follow.style.position = 'fixed'
        big_follow.style.top = slideTop + 'px'
    } else {
        // 恢復原來的absolute和位置
        big_follow.style.position = 'absolute'
        big_follow.style.top = '105%'
    }

    // 畫面淡入
    fade_area.forEach((item) => {
        // offsetTop會取得距離父級參照物(offsetParent)的距離
        // 因此 父級參照物的距離 + 父級參照物與其外層參照物的距離
        // console.log(item.offsetParent.offsetParent);
        if ((document.documentElement.scrollTop + window.innerHeight) >= (item.offsetParent.offsetTop + item.offsetTop)) {
            item.style.opacity = 1
            item.style.transition = '1s'
        } else {
            item.style.opacity = 0
            item.style.transition = '.1s'
        }
    })

    // title加入動畫 呈現打字機效果
    // news
    // 桌機
    if (window.innerWidth > 992) {
        // 被捲去的高度 + 螢幕高度 >= 該元素頂端距離頁面頂部的高度
        if ((document.documentElement.scrollTop + window.innerHeight) >= (news_title.offsetParent.offsetTop + news_title.offsetTop)) {
            // 字1.5rem，4個字，文字置中
            news_title.style.width = '6rem'
            news_title.style.animation = 'news_h4 .6s steps(4,end)'
            news_title.style.textAlign = 'center'
        } else {
            news_title.style.animation = 'none'
        }
    } else {
        // 手機
        if ((document.documentElement.scrollTop + window.innerHeight) >= news_title.offsetTop) {
            // 文字靠左對齊
            news_title.style.width = '6rem'
            news_title.style.animation = 'news_h4 .6s steps(4,end)'
            news_title.style.textAlign = 'left'
        } else {
            news_title.style.animation = 'none'
        }
    }

    // profile
    // 手機跟桌機的offset().top有些微落差，分開做
    if (window.innerWidth > 992) {
        // 被捲去的高度 + 螢幕高度 >= 該元素頂端距離頁面頂部的高度
        if ((document.documentElement.scrollTop + window.innerHeight) >= (profile_info.offsetParent.offsetTop + profile_info.offsetTop)) {
            profile_title.style.width = '10.5rem'
            profile_title.style.animation = 'rem10_5_h4 1s steps(7,end)'
        } else {
            profile_title.style.animation = 'none'
        }
    } else {
        // 手機
        if ((document.documentElement.scrollTop + window.innerHeight) >= (profile_info.offsetParent.offsetTop + profile_info.offsetTop) - 350) {
            profile_mobile_title.style.width = '10.5rem'
            profile_mobile_title.style.animation = 'rem10_5_h4 1s steps(7,end)'
        } else {
            profile_mobile_title.style.animation = 'none'
        }
    }

    // schedule
    // 桌機
    if (window.innerWidth > 992) {
        // 被捲去的高度 + 螢幕高度 >= 該元素頂端距離頁面頂部的高度
        if ((document.documentElement.scrollTop + window.innerHeight) >= (schedule_title.offsetTop + schedule_title.offsetParent.offsetTop)) {
            // 字1.5rem，8個字，文字置中
            schedule_title.style.width = '12rem'
            schedule_title.style.animation = 'schedule_h4 1s steps(8,end)'
            schedule_title.style.textAlign = 'center'
        } else {
            schedule_title.style.animation = 'none'
        }
    } else {
        // 手機
        if ((document.documentElement.scrollTop + window.innerHeight) >= (schedule_title.offsetTop + schedule_title.offsetParent.offsetTop)) {
            schedule_title.style.width = '12rem'
            schedule_title.style.animation = 'schedule_h4 1s steps(8,end)'
            schedule_title.style.textAlign = 'left'
        } else {
            schedule_title.style.animation = 'none'
        }
    }

    // works h4
    if (window.innerWidth > 992) {
        // 被捲去的高度 + 螢幕高度 >= 該元素頂端距離頁面頂部的高度
        if ((document.documentElement.scrollTop + window.innerHeight) >= (work_title.offsetTop + work_title.offsetParent.offsetTop)) {
            // 字1.5rem，8個字，文字置中
            work_title.style.width = '7.5rem'
            work_title.style.animation = 'rem7_5_h4 .6s steps(4,end)'
            work_title.style.textAlign = 'center'
        } else {
            work_title.style.animation = 'none'
        }
    } else {
        // 手機
        if ((document.documentElement.scrollTop + window.innerHeight) >= (work_title.offsetTop + work_title.offsetParent.offsetTop)) {
            schedule_title.style.width = '7.5rem'
            schedule_title.style.animation = 'rem7_5_h4 .6s steps(4,end)'
            schedule_title.style.textAlign = 'left'
        } else {
            schedule_title.style.animation = 'none'
        }
    }

    // 字數和字體大小一樣，用迴圈來做
    // yt h4
    // twitter h4
    yt_twitter.forEach((item) => {
        // 被捲去的高度 + 螢幕高度 >= 該元素頂端距離頁面頂部的高度
        if ((document.documentElement.scrollTop + window.innerHeight) >= (item.offsetTop + item.offsetParent.offsetTop)) {
            // 字1.5rem，8個字，文字置中
            item.style.width = '10.5rem'
            item.style.animation = 'rem10_5_h4 1s steps(7,end)'
            item.style.margin = '20px auto'
            item.style.textAlign = 'center'
        } else {
            item.style.animation = 'none'
        }
    })
})

// 去除兄弟元素顯示list
function siblingsList(item) {
    var p = item.parentNode.children;
    for (var i = 0; i < p.length; i++) {
        if (p[i] !== item) {
            p[i].style.display = 'none'
        }
    }
}
// 去除兄弟元素顯示黑底線
function siblingsLine(item) {
    var p = item.parentNode.children;
    for (var i = 0; i < p.length; i++) {
        if (p[i] !== item) {
            p[i].classList.remove('change')
        }
    }
}

// 切換按鈕
const tabBar_option = document.querySelectorAll('.tabBar p')
// 桌機List
const tabBar_computer_list = document.querySelectorAll('.item-group-cate.computer>div')
// 手機List
const tabBar_mobile_list = document.querySelectorAll('.item-group-cate.mobile>div')
// 點擊tabBar裡面的p，就切換內容
tabBar_option.forEach(function (option, i) {
    option.addEventListener('click', () => {
        // 桌機list
        tabBar_computer_list[i].style.display = 'flex'
        tabBar_computer_list[i].style.minHeight = '205px'
        // 去除兄弟Lsit
        siblingsList(tabBar_computer_list[i])
        // 手機list
        tabBar_mobile_list[i].style.display = 'block'
        tabBar_mobile_list[i].style.minHeight = '385px'
        // 去除兄弟Lsit
        siblingsList(tabBar_mobile_list[i])
        // 添加黑底線
        option.classList.add('change')
        // 去除兄弟黑底線
        siblingsLine(option)
    })
})


$(function () {
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

    // 頁面載入中
    // if ($(window).width() > 992) {
    // 灰白背景
    // delay時間與輪播圖的播放速度些微錯開，避免一進入頁面輪播圖就剛好切換
    // $("#preloader").delay(2200).fadeOut("slow");
    // 文字，delay:2s，打字機效果，13個字*2rem，文字置中
    //     $("#loading_txt").delay(2200).css({
    //         'width': '26rem',
    //         'animation': 'loading 1.5s steps(13,end)',
    //         'text-align': 'center'
    //     }).fadeOut("slow");
    // } else {
    //     $("#preloader").delay(2200).fadeOut("slow");
    // 手機版調小文字大小
    //     $("#loading_txt").delay(2200).css({
    //         'width': '26rem',
    //         'font-size': '1.5rem',
    //         'animation': 'loading 1.5s steps(13,end)',
    //         'text-align': 'center'
    //     }).fadeOut("slow");
    // }

    // 漢堡選單
    // $('.hum').on('click', function () {
    // 點擊後開關狀態切換
    // menuOpened = !menuOpened;
    // if (menuOpened == true) {
    // 讓hum-list淡入，並改成flex
    // $('.hum-list').stop(0).fadeIn(200);
    // $('.hum-list').css('display', 'flex');

    // 選單的三條線修改
    // 中線隱藏，上下的線往中間靠並旋轉，長度為100%
    // $('.hum .top-line').css({
    //     'top': '25%',
    //     'transform': 'rotate(45deg)'
    // });
    //     // $('.hum .center-line').css('display', 'none');
    //     $('.hum .bottom-line').css({
    //         'top': '25%',
    //         'transform': 'rotate(135deg)',
    //         'width': '100%'
    //     });
    //     $('body').css('overflow', 'hidden');
    // } else {
    // 淡出
    // $('.hum-list').stop().fadeOut(200);

    // 選單紐狀態恢復
    //         $('.hum .top-line').css({
    //             'top': '0',
    //             'transform': 'rotate(0)'
    //         });
    //         $('.hum .center-line').css('display', 'block');
    //         $('.hum .bottom-line').css({
    //             'top': '50%',
    //             'transform': 'rotate(0)',
    //             'width': '50%'
    //         });
    //         $('body').css('overflow', 'auto');
    //     }

    // })

    // 獲取大輪播圖的高
    // let big_slickHeight = $('.big-slick').height();
    // 獲取側邊條頂端距離頁面頂部的高度
    // let big_followTop = $('.big-follow').offset().top;
    // 上面兩者相減後的距離 (側邊條在fixed狀態下須與頂端保持的高度)
    // let slideTop = big_followTop - big_slickHeight;

    // $(window).scroll(function () {
    // 被頁面被捲去的高度 >= 大輪播圖
    // if ($(document).scrollTop() >= big_slickHeight) {
    // 側邊條改為fixed，高度改為相減後的距離
    //     $('.big-follow').css({
    //         'position': 'fixed',
    //         'top': slideTop + 'px'
    //     });
    // } else {
    // 恢復原來的absolute和位置
    //     $('.big-follow').css({
    //         'position': 'absolute',
    //         'top': '105%'
    //     })
    // }

    // 迴圈所有添加fade-area的元素
    // $('.fade-area').each(function () {
    // 被捲去的高度 + 螢幕高度 >= 該元素頂端距離頁面頂部的高度
    //     if (($(document).scrollTop() + $(window).height()) >= $(this).offset().top) {
    //         // 讓該元素淡入
    //         $(this).stop().fadeIn(800);
    //     } else {
    //         // 讓該元素淡出
    //         $(this).stop().fadeOut(100);
    //     }
    // })
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
    // if ($(window).width() > 992) {
    // 被捲去的高度 + 螢幕高度 >= 該元素頂端距離頁面頂部的高度
    // if (($(document).scrollTop() + $(window).height()) >= $('.main .news .title h4').offset().top) {
    // // 字1.5rem，4個字，文字置中
    // $('.main .news .title h4').css({
    //     'width': '6rem',
    //     'animation': 'news_h4 .6s steps(4,end)',
    //     'text-align': 'center'
    // })
    // } else { 
    // 恢復原狀
    //         $('.main .news .title h4').css({
    //             'animation': 'none'
    //         })
    //     }
    // } else { 
    // 手機
    // if (($(document).scrollTop() + $(window).height()) >= $('.main .news .title h4').offset().top) {
    // 文字靠左對齊
    //         $('.main .news .title h4').css({
    //             'width': '6rem',
    //             'animation': 'news_h4 .6s steps(4,end)',
    //             'text-align': 'left'
    //         })
    //     } else {
    //         $('.main .news .title h4').css({
    //             'animation': 'none'
    //         })
    //     }
    // }

    // profile
    // 手機跟桌機的offset().top有些微落差，分開做
    // if ($(window).width() > 992) {
    //     if (($(document).scrollTop() + $(window).height()) >= $('.main .profile .info').offset().top) {
    //         $('.main .profile .title h4').css({
    //             'width': '10.5rem',
    //             'animation': 'rem10_5_h4 1s steps(7,end)'
    //         })
    //     } else {
    //         $('.main .profile .title h4').css({
    //             'animation': 'none'
    //         })
    //     }
    // } else {
    //     if (($(document).scrollTop() + $(window).height()) >= $('.main .profile .info').offset().top - 350) {
    //         $('.main .profile .title h4').css({
    //             'width': '10.5rem',
    //             'animation': 'rem10_5_h4 1s steps(7,end)'
    //         })
    //     } else {
    //         $('.main .profile .title h4').css({
    //             'animation': 'none'
    //         })
    //     }
    // }

    // schedule
    // 桌機
    // if ($(window).width() > 992) {
    // 被捲去的高度 + 螢幕高度 >= 該元素頂端距離頁面頂部的高度
    // if (($(document).scrollTop() + $(window).height()) >= $('.main .schedule .title h4').offset().top) {
    // 字1.5rem，8個字，文字置中
    //     $('.main .schedule .title h4').css({
    //         'width': '12rem',
    //         'animation': 'schedule_h4 1s steps(8,end)',
    //         'text-align': 'center'
    //     })
    // } else { 
    // 恢復原狀
    //         $('.main .schedule .title h4').css({
    //             'animation': 'none'
    //         })
    //     }
    // } else { 
    // 手機
    // if (($(document).scrollTop() + $(window).height()) >= $('.main .schedule .title h4').offset().top) {
    // 文字靠左對齊
    //         $('.main .schedule .title h4').css({
    //             'width': '12rem',
    //             'animation': 'schedule_h4 1s steps(8,end)',
    //             'text-align': 'left'
    //         })
    //     } else {
    //         $('.main .schedule .title h4').css({
    //             'animation': 'none'
    //         })
    //     }
    // }

    // 嘗試用迴圈做
    // works h4
    // if ($(window).width() > 992) {
    //     $('.rem7_5_h4').each(function () {
    //         if (($(document).scrollTop() + $(window).height()) >= $(this).offset().top) {
    //             $(this).css({
    //                 'width': '7.5rem',
    //                 'animation': 'rem7_5_h4 .6s steps(4,end)',
    //                 'text-align': 'center'
    //             })
    //         } else {
    //             $(this).css({
    //                 'animation': 'none'
    //             })
    //         }
    //     })
    // } else {
    //     $('.rem7_5_h4').each(function () {
    //         if (($(document).scrollTop() + $(window).height()) >= $(this).offset().top) {
    //             $(this).css({
    //                 'width': '7.5rem',
    //                 'animation': 'rem7_5_h4 .6s steps(4,end)',
    //                 'text-align': 'left'
    //             })
    //         } else {
    //             $(this).css({
    //                 'animation': 'none'
    //             })
    //         }
    //     })
    // }

    // 字數和字體大小一樣，用迴圈來做
    // yt h4
    // twitter h4
    // $('.rem10_5_h4').each(function () {
    //     if (($(document).scrollTop() + $(window).height()) >= $(this).offset().top) {
    //         $(this).css({
    //             'width': '10.5rem',
    //             'animation': 'rem10_5_h4 1s steps(7,end)',
    //             'margin': '20px auto',
    //             'text-align': 'center'
    //         })
    //     } else {
    //         $(this).css({
    //             'animation': 'none'
    //         })
    //     }
    // })

    // })

    // 點擊tabBar裡面的p，就切換內容
    // $('.tabBar p').on('click', function () {
    // 先給p設定index
    // let index = $(this).index();

    // 點到該p時，讓index相同的item-group顯示，並且高度設為385px，其他item-group隱藏

    // 手機
    // $('.item-group-cate.mobile>div').eq(index).css({
    //     'display': 'block',
    //     'min-height': '385px',
    // }).show().siblings().hide();

    // 桌機
    // $('.item-group-cate.computer>div').eq(index).css({
    //     'display': 'flex',
    //     'min-height': '205px'
    // }).show().siblings().hide();


    // 添加class="change",讓被點擊的p的底下保持粗黑線
    //     $(this).addClass('change').siblings().removeClass('change');

    // })







})