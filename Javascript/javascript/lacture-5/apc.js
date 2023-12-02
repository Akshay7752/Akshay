// function to interact with the user: alert , prompt and confirm

// 1. alert

// 2. prompt

// 3. comfirm

// window.alert("this is javascript");
// alert("hello user")

// let Message = prompt("Age");
// document.write(Message);

// let message = confirm("this is javascript");
// document.write(message);


function A() {
    console.log("called A");
    return false;
  }
  function B() {
    console.log("called B");
    return true;
  }
  
  console.log(A() && B());
