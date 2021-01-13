var module_4863336 = (function () {
    var __hs_messages = {};
    i18n_getmessage = function () {
        return hs_i18n_getMessage(__hs_messages, hsVars['language'], arguments);
    };
    i18n_getlanguage = function () {
        return hsVars['language'];
    };
    (function () {

        let $prodTour = $('.prog-switcher');

        function goToItem($targetSwitcher, targetItemNum) {

            $targetSwitcher.find('.prog-menu-item, .prog-switcher-images > div').removeClass('active');
            $targetSwitcher.find('[data-item="' + targetItemNum + '"]').addClass('active');
        }

        function autoScrollTour() {

            let targetItemNum = parseInt($prodTour.find('.prog-menu-item.active').attr('data-item')) + 1;

            if (targetItemNum > $prodTour.find('.prog-menu-item').length) {
                targetItemNum = 1;
            }

            goToItem($prodTour, targetItemNum);
        }

        var tourTimer;

        $(window).on("load", function () {

            tourTimer = setInterval(autoScrollTour, 5000);
        });

        $(document).ready(function () {

            let $switcherMenuItems = $prodTour.find('.prog-menu-item');
            let $switcherDots = $prodTour.find('.prog-menu-icon');

            $switcherMenuItems.on('click', function (evt) {

                if (!$(this).hasClass('active')) {

                    let $targetSwitcher = $(this).parents('.prog-switcher');
                    let targetItemNum = $(this).attr('data-item');

                    clearInterval(tourTimer);
                    tourTimer = null;

                    goToItem($targetSwitcher, targetItemNum);
                }
            });

            $switcherDots.on('click', function (evt) {

                if (!$(this).parent().hasClass('active')) {

                    let $targetSwitcher = $(this).parents('.prog-switcher');
                    let targetItemNum = $(this).parent().attr('data-item');

                    clearInterval(tourTimer);
                    tourTimer = null;

                    goToItem($targetSwitcher, targetItemNum);
                }
            });
        });

    })();
})();


var module_4863337 = (function () {
    var __hs_messages = {};
    i18n_getmessage = function () {
        return hs_i18n_getMessage(__hs_messages, hsVars['language'], arguments);
    };
    i18n_getlanguage = function () {
        return hsVars['language'];
    };
    (function () {

        let $prodTour = $('.prog-switcher1');

        function goToItem($targetSwitcher, targetItemNum) {

            $targetSwitcher.find('.prog-menu-item, .prog-switcher-images > div').removeClass('active');
            $targetSwitcher.find('[data-item="' + targetItemNum + '"]').addClass('active');
        }

        function autoScrollTour() {

            let targetItemNum = parseInt($prodTour.find('.prog-menu-item.active').attr('data-item')) + 1;

            if (targetItemNum > $prodTour.find('.prog-menu-item').length) {
                targetItemNum = 1;
            }

            goToItem($prodTour, targetItemNum);
        }

        var tourTimer;

        $(window).on("load", function () {

            tourTimer = setInterval(autoScrollTour, 5000);
        });

        $(document).ready(function () {

            let $switcherMenuItems = $prodTour.find('.prog-menu-item');
            let $switcherDots = $prodTour.find('.prog-menu-icon');

            $switcherMenuItems.on('click', function (evt) {

                if (!$(this).hasClass('active')) {

                    let $targetSwitcher = $(this).parents('.prog-switcher');
                    let targetItemNum = $(this).attr('data-item');

                    clearInterval(tourTimer);
                    tourTimer = null;

                    goToItem($targetSwitcher, targetItemNum);
                }
            });

            $switcherDots.on('click', function (evt) {

                if (!$(this).parent().hasClass('active')) {

                    let $targetSwitcher = $(this).parents('.prog-switcher');
                    let targetItemNum = $(this).parent().attr('data-item');

                    clearInterval(tourTimer);
                    tourTimer = null;

                    goToItem($targetSwitcher, targetItemNum);
                }
            });
        });

    })();
})();

/*      G5 header          */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#f8c212"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 6
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": .3,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#4a164b",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": false
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/*Changing text*/

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('changing-text');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".changing-text > .wrap { border-right: 0.08em solid #dca927 }";
  document.body.appendChild(css);
};

/*   Bottom Partner JS   */

function slideSlider(){
  $("#slider-scroller").css({"left":"0%","transition":"all 0s linear"});
  $("#slider-scroller").css({"left": String(parseInt($("#slider-scroller").css("left")) - 500) + "px","transition":"all 5s linear"});
  setTimeout(function(){moveSliderItem()}, 2635);
}

function moveSliderItem(){
  $("#slider-scroller div").first().detach().appendTo($("#slider-scroller"));
  slideSlider();
}


/*global $, alert, console, confirm*/

$(function () {
    "use strict";
    //you can put magicStartLoop class in any element you want to start with it
  
    //change magicStartLoop class every num of seconds
    setInterval(function () {
        //loop on every magicStartLoop in the page
        $(".magicStartLoop").each(function () {
            //after num of seconds make the first movement
            $(this).addClass("hidden").removeClass("magicStartLoop");
            //first movement
            $(this).next().addClass("magicStartLoop").removeClass("hidden");
            //check if the last element has magicStartLoop class to repeat the loop again
            if ($(".sliderContainer").children().last().hasClass("magicStartLoop")) {
                setTimeout(function () {
                    $(".sliderContainer").children().first().removeClass("hidden").addClass("magicStartLoop");
                }, 2000);//you must set this time as the same time for setInterval time
            }
        });
    }, 2000);//you can change the time for silder from 2000 to any value you want
    
    
});
