"use strict";

// SELECT
const select = $("#select"),
  select2 =$("#select2"),
  option1 = $("#option1"),
  optionfirst = $(".wrap_third_text_first"),
  optionSecond = $(".wrap_third_text_second"),
  optionThird = $(".wrap_third_text_third");

// WRAP
const wrapper = $(".wrap_first"),
  text = $(".wrap_seventh_title_first"),
  text2 = $(".wrap_seventh_title_second"),
  wrap6 = $(".wrap6");


// CONTAINER
const headerContainer=$('.container'),
      mainContainer=$('.main_container'),
      footerContainer=$('.footer_container');



 // CHECKBOX     
  const checkboxAll = $a("#checkboxall");

// CIRCLE
const circleFirst = $(".circle_first"),
  circleSecond = $(".circle_second"),
  circleThird = $(".circle_third");

const circle1 = $(".circle1"),
  circle2 = $(".circle2"),
  circle3 = $(".circle3");

// INPUT
const inputFirst = $("#checkbox1"),
  inputSecond = $("#checkbox2"),
  inputThird = $("#checkbox3"),
  inputFourth = $("#checkbox4"),
  inputFifth = $("#checkbox5"),
  inputSixth = $("#checkbox6"),
  inputSeventh = $("#checkbox7"),
  inputEighth = $("#checkbox8");

const input1 = $(".wrap_fifth_text_first"),
  input2 = $(".wrap_fifth_text_second"),
  input3 = $(".wrap_fifth_text_third"),
  input4 = $(".wrap_fifth_text_fourth"),
  input5 = $(".wrap_fifth_text_fifth"),
  input6 = $(".wrap_fifth_text_sixth"),
  input7 = $(".wrap_fifth_text_seventh"),
  input8 = $(".wrap_fifth_text_eighth");

// BUTTON
const button = $("#button"),
  buuton2 = $("#button2");



  


// SELECT
select.addEventListener("change", () => {
  if (select.value === "yupqa") {
    optionfirst.style.display = "block";
    optionSecond.style.display = "none";
    optionThird.style.display = "none";
  }
  if (select.value === "o'rtacha") {
    optionSecond.style.display = "block";
    optionfirst.style.display = "none";
    optionThird.style.display = "none";
  }
  if (select.value === "qalin") {
    optionThird.style.display = "block";
    optionSecond.style.display = "none";
    optionfirst.style.display = "none";
  }
});



select2.addEventListener('change', ()=>{
   if(select2.value==='birinchi_ranglar'){
    headerContainer.style.backgroundColor="gold"
    mainContainer.style.backgroundColor="lime"
    footerContainer.style.backgroundColor="black"
   }
   if(select2.value==='ikkinchi_ranglar'){
    headerContainer.style.backgroundColor="deeppink"
    mainContainer.style.backgroundColor="lime"
    footerContainer.style.backgroundColor="yellow"
   }
})




// CIRCLE
circleFirst.addEventListener("click", () => {
  circle1.style.display = "block";
  circle2.style.display = "none";
  circle3.style.display = "none";
});

circleSecond.addEventListener("click", () => {
  circle2.style.display = "block";
  circle1.style.display = "none";
  circle3.style.display = "none";
});

circleThird.addEventListener("click", () => {
  circle3.style.display = "block";
  circle2.style.display = "none";
  circle1.style.display = "none";
});

// INPUT
function isChecked1() {
  if ($("#checkbox1").checked) {
    input1.style.display = "block";
  } else {
    input1.style.display = "none";
  }
}

function isChecked2() {
  if ($("#checkbox2").checked) {
    input2.style.display = "block";
  } else {
    input2.style.display = "none";
  }
}

function isChecked3() {
  if ($("#checkbox3").checked) {
    input3.style.display = "block";
  } else {
    input3.style.display = "none";
  }
}

function isChecked4() {
  if ($("#checkbox4").checked) {
    input4.style.display = "block";
  } else {
    input4.style.display = "none";
  }
}

function isChecked5() {
  if ($("#checkbox5").checked) {
    input5.style.display = "block";
  } else {
    input5.style.display = "none";
  }
}

function isChecked6() {
  if ($("#checkbox6").checked) {
    input6.style.display = "block";
  } else {
    input6.style.display = "none";
  }
}

function isChecked7() {
  if ($("#checkbox7").checked) {
    input7.style.display = "block";
  } else {
    input7.style.display = "none";
  }
}

function isChecked8() {
  if ($("#checkbox8").checked) {
    input8.style.display = "block";
  } else {
    input8.style.display = "none";
  }
}

// BUTTON

button.addEventListener("click", () => {
  if (
    $("#checkbox1").checked ||
    $("#checkbox2").checked ||
    $("#checkbox3").checked ||
    $("#checkbox4").checked ||
    $("#checkbox5").checked ||
    $("#checkbox6").checked ||
    $("#checkbox7").checked ||
    $("#checkbox8").checked
  ) {
    wrap6.style.display = "block";
    text.textContent = "SUCCESSFULL";
    text2.textContent = "";
  } else {
    wrap6.style.display = "block";
    text2.textContent = " NO SUCCESSFULL";
    text.textContent = "";
  }
});

// BUTTON

button.addEventListener("click", () => {
  if (select.value === "o'rtacha") {
    wrap6.style.display = "block";
    text.textContent = "SUCCESSFULL";
    text2.textContent = "";
  }
  if (select.value === "qalin") {
    wrap6.style.display = "block";
    text.textContent = "SUCCESSFULL";
    text2.textContent = "";
  }

  if (select.value === "yupqa") {
    wrap6.style.display = "block";
    text.textContent = "SUCCESSFULL";
    text2.textContent = "";
  }
});

buuton2.addEventListener("click", () => {
  wrap6.style.display = "none";
});






// ====================================================================masala__imtihon

// 4-masala

// var library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     libraryID: 1254,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     libraryID: 4246,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   }];

//   let arr = [];

// library.forEach(function(item,index,array){

//      arr.push(item.title)
//      arr.push(item.author)
//      arr.push(item.libraryID)

// })

// console.log(arr)





// 5-masala

// let array=['The Road Ahead', 'Bill Gates', 1254 , 'Walter Isaacson' , 'Steve Jobs' , 4264 , 'Mockingjay: The Final Book of the Hunger Games' , 'Suzanne Collins' , 3245];

// const object={};

// array.forEach((element, index)=>{
//    object['key' + index] = element;
// });

// console.log(object)
