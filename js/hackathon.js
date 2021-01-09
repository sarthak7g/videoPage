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


var first_part = document.getElementById("first_part");
var second_part = document.getElementById("second_part");
var first_three = document.getElementById("first_three");
var second_three = document.getElementById("second_three");

first_part.addEventListener("click", function () {

    
    // first_part.style.transition = "opacity 1s ease-in-out";
    second_three.style.opacity = '0';
    setTimeout(function () {
        second_three.style.position = 'absolute';
        first_three.style.position = 'relative';
        first_three.style.opacity = '1';
    }, 500);
    // console.log("aaja");
    first_part.style.backgroundColor = "#ffbf34";
     second_part.style.backgroundColor = "gray";
})

second_part.addEventListener("click", function () {
    // second_three.style.display = "flex";
    first_three.style.opacity = '0';
    setTimeout(function () {
        first_three.style.position = "absolute";
        second_three.style.position = "relative";
        second_three.style.opacity = '1';
    }, 500);
    
    // console.log("sdfjh");
    first_part.style.backgroundColor = "gray";
    second_part.style.backgroundColor = "#ffbf34";
})


var card = document.getElementById("g5-card");
var cardHead = document.getElementById("g5-card-head");
var cardText = document.getElementById("g5-card-text");
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
  card.style.opacity = "0";
  setTimeout(function () {
    actCard += 1;
    actCard %= 5;
    cardHead.innerHTML = g5Data[actCard].head;
    cardText.innerHTML = g5Data[actCard].text;
    card.style.opacity = "1";
  }, 500);
}, 5000);