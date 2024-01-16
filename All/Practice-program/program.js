// 1. Display Alert in Javascript

// {
//     window.alert("hello world");
//     alert("how are you");
//     alert("pause");
// } 

// 2. Display Confirmation box using Javascript

// {
//     confirm("Press a button!");
// }

// 3. Display Prompt box using Javascript

// {
//     var age=prompt('how old are you');
//     var nmaes=prompt('what is your name');
//     var input=prompt('how are you');
// }    

// 4. Mouseover and mouseout in Javascript

// function mouseOver() {
//      document.getElementById("demo").style.color = "red";
// }
// function mouseOut() {
//     document.getElementById("demo").style.color = "black";
// }

// 5. Use keypress in Javascript to Display Alerts

// function myFunction() {
//     document.getElementById("demo").style.backgroundColor = "red";
// }    

// 6. Javascript Validation Examples

// function myFunction() {

//     let x = document.getElementById("numb").value;
//     let text;
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input Not Valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

// Or 7. Textbox required validation in javascript

// 8. Email validation in Javascript

// function validateEmail(inputText) {
//     var mailFormat =  /\S+@\S+\.\S+/;
//     if (inputText.value.match(mailFormat)) {
//       alert("Valid Email Address!");
//       return true;
//     } else {
//       alert("Invalid Email Address!");
//       return false;
//     }
//   }
  
// 9. Letter Validation in Javascript

function nameValid(){
    var n=document.getElementById('name');
    var ptrn=/^[A-Za-z]+$/;
      if(n.value.match(ptrn)){
         alert('Valid Input');
        }
      else{
         alert('Invalid Input');
    document.getElementById('name');
    }
}

// 10. Number Validation in Javascript

// function myFunction() {
//     let x = document.getElementById("numb").value;
//     let text;
//     if (isNaN(x) || x < 1 || x > 1000) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

// 11. Letter and Number validation in Javascript

// function nameValid(){
//     var n=document.getElementById('name');
//     var ptrn=/^[A-Za-z0-9]*$/;
//       if(n.value.match(ptrn)){
//          alert('Valid Input');
//         }
//       else{
//          alert('Invalid Input');
//     document.getElementById('name');
//     }
// }

// 12. IP address Validation

// 13. Retrieve Today's Date in Javascript

// const date = new Date();
// console.log(date);

// 14. Reverse Array Javascript

// const fruits = ["Surat", "Jaipur", "Assam", "Delhi"];
//  console.log(fruits.reverse());

// 15. Javascript Concat or Merge Two Array
  
// const arr1 = ["yello", "red"];
// const arr2 = ["pink", "blue", "white"];
// const colors = arr1.concat(arr2);
// console.log(colors);

// 16. Reverse String in Javascript

// let string = prompt("Enter a String");
// let reversedString = string.split("").reverse().join ("");
// console.log(reversedString);

// 17. Javascript Open a page using window.open() method

// function openWindow() {  
//     window.open('https://www.google.com');  
//     }  

// 18. if else Statement in javascript

// const hour = new Date().getHours(); 
// let greeting;

// if (7 < 12) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting);

// 19. Insert Element in Array

// {
//    const vehicles=["bus","bycycle","car"];
//    vehicles.push("truck");
//    console.log(vehicles);
// }

// 20. Get current url Javascript

// document.getElementById("demo").innerHTML = 
// "The full URL of this page is:<br>" + window.location.href;

// 21. getElementByClassname() method in Javascript

// const collection = document.getElementsByClassName("example");
// collection[0].innerHTML = "Hello World!";

// 22. getElementByTagName() method in javascript

// const collection = document.getElementsByTagName("li");
// document.getElementById("demo").innerHTML = collection[1].innerHTML;

// 23. Disable Browser back and forward button in browser using Javascript

// window.history.forward();

// Or.24. Disable back button in browser using Javascript
// Or 25. Disable Forward button in browser using Javascript
// Or 26. Disable Forward button in browser using Javascript

// 27. Disable Dropdown list using Javascript

// function disable() {
//     document.getElementById("mySelect").disabled=true;
// } 

// 28. Enable Dropdown list using Javascript

// function Enable() {
//     document.getElementById("mySelect").Enabled=true;
// }  

// 29. Disable mouse right click using Javascript

// document.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
//  });

// 30. Javascript Date Countdown Timer

// var countDownDate = new Date("aug 14, 2023 10:46:00").getTime();

// var x = setInterval(function() {

//     var now = new Date().getTime();
  
//     var distance = countDownDate - now;
  
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";
  
//     if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("demo").innerHTML = "EXPIRED";
//     }
//   }, 1000);

// 31. checkbox validation using Javascript 

// function validateForm(form)
// {
//     console.log("checkbox checked is ", form.agree.checked);
//     if(!form.agree.checked)
//     {
//         document.getElementById('agree_chk_error').style.visibility='visible';
//         return false;
//     }
//     else
//     {
//         document.getElementById('agree_chk_error').style.visibility='hidden';
//         return true;
//     }
// }