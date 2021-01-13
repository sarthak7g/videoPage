const addCustomInput = (li_id, label_text, img_src) => {
    $(`#${li_id}`).html(`<div class="checkbox-div">
    <input
        type="checkbox"
        id="${li_id}-checkbox"
    />
    <span
        class="checkmark"
    ></span>
</div>
<div style="width: 100%">
    <label>
        <img
            src="${img_src ? img_src : ''}"
            class="icon"
            style="display: ${img_src ? 'block' : 'none'}"
        />
        ${label_text}
        <div
            class="Rtoggle"
            id="${li_id}-toggle"
        >
            <button
                type="button"
                class="RtoggleAddTag Ractive"
                id="${li_id}-toggle-add-tag"
            >
                Add
            </button>
            <button
                type="button"
                class="RtoggleSearch"
                id="${li_id}-toggle-search"
            >
                Search
            </button>
        </div>
    </label>
    <div
        class="Rcontainer"
        id="${li_id}-container"
    >
        <div
            class="RsearchAddContainer"
        >
            <div
                class="RaddContainer Rshow"
                id="${li_id}-add-container"
            >
                <input
                    id="${li_id}-add-tag"
                    class="Radd_input"
                    type="text"
                    placeholder="press , to queue a tag 'ENTER' to add"
                    autocomplete="off"
                />
            </div>
            <div
                class="RsearchContainer"
                id="${li_id}-search-container"
            >
                <input
                    id="${li_id}-search"
                    class="Rsearch_input"
                    type="text"
                    placeholder="search a tag....."
                    autocomplete="off"
                />
            </div>
        </div>

        <ul
            id="${li_id}-ul"
            class="Rul"
        ></ul>
    </div>
</div>`);
};

custom_input_list = [
    {
        li_id: 'intro-greeting-words',
        label_text: 'Words',
        img_src: 'images/parameter-icons-25.png',
        obj_list: ['javascript', 'apple', 'games', 'out'],
        need_space: false,
    },
    {
        li_id: 'intro-gratitude',
        label_text: 'GRATITUDE',
        img_src: 'images/parameter-icons-24.png',
        obj_list: [
            'javascript',
            'apple',
            'games',
            'out',
            'push',
            'something',
            'ultrasound',
            'you',
        ],
        need_space: false,
    },
    {
        li_id: 'intro-custom-words',
        label_text: 'CUSTOM WORDS',
        img_src: 'images/CUSTOM_WORDS.png',
        obj_list: [],
        need_space: false,
    },
    {
        li_id: 'intro-custom-sentences',
        label_text: 'CUSTOM SENTENCES',
        img_src: 'images/CUSTOM_SENTENCES.png',
        obj_list: [],
        need_space: true,
    },
    // {
    //     li_id: 'outro-greeting-words',
    //     label_text: 'Words',
    //     img_src: 'images/parameter-icons-25.png',
    //     obj_list: ['javascript', 'apple', 'games', 'out'],
    //     need_space: false
    // },
    {
        li_id: 'outro-gratitude',
        label_text: 'GRATITUDE',
        img_src: 'images/parameter-icons-24.png',
        obj_list: [],
        need_space: false,
    },
    {
        li_id: 'outro-custom-words',
        label_text: 'CUSTOM WORDS',
        img_src: 'images/CUSTOM_WORDS.png',
        obj_list: [],
        need_space: false,
    },

    {
        li_id: 'outro-custom-sentences',
        label_text: 'CUSTOM SENTENCES',
        img_src: 'images/CUSTOM_SENTENCES.png',
        obj_list: [],
        need_space: true,
    },
    {
        li_id: 'environment-objectdetection',
        label_text: 'OBJECT DETECTION',
        img_src: 'images/OBJECT_DETECTION.png',
        obj_list: [],
        need_space: false,
    },
    {
        li_id: 'pdf-custom-words',
        label_text: 'Custom Words',
        img_src: 'images/CUSTOM_WORDS.png',
        obj_list: [],
        need_space: false,
    },
    {
        li_id: 'pdf-custom-sentences',
        label_text: 'Custom Sentences',
        img_src: 'images/CUSTOM_SENTENCES.png',
        obj_list: [],
        need_space: true,
    },
    {
        li_id: 'docx-custom-words',
        label_text: 'Custom Words',
        img_src: 'images/CUSTOM_WORDS.png',
        obj_list: [],
        need_space: false,
    },
    {
        li_id: 'docx-custom-sentences',
        label_text: 'Custom Sentences',
        img_src: 'images/CUSTOM_SENTENCES.png',
        obj_list: [],
        need_space: true,
    },
    {
        li_id: 'ppt-custom-words',
        label_text: 'Custom Words',
        img_src: 'images/CUSTOM_WORDS.png',
        obj_list: [],
        need_space: false,
    },
    {
        li_id: 'ppt-custom-sentences',
        label_text: 'Custom Sentences',
        img_src: 'images/CUSTOM_SENTENCES.png',
        obj_list: [],
        need_space: true,
    },
    {
        li_id: 'image-object-detection',
        label_text: 'Object Detection',
        img_src: 'images/OBJECT_DETECTION.png',
        obj_list: [],
        need_space: false,
    },
    {
        li_id: 'image-words',
        label_text: 'Words',
        img_src: 'images/parameter-icons-25.png',
        obj_list: [],
        need_space: false,
    },
];

