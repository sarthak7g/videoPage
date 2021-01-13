/*
    Filter logic on Courses Page
*/

let info_array = $('.courses-wrapper .avatar-info').get();
let filter_list = [];

for (i = 0; i < info_array.length; i++) {
    filter_list.push(true);
}

function resetFilter() {
    for (i = 0; i < info_array.length; i++) {
        filter_list[i] = true;
    }
    renderList();
}

function renderList() {
    for (i = 0; i < info_array.length; i++) {
        if (filter_list[i]) {
            $('.courses-wrapper .course-div').get(i).style.display = 'block';
        } else {
            $('.courses-wrapper .course-div').get(i).style.display = 'none';
        }
    }
}

function applyFilter() {
    let Foundational = $("#foundational_cb").prop('checked') == true,
        Intermediate = $("#intermediate_cb").prop('checked') == true,
        Advanced = $("#advanced_cb").prop('checked') == true;
    let max_price = $('#priceSlider').val();
    let max_duration = $('#durationSlider').val();
    console.log(max_price, max_duration);

    resetFilter();
    console.log($('.courses-wrapper .avatar-info').get());

    for (i = 0; i < info_array.length; i++) {
        ai_level = info_array[i].childNodes[1].childNodes[1].childNodes[1];
        price = info_array[i].childNodes[5].childNodes[5];
        duration = info_array[i].childNodes[5].childNodes[3].childNodes[3];

        if (ai_level !== undefined) {
            if (!Foundational) {
                if (ai_level.innerHTML == 'Foundational') {
                    filter_list[i] = false;
                }
            }
            if (!Intermediate) {
                if (ai_level.innerHTML == 'Intermediate') {
                    filter_list[i] = false;
                }
            }
            if (!Advanced) {
                if (ai_level.innerHTML == 'Advanced') {
                    filter_list[i] = false;
                }
            }
        }
        //for no LEVEL AI tags
        // else {

        //     filter_list[i] = false;
        // }

        if (price !== undefined) {
            let int_price = parseInt(price.innerText);
            if (int_price > max_price) {
                filter_list[i] = false;
            }
        }

        if (duration !== undefined) {
            let time = parseInt(duration.innerText.slice(0, -1));
            if (time > max_duration) {
                filter_list[i] = false;
            }
        }
    }
    renderList();
}
