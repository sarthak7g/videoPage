$(document).ready(function () {

    var video = $(".cutsomVideo");
    var progressBar = $(".progress-bar");

    for (let i = 0; i < video.length; i++) {

        video[i].addEventListener("play", function () {
            setInterval(function () {
                var percentage = Math.round((video[i].currentTime / video[i].duration) * 100);
                $(progressBar[i]).css("width", percentage + "%")
            });
        });

        $('#videoModal').on('hide.bs.modal', function (event) {
            video[i].pause();
        })

    }

    $('.video1').click(function () {
        $('#video1').show();
        $('#video2').hide();
        $('#video3').hide();
        $('#video4').hide();
        $('#video5').hide();
        $('#video1').find('.cutsomVideo')[0].play()
    })

    $('.video2').click(function () {
        $('#video2').show();
        $('#video3').hide();
        $('#video4').hide();
        $('#video5').hide();
        $('#video1').hide();
        $('#video2').find('.cutsomVideo')[0].play()
    })

    $('.video3').click(function () {
        $('#video3').show();
        $('#video4').hide();
        $('#video5').hide();
        $('#video2').hide();
        $('#video1').hide();
        $('#video3').find('.cutsomVideo')[0].play()

    })

    $('.video4').click(function () {
        $('#video4').show();
        $('#video5').hide();
        $('#video3').hide();
        $('#video2').hide();
        $('#video1').hide();
        $('#video4').find('.cutsomVideo')[0].play()
    })

    $('.video5').click(function () {
        $('#video5').show();
        $('#video4').hide();
        $('#video3').hide();
        $('#video2').hide();
        $('#video1').hide();
        $('#video5').find('.cutsomVideo')[0].play()

    })

    const headerSlider = $('.header-slider').owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        // autoplaySpeed: 0.1,
        autoplayTimeout: 3000,
        loop: true,
        animateOut: 'fadeOut',
    });

    const mob_headerSlider = $('.mob-header-slider').owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        // autoplaySpeed: 0.1,
        autoplayTimeout: 3000,
        loop: true,
        animateOut: 'fadeOut',
    });

    const videoSlider = $('.video-slider').owlCarousel({
        items: 2,
        dots: false
    });

    // Go to the next item
    $('#videoSliderNextBtn').click(function () {
        videoSlider.trigger('next.owl.carousel');
    })

    const videoSlider1 = $('.video-slider1').owlCarousel({
        items: 1,
        dots: false
    });

    // Go to the next item
    $('#videoSlider1NextBtn').click(function () {
        videoSlider1.trigger('next.owl.carousel');
    })

    const coursesSlider = $('.courses-slider').owlCarousel({
        items: 3,
        dots: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            769: {
                items: 2,
            },
            1110: {
                items: 3,

            }
        }
    });

    // Go to the next item
    $('#coursesSliderPrevBtn').click(function () {
        coursesSlider.trigger('prev.owl.carousel');
    })

    $('#coursesSliderNextBtn').click(function () {
        coursesSlider.trigger('next.owl.carousel');
    })

    const hiveSlider = $('.hive-slider').owlCarousel({
        items: 3,
        dots: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                margin: 0,

            },
            769: {
                items: 2,
            },
            1110: {
                items: 3,

            }
        }
    });

    // Go to the next item

    $('#hiveSliderPrevBtn').click(function () {
        hiveSlider.trigger('prev.owl.carousel');
    })
    $('#hiveSliderNextBtn').click(function () {
        hiveSlider.trigger('next.owl.carousel');
    })


    const hackathonSlider = $('.hackathon-slider').owlCarousel({
        items: 3,
        dots: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            769: {
                items: 2,
            },
            1110: {
                items: 3,

            }
        }
    });

    // Go to the next item

    $('#hackathonSliderPrevBtn').click(function () {
        hackathonSlider.trigger('prev.owl.carousel');
    })
    $('#hackathonSliderNextBtn').click(function () {
        hackathonSlider.trigger('next.owl.carousel');
    })



    const eventsSlider = $('.events-slider').owlCarousel({
        items: 3,
        dots: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            769: {
                items: 2,
            },
            1110: {
                items: 3,

            }
        }
    });

    // Go to the next item
    $('#eventsSliderPrevBtn').click(function () {
        eventsSlider.trigger('prev.owl.carousel');
    })

    $('#eventsSliderNextBtn').click(function () {
        eventsSlider.trigger('next.owl.carousel');
    })



    // smaller-card-slider
    const smallerCardSlider = $('.smaller-card-slider').owlCarousel({
        items: 3,
        dots: true,
        // margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            769: {
                items: 2,
            },
            1110: {
                items: 3,

            }
        }
    });
	
	 // smaller-card-slider
    const G5Slider = $('.smaller-card-G5slider').owlCarousel({
        items: 1,
        dots: true,
        // margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            769: {
                items: 1,
            },
            1110: {
                items: 1,

            }
        }
    });


    // FOR TEXT ANIMATION
    setInterval(() => {
        $("#textTransition").fadeOut(function () {
            $(this).html("<h2 class='title-2'><span>Powered by the</span> <br /> Global Community of Creators</h2>")
        }).fadeIn();
        00

        setTimeout(() => {
            $("#textTransition").fadeOut(function () {
                $(this).html("<h2><span>WORLD'S</span> FIRST AI-BASED <br /> 21ST CENTURY <span>COURSES</span></h2>")
            }).fadeIn();
        }, 4000)
    }, 8000)


    $('#loginSignupBTN').click(function () {
        $('#loginModal').css('display', 'none');
        $('#signupModal').css('display', 'block');
        // document.getElementById("signupForm").reset();
        // document.getElementById("loginForm").reset();
        resetFields();
    })

    $('.openLoginForm').click(function () {
        $('#loginModal').show();
        $('#signupModal').hide();
        $('#subscribe-now').hide()

        // document.getElementById("signupForm").reset();
        // document.getElementById("loginForm").reset();
        resetFields();
    })

    $('.openSignupForm').click(function () {
        $('#loginModal').hide();
        $('#subscribe-now').hide()
        $('#signupModal').show();
        // document.getElementById("signupForm").reset();
        // document.getElementById("loginForm").reset();
        resetFields();
    })

    $('.open-subscribe-modal').click(function () {
        $('#loginModal').hide();
        $('#signupModal').hide();
        $('#subscribe-now').show()

    })

    // $('.loginOrSignup').click(function () {
    //     $('#loginModal').css('display', 'block');
    //     $('#signupModal').css('display', 'none');
    //     document.getElementById("loginForm").reset();
    //     document.getElementById("signupForm").reset();
    //     resetPlaceholder();
    // })

    function resetFields() {
        $('.validationerror').empty();
    }


    $('.radio').change(function () {

        let formName = $(this).val();
        console.log(formName);

        switch (formName) {
            case 'student':
                $('#signup-form').show();
                $('#educator-form').hide();
                $('#corporate-form').hide();
                break;

            case 'educator':
                $('#signup-form').hide();
                $('#educator-form').show();
                $('#corporate-form').hide();
                break;

            case 'corporation':
                $('#signup-form').hide();
                $('#educator-form').hide();
                $('#corporate-form').show();
                break;

            default:
                break;
        }

    })

    $('.open-edu').click(function () {
        $('#educator-radio').prop('checked', true)
        $('#signupModal').show();
        $('#educator-form').show();
        $('#loginModal').hide();
        $('#signup-form').hide();
        $('#corporate-form').hide();
    })

    $('.open-corpo').click(function () {
        $('#corporation-radio').prop('checked', true)
        $('#signupModal').show();
        $('#corporate-form').show();
        $('#loginModal').hide();
        $('#signup-form').hide();
        $('#educator-form').hide();
    })


    $('#signup-btn').click(function () {

        var name_validation = /^[a-z\sA-Z]+$/;
        var email_validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // var password_validation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        var password_validation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        //Minimum six characters, at least one letter and one number :
        var name_validation = /^[a-z\sA-Z]+$/;

        let signup_email = $('#newemail').val();
        let signup_password = $('#newpassword').val();
        let first_name = $('#firstName').val();
        let last_name = $('#lastName').val();


        let isemail = email_validation.test(signup_email);
        let ispassword = password_validation.test(signup_password);
        let isfirstname = name_validation.test(first_name);
        let islastname = name_validation.test(last_name);
        if (isemail && ispassword && isfirstname && islastname) {
            console.log("all ok");
        }
        if (isemail == false) {
            $('#newemail').val("");
            document.getElementsByClassName('validationerror')[2].innerHTML = 'Invalid Email!';
        }
        if (ispassword == false) {
            $('#newpassword').val("");
            document.getElementsByClassName('validationerror')[3].innerHTML = 'Note. Min 6 characters, at least 1 letter, 1 number and a special character.';

        }

        if (isfirstname == false) {
            $('#firstName').val("");
            document.getElementsByClassName('validationerror')[0].innerHTML = 'Please enter alphabets only!';
        }
        if (islastname == false) {
            $('#lastName').val("");
            document.getElementsByClassName('validationerror')[1].innerHTML = 'Please enter alphabets only!';
        }
    })



    $('#edu-submit').click(function () {
        // var name_validation = /^[a-z\sA-Z]+$/;

        var email_validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // var password_validation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        // var password_validation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

        //Minimum six characters, at least one letter and one number :
        var name_validation = /^[a-z\sA-Z]+$/;

        let edu_email = $('#edu-newemail').val();
        // let signup_password = $('#newpassword').val();
        let first_name = $('#edu-firstName').val();
        let last_name = $('#edu-lastName').val();


        let isemail = email_validation.test(edu_email);
        // let ispassword = password_validation.test(signup_password);
        let isfirstname = name_validation.test(first_name);
        let islastname = name_validation.test(last_name);
        if (isemail && ispassword && isfirstname && islastname) {
            console.log("all ok");
        }
        if (isemail == false) {
            $('#edu-newemail').val("");
            document.getElementsByClassName('validationerror')[2].innerHTML = 'Invalid Email!';
        }
        // if (ispassword == false) {
        //     $('#newpassword').val("");
        //     document.getElementsByClassName('validationerror')[3].innerHTML = 'Note. Min 6 characters, at least 1 letter, 1 number and a special character.';

        // }

        if (isfirstname == false) {
            $('#edu-firstName').val("");
            document.getElementsByClassName('validationerror')[0].innerHTML = 'Please enter alphabets only!';
        }
        if (islastname == false) {
            $('#edu-lastName').val("");
            document.getElementsByClassName('validationerror')[1].innerHTML = 'Please enter alphabets only!';
        }
    })

    // faq
    $('.query').click(function () {

        $(this).find('.arrow').toggleClass('rotate')

        let hasClass = $(this).parent('.card').siblings().find('.arrow').hasClass('rotate')
        if (hasClass) {
            $(this).parent('.card').siblings().find('.arrow').removeClass('rotate')
        }


        let hasClass2 = $(this).parents('.col-lg-6').siblings().find('.arrow').hasClass('rotate')

        if (hasClass2) {
            $(this).parents('.col-lg-6').siblings().find('.arrow').removeClass('rotate')
        }
    })


    // Filter Arrow
    $('.filter-title').click(function () {
        $(this).find('.arrow').toggleClass('rotate')
        let hasClass = $(this).parent().siblings().find('.arrow').hasClass('rotate')
        if (hasClass) {
            $(this).parent().siblings().find('.arrow').removeClass('rotate')
        }
    })


    // Filter JS
    $('.filter-btn').click(function () {
        if (window.innerWidth > 480)
            document.getElementById("mySidefilter").style.width = "270px";
        else
            document.getElementById("mySidefilter").style.width = "200px";
    })

    $('.closebtn').click(function () {
        document.getElementById("mySidefilter").style.width = "0";
    })


    $('.filter-title').click(function () {
        $(this).toggleClass('option-selected');
        $(this).parent().siblings().find('.filter-title').removeClass('option-selected');
    })
    // FILTER JS


    $('.bottom-band').click(function () {
        $(this).find('.heart-icon').toggleClass('in-cart')
    })



});