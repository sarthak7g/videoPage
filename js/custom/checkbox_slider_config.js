$('#media-video-checkbox').prop('checked', true);
$('.sh-documents').hide();

$('#media-doc-checkbox').click(function () {
    if ($('#media-doc-checkbox').prop('checked')) {
        $('.sh-documents').show(200);
    } else {
        $('.sh-documents').hide(200);
    }
});

function selectHive() {
    $('#chapter-input').removeAttr('disabled');
}
function selectChapter() {
    $('#level-input').removeAttr('disabled');
}
function selectLevel() {

}

function configureCheckboxes() {
    $('.Rcontainer, .Rtoggle').hide();
    $(
        `#intro-greeting-list, 
    #body-language-list, 
    #facial-expression-list, 
    #voice-list, 
    #language-list,
    #user-input-list,
    #outro-greeting-list,
    #pdf-list,
    #docx-list,
    #ppt-list,
    #image-list`
    ).hide();

    $('input:checkbox').click(function () {
        if (
            $(this).prop('checked') === false ||
            $(this).prop('checked') == undefined
        ) {
            $(this).prop('checked') == true;
        } else {
            $(this).prop('checked') == false;
        }
    });

    /*
    INTRO CHECKBOXES
*/

    function showHideIntroGreeting() {
        if ($('#intro-greeting-checkbox').prop('checked')) {
            $('#intro-greeting-posture-checkbox').prop('checked', true);
            $('#intro-greeting-words-checkbox').prop('checked', true);

            $('#intro-greeting-list').show(200);

            $('#intro-greeting-words-container').show(200);
            $('#intro-greeting-words-toggle').show(200);
        } else {
            $('#intro-greeting-posture-checkbox').prop('checked', false);
            $('#intro-greeting-words-checkbox').prop('checked', false);

            $('#intro-greeting-list').hide(200);

            $(
                '#intro-greeting-words-container, #intro-greeting-words-toggle'
            ).hide(200);
        }
    }

    $('#intro-greeting-checkbox').click(function () {
        showHideIntroGreeting();
        if ($('#intro-greeting-posture-checkbox').prop('checked')) {
            $('#intro-postures-list').show(200);
        } else {
            $('#intro-postures-list').hide(200);
        }
    });

    $('#intro-greeting-words-checkbox').click(function () {
        if ($('#intro-greeting-words-checkbox').prop('checked')) {
            $('#intro-greeting-words-container').show(200);
            $('#intro-greeting-words-toggle').show(200);
        } else {
            $(
                '#intro-greeting-words-container, #intro-greeting-words-toggle'
            ).hide(200);
            if (!$('#intro-greeting-posture-checkbox').prop('checked')) {
                $('#intro-greeting-checkbox').prop('checked', false);
                showHideIntroGreeting();
            }
        }
    });

    $('#intro-greeting-posture-checkbox').click(function () {
        if (!$('#intro-greeting-words-checkbox').prop('checked')) {
            $('#intro-greeting-checkbox').prop('checked', false);
            showHideIntroGreeting();
        }
        if ($('#intro-greeting-posture-checkbox').prop('checked')) {
            $('#intro-postures-list').show(200);
        } else {
            $('#intro-postures-list').hide(200);
        }
    });

    $('#intro-greeting-checkbox').click(function () {
        if ($('#intro-greeting-checkbox').prop('checked')) {
            $('#weightage-greeting-slider').attr('disabled', false);
        } else {
            $('#weightage-greeting-slider').attr('disabled', true);
        }
    });
    $('#intro-gratitude-checkbox').click(function () {
        if ($('#intro-gratitude-checkbox').prop('checked')) {
            $('#weightage-graritude-slider').attr('disabled', false);
        } else {
            $('#weightage-graritude-slider').attr('disabled', true);
        }
    });
    $('#intro-custom-words-checkbox').click(function () {
        if ($('#intro-custom-words-checkbox').prop('checked')) {
            $('#weightage-custom-words-slider').attr('disabled', false);
        } else {
            $('#weightage-custom-words-slider').attr('disabled', true);
        }
    });
    $('#intro-custom-sentences-checkbox').click(function () {
        if ($('#intro-custom-sentences-checkbox').prop('checked')) {
            $('#weightage-custom-sentences-slider').attr('disabled', false);
        } else {
            $('#weightage-custom-sentences-slider').attr('disabled', true);
        }
    });
    /*
    MAIN CONTEXT
*/
    function showHideBodyLanguage() {
        if ($('#body-language-checkbox').prop('checked')) {
            $('#body-language-posture-checkbox').prop('checked', true);
            $('#body-language-gesture-checkbox').prop('checked', true);
            $('#body-language-movement-checkbox').prop('checked', true);

            $('#body-language-list').show(200);
        } else {
            $('#body-language-posture-checkbox').prop('checked', false);
            $('#body-language-gesture-checkbox').prop('checked', false);
            $('#body-language-movement-checkbox').prop('checked', false);

            $('#body-language-list').hide(200);
        }
    }

    $('#body-language-checkbox').click(showHideBodyLanguage);

    $('#body-language-list li input').each(function () {
        $(this).click(function () {
            if (
                !$('#body-language-posture-checkbox').prop('checked') &&
                !$('#body-language-gesture-checkbox').prop('checked') &&
                !$('#body-language-movement-checkbox').prop('checked')
            ) {
                $('#body-language-checkbox').prop('checked', false);
                $('#body-language-list').hide(200);
            }
        });
    });

    function showHideFacialExpression() {
        if ($('#facial-expression-checkbox').prop('checked')) {
            $('#facial-expression-list li input').each(function () {
                $(this).prop('checked', true);
            });

            $('#facial-expression-list').show(200);
        } else {
            $('#facial-expression-list li input').each(function () {
                $(this).prop('checked', false);
            });

            $('#facial-expression-list').hide(200);
        }
    }

    $('#facial-expression-checkbox').click(showHideFacialExpression);

    $('#facial-expression-list li input').each(function () {
        $(this).click(function () {
            if (
                !$('#facial-expression-neutral-checkbox').prop('checked') &&
                !$('#facial-expression-emotions-checkbox').prop('checked') &&
                !$('#facial-expression-laugh-checkbox').prop('checked') &&
                !$('#facial-expression-eyeblink-checkbox').prop('checked') &&
                !$('#facial-expression-eyecontact-checkbox').prop('checked') &&
                !$('#facial-expression-expressiveness-checkbox').prop('checked')
            ) {
                $('#facial-expression-checkbox').prop('checked', false);
                $('#facial-expression-list').hide(200);
            }
        });
    });

    //VOICE

    function showHideMainContextVoice() {
        if ($('#voice-checkbox').prop('checked')) {
            $('#voice-list li input').each(function () {
                $(this).prop('checked', true);
            });

            $('#voice-list').show(200);
        } else {
            $('#voice-list li input').each(function () {
                $(this).prop('checked', false);
            });

            $('#voice-list').hide(200);
        }
    }

    $('#voice-checkbox').click(showHideMainContextVoice);

    $('#voice-list li input').each(function () {
        $(this).click(function () {
            if (
                $('#voice-list li input')
                    .get()
                    .every((val, i, arr) => $(val).prop('checked') === false)
            ) {
                $('#voice-checkbox').prop('checked', false);
                $('#voice-list').hide(200);
            }
        });
    });

    //LANGUAGE

    function showHideMainContextLanguage() {
        if ($('#language-checkbox').prop('checked')) {
            $('#language-list li input').each(function () {
                $(this).prop('checked', true);
            });

            $('#language-list').show(200);
        } else {
            $('#language-list li input').each(function () {
                $(this).prop('checked', false);
            });

            $('#language-list').hide(200);
        }
    }

    $('#language-checkbox').click(showHideMainContextLanguage);

    $('#language-list li input').each(function () {
        $(this).click(function () {
            if (
                $('#language-list li input')
                    .get()
                    .every((val, i, arr) => $(val).prop('checked') === false)
            ) {
                $('#language-checkbox').prop('checked', false);
                $('#language-list').hide(200);
            }
        });
    });

    //USER INPUT

    function showHideUserInput() {
        if ($('#user-input-checkbox').prop('checked')) {
            $('#user-input-list li input').each(function () {
                $(this).prop('checked', true);
            });

            $('#user-input-list').show(200);
        } else {
            $('#user-input-list li input').each(function () {
                $(this).prop('checked', false);
            });

            $('#user-input-list').hide(200);
        }
    }

    $('#user-input-checkbox').click(showHideUserInput);

    $('#user-input-list li input').each(function () {
        $(this).click(function () {
            if (
                $('#user-input-list li input')
                    .get()
                    .every((val, i, arr) => $(val).prop('checked') === false)
            ) {
                $('#user-input-checkbox').prop('checked', false);
                $('#user-input-list').hide(200);
            }
        });
    });

    $('#body-language-checkbox').click(function () {
        if ($('#body-language-checkbox').prop('checked')) {
            $('#weightage-body-language-slider').attr('disabled', false);
        } else {
            $('#weightage-body-language-slider').attr('disabled', true);
        }
    });
    $('#facial-expression-checkbox').click(function () {
        if ($('#facial-expression-checkbox').prop('checked')) {
            $('#weightage-facial-expression-slider').attr('disabled', false);
        } else {
            $('#weightage-facial-expression-slider').attr('disabled', true);
        }
    });
    $('#voice-checkbox').click(function () {
        if ($('#voice-checkbox').prop('checked')) {
            $('#weightage-voice-slider').attr('disabled', false);
        } else {
            $('#weightage-voice-slider').attr('disabled', true);
        }
    });
    $('#language-checkbox').click(function () {
        if ($('#language-checkbox').prop('checked')) {
            $('#weightage-language-slider').attr('disabled', false);
        } else {
            $('#weightage-language-slider').attr('disabled', true);
        }
    });
    $('#user-input-checkbox').click(function () {
        if ($('#user-input-checkbox').prop('checked')) {
            $('#weightage-user-input-slider').attr('disabled', false);
        } else {
            $('#weightage-user-input-slider').attr('disabled', true);
        }
    });

    /*
    ENVIRONMENT
*/
    $('#environment-clothing-checkbox').click(function () {
        if ($('#environment-clothing-checkbox').prop('checked')) {
            $('#weightage-clothing-slider').attr('disabled', false);
        } else {
            $('#weightage-outro-graritude-slider').attr('disabled', true);
        }
    });
    $('#environment-objectdetection-checkbox').click(function () {
        if ($('#environment-objectdetection-checkbox').prop('checked')) {
            $('#weightage-object-detection-slider').attr('disabled', false);
        } else {
            $('#weightage-object-detection-slider').attr('disabled', true);
        }
    });

    /* 
    OUTRO CHECKBOXES 
*/

    function showHideOutroGreeting() {
        if ($('#outro-greeting-checkbox').prop('checked')) {
            $('#outro-greeting-posture-checkbox').prop('checked', true);
            $('#outro-greeting-words-checkbox').prop('checked', true);

            $('#outro-greeting-list').show(200);

            $('#outro-greeting-words-container').show(200);
            $('#outro-greeting-words-toggle').show(200);
        } else {
            $('#outro-greeting-posture-checkbox').prop('checked', false);
            $('#outro-greeting-words-checkbox').prop('checked', false);

            $('#outro-greeting-list').hide(200);

            $(
                '#outro-greeting-words-container, #outro-greeting-words-toggle'
            ).hide(200);
        }
    }

    $('#outro-greeting-checkbox').click(function () {
        showHideOutroGreeting();
    });

    $('#outro-greeting-words-checkbox').click(function () {
        if ($('#outro-greeting-words-checkbox').prop('checked')) {
            $('#outro-greeting-words-container').show(200);
            $('#outro-greeting-words-toggle').show(200);
        } else {
            $(
                '#outro-greeting-words-container, #outro-greeting-words-toggle'
            ).hide(200);
            if (!$('#outro-greeting-posture-checkbox').prop('checked')) {
                $('#outro-greeting-checkbox').prop('checked', false);
                showHideOutroGreeting();
            }
        }
    });

    $('#outro-greeting-posture-checkbox').click(function () {
        if (!$('#outro-greeting-words-checkbox').prop('checked')) {
            $('#outro-greeting-checkbox').prop('checked', false);
            showHideOutroGreeting();
        }
    });

    $('#outro-greeting-checkbox').click(function () {
        if ($('#outro-greeting-checkbox').prop('checked')) {
            $('#weightage-outro-greeting-slider').attr('disabled', false);
        } else {
            $('#weightage-outro-greeting-slider').attr('disabled', true);
        }
    });
    $('#outro-gratitude-checkbox').click(function () {
        if ($('#outro-gratitude-checkbox').prop('checked')) {
            $('#weightage-outro-graritude-slider').attr('disabled', false);
        } else {
            $('#weightage-outro-graritude-slider').attr('disabled', true);
        }
    });
    $('#outro-custom-words-checkbox').click(function () {
        if ($('#outro-custom-words-checkbox').prop('checked')) {
            $('#weightage-outro-custom-words-slider').attr('disabled', false);
        } else {
            $('#weightage-outro-custom-words-slider').attr('disabled', true);
        }
    });
    $('#outro-custom-sentences-checkbox').click(function () {
        if ($('#outro-custom-sentences-checkbox').prop('checked')) {
            $('#weightage-outro-custom-sentences-slider').attr(
                'disabled',
                false
            );
        } else {
            $('#weightage-outro-custom-sentences-slider').attr(
                'disabled',
                true
            );
        }
    });

    /*
    DOCUMENTS
*/

    // PDF
    function showHidePDF() {
        if ($('#pdf-checkbox').prop('checked')) {
            $('#pdf-custom-words-checkbox').prop('checked', true);
            $('#pdf-custom-sentences-checkbox').prop('checked', true);

            $('#pdf-list').show(200);

            $('#pdf-custom-words-container').show(200);
            $('#pdf-custom-words-toggle').show(200);
            $('#pdf-custom-sentences-container').show(200);
            $('#pdf-custom-sentences-toggle').show(200);
        } else {
            $('#pdf-custom-words-checkbox').prop('checked', false);
            $('#pdf-custom-sentences-checkbox').prop('checked', false);

            $('#pdf-list').hide(200);

            $('#pdf-custom-words-container, #pdf-custom-words-toggle').hide(
                200
            );
            $(
                '#pdf-custom-sentences-container, #pdf-custom-sentences-toggle'
            ).hide(200);
        }
    }

    $('#pdf-checkbox').click(function () {
        showHidePDF();
    });

    $('#pdf-list li input').each(function () {
        $(this).click(function () {
            if (
                $('#pdf-list li input')
                    .get()
                    .every((val, i, arr) => $(val).prop('checked') === false)
            ) {
                $('#pdf-checkbox').prop('checked', false);
                $('#pdf-list').hide(200);
            }
        });
    });

    //DOCX

    function showHideDOCX() {
        if ($('#docx-checkbox').prop('checked')) {
            $('#docx-custom-words-checkbox').prop('checked', true);
            $('#docx-custom-sentences-checkbox').prop('checked', true);

            $('#docx-list').show(200);

            $('#docx-custom-words-container').show(200);
            $('#docx-custom-words-toggle').show(200);
            $('#docx-custom-sentences-container').show(200);
            $('#docx-custom-sentences-toggle').show(200);
        } else {
            $('#docx-custom-words-checkbox').prop('checked', false);
            $('#docx-custom-sentences-checkbox').prop('checked', false);

            $('#docx-list').hide(200);

            $('#docx-custom-words-container, #docx-custom-words-toggle').hide(
                200
            );
            $(
                '#docx-custom-sentences-container, #docx-custom-sentences-toggle'
            ).hide(200);
        }
    }

    $('#docx-checkbox').click(function () {
        showHideDOCX();
    });

    $('#docx-list li input').each(function () {
        $(this).click(function () {
            if (
                $('#docx-list li input')
                    .get()
                    .every((val, i, arr) => $(val).prop('checked') === false)
            ) {
                $('#docx-checkbox').prop('checked', false);
                $('#docx-list').hide(200);
            }
        });
    });

    //PPT

    function showHidePPT() {
        if ($('#ppt-checkbox').prop('checked')) {
            $('#ppt-custom-words-checkbox').prop('checked', true);
            $('#ppt-custom-sentences-checkbox').prop('checked', true);

            $('#ppt-list').show(200);

            $('#ppt-custom-words-container').show(200);
            $('#ppt-custom-words-toggle').show(200);
            $('#ppt-custom-sentences-container').show(200);
            $('#ppt-custom-sentences-toggle').show(200);
        } else {
            $('#ppt-custom-words-checkbox').prop('checked', false);
            $('#ppt-custom-sentences-checkbox').prop('checked', false);

            $('#ppt-list').hide(200);

            $('#ppt-custom-words-container, #ppt-custom-words-toggle').hide(
                200
            );
            $(
                '#ppt-custom-sentences-container, #ppt-custom-sentences-toggle'
            ).hide(200);
        }
    }

    $('#ppt-checkbox').click(function () {
        showHidePPT();
    });

    $('#ppt-list li input').each(function () {
        $(this).click(function () {
            if (
                $('#ppt-list li input')
                    .get()
                    .every((val, i, arr) => $(val).prop('checked') === false)
            ) {
                $('#ppt-checkbox').prop('checked', false);
                $('#ppt-list').hide(200);
            }
        });
    });

    //Image

    function showHideImage() {
        if ($('#image-checkbox').prop('checked')) {
            $('#image-object-detection-checkbox').prop('checked', true);
            $('#image-words-checkbox').prop('checked', true);

            $('#image-list').show(200);

            $('#image-object-detection-container').show(200);
            $('#image-object-detection-toggle').show(200);
            $('#image-words-container').show(200);
            $('#image-words-toggle').show(200);
        } else {
            $('#image-object-detection-checkbox').prop('checked', false);
            $('#image-words-checkbox').prop('checked', false);

            $('#image-list').hide(200);

            $(
                '#image-object-detection-container, #image-object-detection-toggle'
            ).hide(200);
            $('#image-words-container, #image-words-toggle').hide(200);
        }
    }

    $('#image-checkbox').click(function () {
        showHideImage();
    });

    $('#image-list li input').each(function () {
        $(this).click(function () {
            if (
                $('#image-list li input')
                    .get()
                    .every((val, i, arr) => $(val).prop('checked') === false)
            ) {
                $('#image-checkbox').prop('checked', false);
                $('#image-list').hide(200);
            }
        });
    });
}
configureCheckboxes();

