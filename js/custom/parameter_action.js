$('#parameter-submit').click(function () {
    let intro_slider = parseInt($('#weightage-intro-slider').val()),
        intro_greeting_slider = $('#weightage-greeting-slider').is('[disabled]')
            ? 0
            : parseInt($('#weightage-greeting-slider').val()),
        intro_gratitude_slider = $('#weightage-graritude-slider').is(
            '[disabled]'
        )
            ? 0
            : parseInt($('#weightage-graritude-slider').val()),
        intro_custom_words_slider = $('#weightage-custom-words-slider').is(
            '[disabled]'
        )
            ? 0
            : parseInt($('#weightage-custom-words-slider').val()),
        intro_custom_sentences_slider = $(
            '#weightage-custom-sentences-slider'
        ).is('[disabled]')
            ? 0
            : parseInt($('#weightage-custom-sentences-slider').val());

    let main_context_slider = parseInt(
            $('#weightage-main-context-slider').val()
        ),
        body_language_slider = $('#weightage-body-language-slider').is(
            '[disabled]'
        )
            ? 0
            : parseInt($('#weightage-body-language-slider').val()),
        facial_expression_slider = $('#weightage-facial-expression-slider').is(
            '[disabled]'
        )
            ? 0
            : parseInt($('#weightage-facial-expression-slider').val()),
        voice_slider = $('#weightage-voice-slider').is('[disabled]')
            ? 0
            : parseInt($('#weightage-voice-slider').val()),
        language_slider = $('#weightage-language-slider').is('[disabled]')
            ? 0
            : parseInt($('#weightage-language-slider').val());

    let environment_slider = parseInt($('#weightage-environment-slider').val()),
        clothing_slider = $('#weightage-clothing-slider').is('[disabled]')
            ? 0
            : parseInt($('#weightage-clothing-slider').val()),
        object_detection_slider = $('#weightage-object-detection-slider').is(
            '[disabled]'
        )
            ? 0
            : parseInt($('#weightage-object-detection-slider').val());

    let outro_slider = parseInt($('#weightage-outro-slider').val()),
        outro_greeting_slider = $('#weightage-outro-greeting-slider').is(
            '[disabled]'
        )
            ? 0
            : parseInt($('#weightage-outro-greeting-slider').val()),
        outro_gratitude_slider = $('#weightage-outro-graritude-slider').is(
            '[disabled]'
        )
            ? 0
            : parseInt($('#weightage-outro-graritude-slider').val()),
        outro_custom_words_slider = $(
            '#weightage-outro-custom-words-slider'
        ).is('[disabled]')
            ? 0
            : parseInt($('#weightage-outro-custom-words-slider').val()),
        outro_custom_sentences_slider = $(
            '#weightage-outro-custom-sentences-slider'
        ).is('[disabled]')
            ? 0
            : parseInt($('#weightage-outro-custom-sentences-slider').val());

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

    let parameters = {
        level: {
            level: 'beginner',
        },
        main_section: {
            intros:
                $('#intro-greeting-checkbox').prop('checked') ||
                $('#intro-gratitude-checkbox').prop('checked') ||
                $('#intro-custom-words-checkbox').prop('checked') ||
                $('#intro-custom-sentences-checkbox').prop('checked'),
            outros:
                $('#outro-greeting-checkbox').prop('checked') ||
                $('#outro-gratitude-checkbox').prop('checked') ||
                $('#outro-custom-words-checkbox').prop('checked') ||
                $('#outro-custom-sentences-checkbox').prop('checked'),
            main_context:
                $('#body-language-checkbox').prop('checked') ||
                $('#facial-expression-checkbox').prop('checked') ||
                $('#voice-checkbox').prop('checked') ||
                $('#language-checkbox').prop('checked') ||
                $('#user-input-checkbox').prop('checked'),
            environment:
                $('#environment-stagebackground-checkbox').prop('checked') ||
                $('#environment-clothing-checkbox').prop('checked') ||
                $('#environment-objectdetection-checkbox').prop('checked') ||
                $('#environment-maincontent-checkbox').prop('checked') ||
                $('#environment-topic-detection-checkbox').prop('checked'),
        },
        intros: {
            greeting: $('#intro-greeting-checkbox').prop('checked'),
            greeting_list: custom_input_list[0].obj_list,
            greeting_posture: $('#intro-greeting-posture-checkbox').prop(
                'checked'
            ),
            gratitude: $('#intro-gratitude-checkbox').prop('checked'),
            gratitude_list: custom_input_list[1].obj_list,
            custom_word: $('#intro-custom-words-checkbox').prop('checked'),
            customword_list: custom_input_list[2].obj_list,
            customsentence: $('#intro-custom-sentences-checkbox').prop(
                'checked'
            ),
            custom_sentence_list: custom_input_list[3].obj_list,
        },
        maincontext: {
            bodylanguage: $('#body-language-checkbox').prop('checked'),
            skel_attr: {
                Posture: $('#body-language-posture-checkbox').prop('checked'),
                Gesture: $('#body-language-gesture-checkbox').prop('checked'),
                Moves: $('#body-language-movement-checkbox').prop('checked'),
            },
            facialexpression: $('#facial-expression-checkbox').prop('checked'),
            face_attr: {
                Neutral: $('#facial-expression-neutral-checkbox').prop(
                    'checked'
                ),
                Emotion: $('#facial-expression-emotions-checkbox').prop(
                    'checked'
                ),
                Laugh: $('#facial-expression-laugh-checkbox').prop('checked'),
                Eyeblink: $('#facial-expression-eyeblink-checkbox').prop(
                    'checked'
                ),
                Eyecontact: $('#facial-expression-eyecontact-checkbox').prop(
                    'checked'
                ),
                Expressiveness: $(
                    '#facial-expression-expressiveness-checkbox'
                ).prop('checked'),
            },
            voice: $('#voice-checkbox').prop('checked'),
            voice_attr: {
                Rate_of_speech: $('#voice-pace-checkbox').prop('checked'),
                Number_of_pauses: $('#voice-pause-checkbox').prop('checked'),
                Energy_level: $('#voice-energylevel-checkbox').prop('checked'),
                Pronunciation_posterior: $('#voice-quality-checkbox').prop(
                    'checked'
                ),
                Emotionanalysis: $('#voice-emotionalanalysis-checkbox').prop(
                    'checked'
                ),
            },
            word: $('#language-checkbox').prop('checked'),
            words_attr: {
                Grammer: $('#language-grammer-checkbox').prop('checked'),
                Filler: $('#language-filler-checkbox').prop('checked'),
                Sentiment: $('#language-sentiment-checkbox').prop('checked'),
                Foulwords: $('#language-foulword-checkbox').prop('checked'),
            },
            user_input: $('#user-input-checkbox').prop('checked'),
            user_input_list: [],
        },
        environment: {
            stage_background: $('#environment-stagebackground-checkbox').prop(
                'checked'
            ),
            clothing: $('#environment-clothing-checkbox').prop('checked'),
            object_detection: $('#environment-objectdetection-checkbox').prop(
                'checked'
            ),
            object_detection_list: [],
            main_content: $('#environment-maincontent-checkbox').prop(
                'checked'
            ),
            topic_detection: $('#environment-topic-detection-checkbox').prop(
                'checked'
            ),
        },
        outros: {
            greeting_posture: $('#outro-greeting-checkbox').prop('checked'),
            gratitude: $('#outro-gratitude-checkbox').prop('checked'),
            gratitude_list: custom_input_list[5].obj_list,
            custom_word: $('#outro-custom-words-checkbox').prop('checked'),
            customword_list: custom_input_list[6].obj_list,
            custom_sentence: $('#outro-custom-sentences-checkbox').prop(
                'checked'
            ),
            customsentence_list: custom_input_list[7].obj_list,
        },
        weightage: {
            intros: intro_value,
            main_context: mc_value,
            environment: env_value,
            outros: outro_value,
        },
        main_context_weighatge: {
            bodylanguage:
                (body_language_slider * mc_value) /
                (body_language_slider +
                    voice_slider +
                    facial_expression_slider +
                    language_slider),
            voice:
                (voice_slider * mc_value) /
                (body_language_slider +
                    voice_slider +
                    facial_expression_slider +
                    language_slider),
            facialexpression:
                (facial_expression_slider * mc_value) /
                (body_language_slider +
                    voice_slider +
                    facial_expression_slider +
                    language_slider),
            words:
                (language_slider * mc_value) /
                (body_language_slider +
                    voice_slider +
                    facial_expression_slider +
                    language_slider),
        },
        intro: {
            greeting:
                (intro_greeting_slider * intro_value) /
                (intro_greeting_slider +
                    intro_gratitude_slider +
                    intro_custom_words_slider +
                    intro_custom_sentences_slider),
            gratitude:
                (intro_gratitude_slider * intro_value) /
                (intro_greeting_slider +
                    intro_gratitude_slider +
                    intro_custom_words_slider +
                    intro_custom_sentences_slider),
            word:
                (intro_custom_words_slider * intro_value) /
                (intro_greeting_slider +
                    intro_gratitude_slider +
                    intro_custom_words_slider +
                    intro_custom_sentences_slider),
            sentence:
                (intro_custom_sentences_slider * intro_value) /
                (intro_greeting_slider +
                    intro_gratitude_slider +
                    intro_custom_words_slider +
                    intro_custom_sentences_slider),
        },
        outro: {
            greeting:
                (outro_greeting_slider * outro_value) /
                (outro_greeting_slider +
                    outro_gratitude_slider +
                    outro_custom_words_slider +
                    outro_custom_sentences_slider),
            gratitude:
                (outro_gratitude_slider * outro_value) /
                (outro_greeting_slider +
                    intro_gratitude_slider +
                    intro_custom_words_slider +
                    intro_custom_sentences_slider),
            word:
                (outro_custom_words_slider * outro_value) /
                (outro_greeting_slider +
                    outro_gratitude_slider +
                    outro_custom_words_slider +
                    outro_custom_sentences_slider),
            sentence:
                (outro_custom_sentences_slider * outro_value) /
                (outro_greeting_slider +
                    outro_gratitude_slider +
                    outro_custom_words_slider +
                    outro_custom_sentences_slider),
        },
        environment: {
            clothing:
                (clothing_slider * env_value) /
                (clothing_slider + object_detection_slider),
            object_detection:
                (object_detection_slider * env_value) /
                (clothing_slider + object_detection_slider),
        },
    };

    let input_list_length = $('#user-input-list li').length;
    $('#user-input-list li').each(function (index, list_item) {
        if ($(list_item).find('input').prop('checked')) {
            parameters.maincontext.user_input_list.push({
                query_type: custom_input_list[index + 16].query_type,
                sequence: custom_input_list[index + 16].sequence,
                chunk: custom_input_list[index + 16].chunk,
                user_corpus: custom_input_list[index + 16].obj_list,
            });
        }
    });

     json_data = {
        aiuuid: $("#aiuuid").val(),
        parameter: JSON.stringify(parameters),
        hivedtl:
            `{"CourseId":{"CourseId":"${$("#hive-input").val()}"},"ChapterId":{"ChapterId":"${$("#chapter-input").val()}"},"EventId":{"EventId":"0"}}`,
        b2bdomain: 'B2C',
        email: $("#email").val(),
        createddate: '2020-08-29T06:05:38.733Z',
        updateddate: '2020-08-29T06:05:38.733Z',
    };
    var settings = {
        url: 'https://kong.princetonhive.com/api/CompParm/CompParm',
        method: 'POST',
        timeout: 0,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(json_data),
    };

    $.ajax(settings).done(function (response) {
        alert(response);
        console.log(parameters);
    });
    console.log(
        parameters.weightage,
        parameters.main_context_weighatge,
        parameters.environment,
        parameters.intro,
        parameters.outro
    );
});
