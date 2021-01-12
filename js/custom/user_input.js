let is_setting_saved = false;
$('#user-add-input-modal').on('hidden.bs.modal', function () {
    if (!is_setting_saved) {
        console.log('popped');
        user_input_list.pop();
        custom_input_list.pop();
    } else {
        is_setting_saved = false;
        user_input_list[user_input_list.length - 1].query_type = $(
            '#add-query-type-input'
        ).val();
        user_input_list[user_input_list.length - 1].sequence = $(
            '#add-user-input-sequence-checkbox'
        ).prop('checked');
        user_input_list[user_input_list.length - 1].time_slot = $(
            '#add-time-slot-input'
        ).val();
        user_input_list[user_input_list.length - 1].obj_list =
            custom_input_list[custom_input_list.length - 1].obj_list;
        // appendUserInputList(user_input_list.length - 1);
        refreshList();
    }
});

$('#add-save-user-input-btn').click(function () {
    is_setting_saved = true;
    $('#user-add-input-modal').modal('toggle');
});

user_input_list = [
    {
        query_type: 1,
        sequence: false,
        time_slot: 1,
        obj_list: ['hello', 'world'],
    },
    {
        query_type: 2,
        sequence: true,
        time_slot: 3,
        obj_list: ['dinner', 'lunch'],
    },
];

// function to append user input list
function appendUserInputList(index) {
    $('#user-input-list').append(`
    <li>
        <div class="checkbox-div">
            <input
                type="checkbox"
                id="user-input-setting-${index}-checkbox"
            />
            <span
                class="checkmark"
                id="user-input-setting-${index}-checkmark"
            ></span>
        </div>
        <label>
            <a
                data-toggle="modal"
                data-target="#user-input-modal"
                id="user-input-a-tag-${index}"
                style="
                    font-size: 18px;
                    color: #4a164b;
                    letter-spacing: 2px;
                    font-family: 'AvantageSmall';
                "
                class="ui-a-tag"
            >
                Setting ${index + 1}
            </a>
        </label>
    </li>`);
    configureCheckboxes();
}

function renderModalContent(index) {
    $('#ui-modal-input').html(`Setting ${index + 1}`);
    $('#query-type-input').val(user_input_list[index].query_type);
    $('#user-input-sequence-checkbox').prop(
        'checked',
        user_input_list[index].sequence
    );
    $('#time-slot-input').val(user_input_list[index].time_slot);

    $('#modal-ws-input-ul').html(`
        <li
            id="modal-ws-input-${index}"
            style="
                border-bottom: none;
            "
        ></li>
        `);
    enableCustomInput();
}

function renderAddModalContent(index) {
    $('#ui-add-modal-input').html(`Setting ${index + 1}`);
    $('#add-query-type-input').val(user_input_list[index].query_type);
    $('#add-user-input-sequence-checkbox').prop(
        'checked',
        user_input_list[index].sequence
    );
    $('#add-time-slot-input').val(user_input_list[index].time_slot);

    $('#add-modal-ws-input-ul').html(`
        <li
            id="modal-ws-input-${index}"
            style="
                border-bottom: none;
            "
        ></li>
        `);
    enableCustomInput();
}

/*
    Add User Input
*/
$('#add_setting_icon').click(function () {
    edit_enabled = false;
    index = user_input_list.length;
    custom_input_list.push({
        li_id: `modal-ws-input-${index}`,
        label_text: `Words`,
        img_src: false,
        obj_list: [],
        need_space: false,
        chunk: 1,
        sequence: false,
        query_type: 'word',
    });
    user_input_list.push({
        query_type: 1,
        sequence: true,
        time_slot: 1,
        obj_list: [],
    });
    renderAddModalContent(index);
    configureCheckboxes();
    $(
        `#modal-ws-input-${index}-toggle, #modal-ws-input-${index}-container`
    ).show();
    $(`#modal-ws-input-${index}-checkbox`).parent().hide();
    $(`#modal-ws-input-${index}-ul`).css('padding-left', '30px');
});

/*
    Edit User Input
*/
function refreshList() {
    $('#user-input-list').empty();
    for (i = 0; i < user_input_list.length; i++) {
        appendUserInputList(i);

        $(`user-input-a-tag-${i}`).hover(function () {
            $(this).css('color', '#fff !important');
        });

        let index = i;

        custom_input_list.push({
            li_id: `modal-ws-input-${i}`,
            label_text:
                user_input_list[index].query_type === 1 ? 'Words' : 'Sentences',
            img_src: false,
            obj_list: user_input_list[index].obj_list,
            need_space: user_input_list[index].query_type === 1 ? false : true,
            chunk: user_input_list[index].time_slot,
            sequence: user_input_list[index].sequence,
            query_type:
                user_input_list[index].query_type === 1 ? 'word' : 'sentence',
        });

        $(`#user-input-a-tag-${index}`).click(function () {
            renderModalContent(index);
            configureCheckboxes();
            $(
                `#modal-ws-input-${index}-toggle, #modal-ws-input-${index}-container`
            ).show();
            $(`#modal-ws-input-${index}-checkbox`).parent().hide();
            $(`#modal-ws-input-${index}-ul`).css('padding-left', '30px');
        });
    }
}

refreshList();
