var show = false;

$('.side-btn').on('click', function () {
    if (!show) {
        $('.nav2').animate({left: 0}, 300);
    } else {
        $('.nav2').animate({left: -235}, 300);
    }
    show = !show;
});