/*
    WEIGHTAGE
*/

// INTRO

const slider_list = [
    'weightage-greeting',
    'weightage-graritude',
    'weightage-custom-words',
    'weightage-custom-sentences',
    'weightage-body-language',
    'weightage-facial-expression',
    'weightage-voice',
    'weightage-language',
    'weightage-user-input',
    'weightage-clothing',
    'weightage-object-detection',
    'weightage-outro-greeting',
    'weightage-outro-graritude',
    'weightage-outro-custom-words',
    'weightage-outro-custom-sentences',
];
const list_names = [
    'Greeting',
    'Gratitude',
    'Custom Words',
    'Custom Sentences',
    'Body Language',
    'Facial Expression',
    'Voice',
    'Language',
    'User Input',
    'Clothing',
    'Object Detection',
    'Greeting',
    'Gratitude',
    'Custom Words',
    'Custom Sentences',
];

for (i = 0; i < slider_list.length; i++) {
    $(`#${slider_list[i]}`).html(`
    <label style="display: block;">
        <div>
            ${list_names[i]}
        </div>
        <div
            class="d-flex justify-content-center"
            style="
                width: 90%;
                margin: 1rem;
            "
        >
            <input
                id="${slider_list[i]}-slider"
                class="border-0 custom-range"
                type="range"
                min="0"
                max="100"
                style="
                    width: 80%; padding-top: 7px;
                "
                data-slider-id="ex1Slider"
            />
            <span
                class="font-weight-bold ml-2 mt-1 valueSpan" id="${slider_list[i]}-value"
            ></span>
        </div>
    </label>
`);

    const $valueSpan = $(`#${slider_list[i]}-value`);
    const $value = $(`#${slider_list[i]}-slider`);
    $(`#${slider_list[i]}-slider`).attr('disabled', true);
    $valueSpan.html($value.val());
    $value.on('input change', () => {
        $valueSpan.html($value.val());
    });
}

