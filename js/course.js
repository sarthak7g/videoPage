var faq_drop_content = document.getElementsByClassName("faq_drop_content");
var drop_plus = document.getElementsByClassName("drop_plus");

var flag=[];

for (let i = 0; i < drop_plus.length; i++){
    flag[i] = 0;
}

for (let i = 0; i < drop_plus.length; i++){
    drop_plus[i].addEventListener("click", function () {
        
        if (flag[i] == 0) {
            faq_drop_content[i].style.display = "block";
            drop_plus[
              i
            ].innerHTML = `<i style="color: #ffbf34;" class="fa fa-minus" aria-hidden="true"></i>`;
            flag[i] = 1;
            console.log("a");
        }
        else if(flag[i]==1) {
            drop_plus[
              i
            ].innerHTML = `<i style="color: #ffbf34;" class="fa fa-plus" aria-hidden="true"></i>`;
            faq_drop_content[i].style.display = "none";
            flag[i] = 0;
            console.log("b");
        }
        // console.log(faq_drop_content);
        
    })
}

function truncate(number){
    var id = 'text' + number;
    console.log(id);
    var aid = 'arrow'+number;
    var arrow = document.getElementById(aid);
    var text = document.getElementById(id);
    console.log(text.style.whiteSpace);
    if(text.style.whiteSpace === 'normal'){
        console.log('inside1')
        arrow.innerHTML = '<i class="fas fa-angle-down"></i>';
        text.style.whiteSpace = 'nowrap';
        text.style.textOverflow = 'ellipsis';
        text.style.overflow = 'hidden';
    }else{
        console.log('inside2')
        arrow.innerHTML = '<i class="fas fa-angle-up"></i>';
        text.style.whiteSpace = 'normal';
        text.style.textOverflow = 'none';
        text.style.overflow = 'visible';
    }
}

var active = 1;

function advantageMenu(number) {
    var data = [
      "Do I need to be an entrepreneur to join this experiance? Do I need to be an entrepreneur to join this experiance? Do I need to be an entrepreneur to join this experiance? Do I need to be an entrepreneur to join this experiance? Do I need to be an entrepreneur to join this experiance? Do I need to be an entrepreneur to join this experiance? Do I need to be an entrepreneur to join this experiance? Do I need to be an entrepreneur to join this experiance?",
      "fas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-upfas fa-angle-up",
      "Best-in-class content Best-in-class content Best-in-class content Best-in-class content Best-in-class content Best-in-class content Best-in-class content Best-in-class content Best-in-class content Best-in-class content Best-in-class content ",
    ];
    var dynamicContent = document.getElementById('advantage-container-text');
    dynamicContent.innerHTML = data[number - 1];
    var id = 'menu-' + number;
    var old = 'menu-' + active;
    active = number;
    document.getElementById(old).classList.remove("adv-active");
    document.getElementById(id).classList.add('adv-active');
}

var card = document.getElementById('g5-card');
var cardHead = document.getElementById('g5-card-head');
var cardText = document.getElementById('g5-card-text');
var actCard = 0;

var g5Data = [
  {
    head: "WORLD CLASS EDUCATORS 1",
    text:
      "TED Innovative speakers, Amazon best selling Authors and Teach-SDG Ambassadors.",
  },
  {
    head: "WORLD CLASS EDUCATORS 2",
    text:
      "TED Innovative speakers, Amazon best selling Authors and Teach-SDG Ambassadors.",
  },
  {
    head: "WORLD CLASS EDUCATORS 3",
    text:
      "TED Innovative speakers, Amazon best selling Authors and Teach-SDG Ambassadors.",
  },
  {
    head: "WORLD CLASS EDUCATORS 4",
    text:
      "TED Innovative speakers, Amazon best selling Authors and Teach-SDG Ambassadors.",
  },
  {
    head: "WORLD CLASS EDUCATORS 5",
    text:
      "TED Innovative speakers, Amazon best selling Authors and Teach-SDG Ambassadors.",
  },
];

setInterval(function () {
    card.style.opacity = '0';
    setTimeout(function () {
        actCard += 1;
        actCard %= 5;
        cardHead.innerHTML = g5Data[actCard].head;
        cardText.innerHTML = g5Data[actCard].text;
        card.style.opacity = '1';
    }, 500);
}, 5000);