window.addEventListener('load', () => {
    $('.Rcontainer, .Rtoggle').hide();
    var countChecked = function () {
        if ($('#specific_words').prop('checked')) {
            $('.Rcontainer').show(150);
            $('.Rtoggle').show();
        }else{
            $('.Rcontainer, .Rtoggle').hide(150);
        }
    };
    $('#specific_words').on('click', countChecked);

    $('#RaddTag').bind('keypress', function (e) {
        if (e.which < 65 || (e.which > 90 && e.which < 97) || e.which > 122) {
            e.preventDefault();
        }
    });

    let input = document.querySelector('#Rsearch');
    let tagInputField = document.querySelector('#RaddTag');
    let ul = document.querySelector('#Rul');
    let listArray = [
        'javascript',
        'apple',
        'games',
        'out',
        'coding',
        'dribble',
        'watermelon',
        'orange',
        'push',
        'something',
        'teeth',
        'ultra',
        'ultrasound',
        'you',
    ];
    let set = 0;
    // toggle between add and search
    let toggleSearch = document.querySelector('.RtoggleSearch');
    let toggleAddTag = document.querySelector('.RtoggleAddTag');

    // elements to be displayed upon toggle
    let addContainer = document.querySelector('.RaddContainer');
    let searchContainer = document.querySelector('.RsearchContainer');
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
            let button = document.createElement('button');
            let span = document.createElement('img');
            span.setAttribute('src', './images/close.svg');
            button.setAttribute('class', 'closeTag');
            button.appendChild(span);
            li.innerText = listArray[i];
            li.appendChild(button);
            ul.appendChild(li);
            li.style.backgroundColor = '#F6C116';
            li.style.boxShadow = '0px 0px 2px #AAB2BD';
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
    }

    tagInputField.addEventListener('keyup', (event) => {
        if (event.key == ',' || event.keyCode == 188) {
            let tempTag = event.target.value.replace(/,/g, ' ');
            let trim = tempTag.trim();
            if (trim.length > 0) {
                tagInputField.value = '';
                let parentCon = document.querySelector('.RaddContainer');
                let buttonClass = document.createElement('div');
                let span = document.createElement('span');
                let i = document.createElement('img');
                i.setAttribute('src', './images/close_temp.svg');
                i.classList.add('Rcloseicon');
                buttonClass.innerText = trim;
                buttonClass.setAttribute('class', 'RbuttonClass');
                span.appendChild(i);
                buttonClass.appendChild(span);
                parentCon.insertBefore(buttonClass, parentCon.lastElementChild);
                span.addEventListener('click', removeTempTag);
                set++;
                console.log(set);
            }
        }
        // set > 0 to ensure addTag doesnot fire on an emty "ENTER" keyPress
        else if ((event.key == 'Enter' || event.keyCode == 13) && set > 0) {
            let tags = [
                ...document.querySelectorAll('.RaddContainer .RbuttonClass'),
            ];
            let li = [...document.querySelectorAll('.Rul li')];
            for (let i = 0; i < tags.length; i++) {
                listArray.push(tags[i].innerText.toLowerCase());
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
        let li = [...document.querySelectorAll('.Rul li')];
        for (i = 0; i < listArray.length; i++) {
            if (listArray[i].indexOf(inputTxt) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    });
});
