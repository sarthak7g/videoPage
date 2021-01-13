$(function () {
    $('#video_1').css('display', 'block');
    // $('#countrySelector').css('left', 54.5);

    var items = $('#countrySelection-items').width();
    var itemSelected = document.getElementsByClassName('countrySelection-item');
    countriesPointerScroll($(itemSelected));
    $('#countrySelection-items').scrollLeft(200).delay(200).animate(
        {
            scrollLeft: '-=200',
        },
        2000,
        'easeOutQuad'
    );

    $('.countrySelection-paddle-right').click(function () {
        $('#countrySelection-items').animate({
            scrollLeft: '+=' + items,
        });
    });
    $('.countrySelection-paddle-left').click(function () {
        $('#countrySelection-items').animate({
            scrollLeft: '-=' + items,
        });
    });

    if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        var scrolling = false;

        $('.countrySelection-paddle-right')
            .bind('mouseover', function (event) {
                scrolling = true;
                scrollContent('right');
            })
            .bind('mouseout', function (event) {
                scrolling = false;
            });

        $('.countrySelection-paddle-left')
            .bind('mouseover', function (event) {
                scrolling = true;
                scrollContent('left');
            })
            .bind('mouseout', function (event) {
                scrolling = false;
            });

        function scrollContent(direction) {
            var amount = direction === 'left' ? '-=3px' : '+=3px';
            $('#countrySelection-items').animate(
                {
                    scrollLeft: amount,
                },
                1,
                function () {
                    if (scrolling) {
                        scrollContent(direction);
                    }
                }
            );
        }
    }

    $('.countrySelection-item').click(function () {
        $('#countrySelection').find('.active').removeClass('active');
        $(this).addClass('active');
        countriesPointerScroll($(this));
        if ($(this).attr('id') === 'video_li_1') {
            $('#video_1').css('display', 'block');
            $('#video_2').css('display', 'none');
            $('#video_3').css('display', 'none');
            $('#video_4').css('display', 'none');
        } else if ($(this).attr('id') === 'video_li_2') {
            $('#video_1').css('display', 'none');
            $('#video_2').css('display', 'block');
            $('#video_3').css('display', 'none');
            $('#video_4').css('display', 'none');
        } else if ($(this).attr('id') === 'video_li_3') {
            $('#video_1').css('display', 'none');
            $('#video_2').css('display', 'none');
            $('#video_3').css('display', 'block');
            $('#video_4').css('display', 'none');
        } else if ($(this).attr('id') === 'video_li_4') {
            $('#video_1').css('display', 'none');
            $('#video_2').css('display', 'none');
            $('#video_3').css('display', 'none');
            $('#video_4').css('display', 'block');
        }
        pauseVideo();
    });
});

let pauseVideo = function () {
    document.getElementById('video_1').pause();
    document.getElementById('video_2').pause();
    document.getElementById('video_3').pause();
    document.getElementById('video_4').pause();
};

function countriesPointerScroll(ele) {
    var parentScroll = $('#countrySelection-items').scrollLeft();
    var offset =
        $(ele).offset().left - $('#countrySelection-items').offset().left;
    var totalelement = offset + $(ele).outerWidth() / 2;

    var rt =
        $(ele).offset().left -
        $('#countrySelection-wrapper').offset().left +
        $(ele).outerWidth() / 2;
    if (totalelement + parentScroll == 0) {
        $('#countrySelector').animate({
            left: 54.5,
        });
    } else {
        $('#countrySelector').animate({
            left: totalelement + parentScroll,
        });
    }
}