const parent_slider_list = [
    'weightage-intro',
    'weightage-main-context',
    'weightage-environment',
    'weightage-outro',
];

for (let j = 0; j < parent_slider_list.length; j++) {
    $(`#${parent_slider_list[j]}-list`).hide();
    document.addEventListener('DOMContentLoaded', function () {
        const icon = this.querySelectorAll(`#${parent_slider_list[j]}-plus`);
        const toggleActive = function () {
            this.classList.toggle('is-active');
            if (!$(this).hasClass('is-active')) {
                $(`#${parent_slider_list[j]}-list`).hide(200);
            } else {
                $(`#${parent_slider_list[j]}-list`).show(200);
            }
        };

        for (let i = 0; i < icon.length; i++) {
            icon[i].addEventListener('click', toggleActive);
        }
    });

    const $valueSpan = $(`#${parent_slider_list[j]}-value`);
    const $value = $(`#${parent_slider_list[j]}-slider`);
    $valueSpan.html($value.val());
    $value.on('input change', () => {
        $valueSpan.html($value.val());
        drawPieChart();
    });
}
function drawPieChart() {
    let outro_slider = parseInt($('#weightage-outro-slider').val()),
        environment_slider = parseInt($('#weightage-environment-slider').val()),
        main_context_slider = parseInt(
            $('#weightage-main-context-slider').val()
        ),
        intro_slider = parseInt($('#weightage-intro-slider').val());

    let intro_value =
        (intro_slider * 100) /
        (intro_slider +
            main_context_slider +
            environment_slider +
            outro_slider);
    let mc_value =
        (main_context_slider * 100) /
        (intro_slider +
            main_context_slider +
            environment_slider +
            outro_slider);
    let env_value =
        (environment_slider * 100) /
        (intro_slider +
            main_context_slider +
            environment_slider +
            outro_slider);
    let outro_value =
        (outro_slider * 100) /
        (intro_slider +
            main_context_slider +
            environment_slider +
            outro_slider);
    $('#intro_slice').text(Math.round(intro_value));
    $('#mc_slice').text(Math.round(mc_value));
    $('#env_slice').text(Math.round(env_value));
    $('#outro_slice').text(Math.round(outro_value));
    if (intro_value > 0 || mc_value > 0 || env_value > 0 || outro_value > 0) {
        createPie('.pieID.Rlegend', '.pieID.pie');
    }
}
