var $move = $('.move');
var index = 0;
var flag = true;
var timer = null;
var num = null;
function init() {
    $move.css({ 'margin-top': '85px', 'height': '100px', 'width': '530px', 'left': '970px', 'margin-left': '0px', 'opacity': '0.1', 'z-index': '1', 'filter': 'brightness(35%)' }),

        $move.eq(0).css({ 'margin-top': '23px', 'height': '224px', 'width': '530px', 'left': '0', 'margin-left': '0px', 'opacity': '0.9' }),
        $move.eq(2).css({ 'margin-top': '23px', 'height': '224px', 'width': '530px', 'left': '440px', 'margin-left': '0px', 'opacity': '0.9' }),
        $move.eq(1).css({ 'margin-top': '0px', 'height': '270px', 'width': '640px', 'left': '155px', 'margin-left': '0px', 'opacity': '1', 'z-index': '10', 'filter': 'brightness(100%)' })
}
init();

function leftMove() {
    if (flag) {
        flag = false;
        $('.active').removeClass('active');

        $move.css({ 'z-index': '1', 'filter': 'brightness(35%)' });
        $move.eq(index % 12).animate({ 'margin-top': '85px', 'height': '100px', 'width': '530px', 'left': '-530px', 'margin-left': '0px', 'opacity': '0.1' });
        $move.eq((index + 1) % 12).animate({ 'margin-top': '23px', 'height': '224px', 'width': '530px', 'left': '0', 'margin-left': '0px', 'opacity': '0.9' });
        $move.eq((index + 2) % 12).css({ 'z-index': '10', 'filter': 'brightness(100%)' });
        $('.bR').eq((index + 2) % 12).addClass('active');
        $move.eq((index + 2) % 12).animate({ 'margin-top': '0px', 'height': '270px', 'width': '640px', 'left': '155px', 'margin-left': '0px', 'opacity': '1' });
        $move.eq((index + 3) % 12).css({ 'left': '800px' });
        $move.eq((index + 3) % 12).animate({ 'margin-top': '23px', 'height': '224px', 'width': '530px', 'left': '440px', 'margin-left': '0px', 'opacity': '0.9' }, function () {
            index++;
            flag = true;
        })
    }
}


function rightMove() {
    if (flag) {
        flag = false;
        $('.active').removeClass('active');
        $move.css({ 'z-index': '1', 'filter': 'brightness(35%)' });
        $move.eq((index - 1) % 12).css({ 'left': '-530px' });
        $move.eq((index - 1) % 12).animate({ 'margin-top': '23px', 'height': '224px', 'width': '530px', 'left': '0', 'margin-left': '0px', 'opacity': '0.9' });
        $('.bR').eq(index % 12).addClass('active');
        $move.eq(index % 12).css({ 'z-index': '10', 'filter': 'brightness(100%)' });
        $move.eq(index % 12).animate({ 'margin-top': '0px', 'height': '270px', 'width': '640px', 'left': '155px', 'margin-left': '0px', 'opacity': '1' });
        $move.eq((index + 1) % 12).animate({ 'margin-top': '23px', 'height': '224px', 'width': '530px', 'left': '440px', 'margin-left': '0px', 'opacity': '0.9' });
        $move.eq((index + 2) % 12).animate({ 'margin-top': '85px', 'height': '100px', 'width': '530px', 'left': '970px', 'margin-left': '0px', 'opacity': '0.1' }, function () {
            if (index > 0) {
                index--;
            } else {
                index = 12;
                index--;
            }
            flag = true;
        });
    }
}


// 下方点击切换
function indexMove(num) {
    // 点击跳转的圆点在当前图像的左侧
    if (flag) {
        if (num < (index + 1) % 12) {
            $('.active').removeClass('active');

            $move.css({ 'margin-top': '85px', 'height': '100px', 'width': '530px', 'left': '-530px', 'margin-left': '0px', 'opacity': '0.1', 'z-index': '1', 'filter': 'brightness(35%)' });
            $move.eq(num - 1).animate({ 'margin-top': '23px', 'height': '224px', 'width': '530px', 'left': '0', 'margin-left': '0px', 'opacity': '0.9' });
            $('.bR').eq(num).addClass('active');
            $move.eq(num).css({ 'z-index': '10', 'filter': 'brightness(100%)' });
            $move.eq(num).animate({ 'margin-top': '0px', 'height': '270px', 'width': '640px', 'left': '155px', 'margin-left': '0px', 'opacity': '1' });
            $move.eq(num + 1).animate({ 'margin-top': '23px', 'height': '224px', 'width': '530px', 'left': '440px', 'margin-left': '0px', 'opacity': '0.9' });
            $move.eq(num + 2).animate({ 'margin-top': '85px', 'height': '100px', 'width': '530px', 'left': '970px', 'margin-left': '0px', 'opacity': '0.1' }, function () {
                index = num - 1;
            });
        } else {
            //  ----------右侧-----------
            $('.active').removeClass('active');

            $move.css({ 'margin-top': '85px', 'height': '100px', 'width': '530px', 'left': '970px', 'margin-left': '0px', 'opacity': '0.1', 'z-index': '1', 'filter': 'brightness(35%)' });
            $move.eq((num + 1) % 12).animate({ 'margin-top': '23px', 'height': '224px', 'width': '530px', 'left': '440px', 'margin-left': '0px', 'opacity': '0.9' });
            $('.bR').eq(num).addClass('active');
            $move.eq(num).css({ 'z-index': '10', 'filter': 'brightness(100%)' });
            $move.eq(num).animate({ 'margin-top': '0px', 'height': '270px', 'width': '640px', 'left': '155px', 'margin-left': '0px', 'opacity': '1' });
            $move.eq(num - 1).animate({ 'margin-top': '23px', 'height': '224px', 'width': '530px', 'left': '0', 'margin-left': '0px', 'opacity': '0.9' });
            $move.eq(num - 2).animate({ 'margin-top': '85px', 'height': '100px', 'width': '530px', 'left': '-530px', 'margin-left': '0px', 'opacity': '0.1' }, function () {
                index = num - 1;
            });

        }
    }
}


timer = setInterval(leftMove, 2000);

$('.wrapper').on('mousemove', function () {
    clearInterval(timer);
})
$('.wrapper').on('mouseout', function () {
    timer = setInterval(leftMove, 2000);
})

$('.btn-left').on('click', function () {
    rightMove();
})


$('.btn-right').on('click', function () {
    leftMove();
})

$('.bR').hover(function () {
    $(this).addClass('addColor');
},function () {
    $(this).removeClass('addColor');
})

$('.bR').on('click', function () {
    // num= Number($(this).attr('classq').split(' ')[1]); 这样也可以获取对应的元素费劲，index()可以直接获取
    num = $(this).index();
    $(this).removeClass('addColor');
    indexMove(num);
})

