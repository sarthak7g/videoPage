$('head').append('<link rel="stylesheet" href="css/loader.css" />');

$('body').prepend(`<div class="overlay"></div>
<div class="loader" id="loader">
        <div class="gel center-gel">
            <div class="hex-brick hh1"></div>
            <div class="hex-brick hh2"></div>
            <div class="hex-brick hh3"></div>
        </div>
        <div class="gel c1 r1">
            <div class="hex-brick hh1"></div>
            <div class="hex-brick hh2"></div>
            <div class="hex-brick hh3"></div>
        </div>
        <div class="gel c2 r1">
            <div class="hex-brick hh1"></div>
            <div class="hex-brick hh2"></div>
            <div class="hex-brick hh3"></div>
        </div>
        <div class="gel c3 r1">
            <div class="hex-brick hh1"></div>
            <div class="hex-brick hh2"></div>
            <div class="hex-brick hh3"></div>
        </div>
        <div class="gel c4 r1">
            <div class="hex-brick hh1"></div>
            <div class="hex-brick hh2"></div>
            <div class="hex-brick hh3"></div>
        </div>
        <div class="gel c5 r1">
            <div class="hex-brick hh1"></div>
            <div class="hex-brick hh2"></div>
            <div class="hex-brick hh3"></div>
        </div>
        <div class="gel c6 r1">
            <div class="hex-brick hh1"></div>
            <div class="hex-brick hh2"></div>
            <div class="hex-brick hh3"></div>
        </div>

        
</div> `);

function showLoader() {
    $('.overlay, .loader').css('display', 'block');
}
function hideLoader() {
    $('.overlay, .loader').css('display', 'none');
}
//$('a').each(function () {
//    if ($(this).attr('href').length > 1 && $(this).attr('href')[0] != '#') {
//        $(this).attr('onclick', 'showLoader()');
//    }
//});