const enableCustomInput = () => {
    for (i = 0; i < custom_input_list.length; i++) {
        let index = i;
        let li_id = custom_input_list[i].li_id;
        let label_text = custom_input_list[i].label_text;
        let img_src = custom_input_list[i].img_src;
        let listArray = custom_input_list[i].obj_list;
        let need_space = custom_input_list[i].need_space;
        if ($(`#${li_id}`).length > 0) {
            addCustomInput(li_id, label_text, img_src);

            $(`#${li_id}-add-tag`).bind('keypress', function (e) {
                if (
                    e.which < 32 ||
                    (e.which > 32 && e.which < 65) ||
                    (e.which > 90 && e.which < 97) ||
                    e.which > 122
                ) {
                    e.preventDefault();
                }
                if (!need_space && e.which == 32) {
                    e.preventDefault();
                }
            });

            $(`#${li_id}-checkbox`).click(function () {
                if ($(`#${li_id}-checkbox`).prop('checked')) {
                    $(`#${li_id}-container`).show(200);
                    $(`#${li_id}-toggle`).show(200);
                } else {
                    $(`#${li_id}-container, #${li_id}-toggle`).hide(200);
                }
            });

            let input = document.querySelector(`#${li_id}-search`);
            let tagInputField = document.querySelector(`#${li_id}-add-tag`);
            let ul = document.querySelector(`#${li_id}-ul`);

            let set = 0;
            // toggle between add and search
            let toggleSearch = document.querySelector(
                `#${li_id}-toggle-search`
            );
            let toggleAddTag = document.querySelector(
                `#${li_id}-toggle-add-tag`
            );

            // elements to be displayed upon toggle
            let addContainer = document.querySelector(
                `#${li_id}-add-container`
            );
            let searchContainer = document.querySelector(
                `#${li_id}-search-container`
            );
            // toggle between button and displaying search options
            let toggleClass = (event) => {
                // toggle between Button
                toggleSearch.classList.toggle('Ractive');
                toggleAddTag.classList.toggle('Ractive');

                // toggle between input fields
                addContainer.classList.toggle('Rshow');
                searchContainer.classList.toggle('Rshow');
            };
            // attaching event listener
            toggleSearch.addEventListener('click', toggleClass);
            toggleAddTag.addEventListener('click', toggleClass);
            toggleSearch.set = 1;
            toggleAddTag.set = 0;
            // temp addContainer's tag
            let tempTagArray = [];

            // function to create element
            const addTag = () => {
                listArray.sort();
                for (let i = 0; i < listArray.length; i++) {
                    let li = document.createElement('li');
                    let button = document.createElement('a');
                    let span = document.createElement('img');
                    span.setAttribute('src', './images/close.svg');
                    li.setAttribute('class', 'Rcustom');
                    button.appendChild(span);
                    li.innerText = listArray[i];
                    li.appendChild(button);
                    ul.appendChild(li);
                    li.style.backgroundColor = '#4a164b';
                    //li.style.boxShadow = '1px 2px 4px #AAB2BD';
                    button.addEventListener('click', removeTag);
                }
            };
            addTag();

            function removeTempTag(event) {
                event.currentTarget.parentNode.parentNode.removeChild(
                    event.currentTarget.parentNode
                );
                set--;
            }
            function removeTag(event) {
                event.currentTarget.parentNode.remove();
                let val = event.currentTarget.parentNode.innerText;
                let test = listArray.filter((value, i) => {
                    return value != val;
                });
                listArray = test;
                custom_input_list[index].obj_list = test;
            }

            tagInputField.addEventListener('keyup', (event) => {
                if (event.key == ',' || event.keyCode == 188) {
                    let tempTag = event.target.value.replace(/,/g, ' ');
                    let trim = tempTag.trim();
                    if (trim.length > 0) {
                        tagInputField.value = '';
                        let parentCon = document.querySelector(
                            `#${li_id}-add-container`
                        );
                        let buttonClass = document.createElement('div');
                        let span = document.createElement('span');
                        let i = document.createElement('img');
                        i.setAttribute('src', './images/close_temp.svg');
                        i.classList.add('Rcloseicon');
                        buttonClass.innerText = trim;
                        buttonClass.setAttribute('class', 'RbuttonClass');
                        span.appendChild(i);
                        buttonClass.appendChild(span);
                        parentCon.insertBefore(
                            buttonClass,
                            parentCon.lastElementChild
                        );
                        span.addEventListener('click', removeTempTag);
                        set++;
                        console.log(set);
                    }
                }
                // set > 0 to ensure addTag doesnot fire on an empty "ENTER" keyPress
                else if (
                    (event.key == 'Enter' || event.keyCode == 13) &&
                    set > 0
                ) {
                    let tags = [
                        ...document.querySelectorAll(
                            `#${li_id}-add-container .RbuttonClass`
                        ),
                    ];
                    let li = [...document.querySelectorAll(`#${li_id}-ul li`)];
                    for (let i = 0; i < tags.length; i++) {
                        listArray.push(tags[i].innerText.toLowerCase());
                        //custom_input_list[index].obj_list.push(tags[i].innerText.toLowerCase());
                        tags[i].parentNode.removeChild(tags[i]);
                    }
                    for (let i = 0; i < li.length; i++) {
                        li[i].parentNode.removeChild(li[i]);
                    }
                    addTag();
                }
            });
            input.addEventListener('keyup', () => {
                let inputTxt = input.value.toLowerCase();
                let li = [...document.querySelectorAll(`#${li_id}-ul li`)];
                for (i = 0; i < listArray.length; i++) {
                    if (listArray[i].indexOf(inputTxt) > -1) {
                        li[i].style.display = '';
                    } else {
                        li[i].style.display = 'none';
                    }
                }
            });
        }
    }
};

enableCustomInput();
