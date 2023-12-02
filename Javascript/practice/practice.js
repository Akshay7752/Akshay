// odd even 
// {
//     let number = prompt("enter the number");
//     console.log(number);

//     if (number % 2 == 0) {
//         console.log("even number");
//     }
//     else{
//         console.log("odd number");
//     }
// }

// find large number 
// {
//     var a = prompt("enter the a value");
//     var b = prompt("enter the b value");

//     var larg;

//     if (a > b) {
//         larg = a;
//     }
//     else if (b > a) {
//         larg = b;
//     }
//     console.log("largest number",larg);
// }

// arithmetic op
// {
//     var a = 100;
//     var b = 10;


//     document.getElementById("demo1").innerHTML = a + b;
//     document.getElementById("demo2").innerHTML = a - b;
//     document.getElementById("demo3").innerHTML = a * b;
//     document.getElementById("demo4").innerHTML = a / b;
// }

// find the grade
// {
//     var a = 50;
//         b = 40
//         c = 50
//         mark = a + b + c;
//         console.log("total mark = ",mark);

//         per = mark / 3;
//         console.log("percentage = ",per);


//     if (per >= 85) {
//         console.log("A grade");
//     }
//     else if (per >= 70) {
//         console.log("B grade");
//     }
//     else if (per >= 45) {
//         console.log("C grade");
//     }
//     else if (per <= 33) {
//         console.log("Fail");
//     }
// }

// // sort three number 


// // logical program 

// {
//     var a = -9 * 3;
//     console.log(a);
// }

// {
//     var a = '"value is "';
//     b = 50;
//     c = a + b
//     console.log(c);
// }

// {
//     var a = 17 % 5;
//     console.log(a);
// }

// {
//     var a = 5 % 17;
//     console.log(a);
// }

// {
//     var a = 5 / 10;
//     console.log(a);
// }

// {
//     var a = (4 == 4);
//     console.log(a);
// }

// {
//     var a = (4!=5);
//     console.log(a);
// }

// {
//     var a = (7 <= 8);
//     console.log(a);
// }

// // pettern 
// // 1...square
// {
//     for(let i=1; i<=5; i++)
//     {
//         for(let j=1; j<=5; j++)
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// // 2... hollow
// {
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 1; j <= 5; j++) {
//             if (i == 1 || i == 5 || j == 1 || j == 5) {
//                 document.write("*");
//             }
//             else {
//                 document.write("&nbsp&nbsp");
//             }
//         }
//         document.write("<br>");
//     }
// }

// // 3... right tringle
// {
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 0; j <= 5 - i; j++) {
//             document.write("&nbsp&nbsp");
//         }
//         for (let k = 0; k < i; k++) {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// // 4... left tringle
// {
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 1; j <= i; j++) {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// // 5... downward tringle
// {
//     for (let i = 5; i >= 1; i--) {
//         for (let j = 1; j <= i; j++) {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// // 6... hollow tringle
// {
//     for (let i = 0; i <= 6; i++) 
//     {
//         for (let j = 0; j < i; j++) 
//         {
//             if (j == 0 || i == 6  || j == i-1) 
//             {
//                 document.write("*");
//             }
//             else 
//             {
//                 document.write("&nbsp&nbsp");
//             }   
//         }
//         document.write("<br>");
//     }
// }

// // 7..pyramid .
// { var sp=30;
//     for(let i=1;i<=10;i+=2)
//     {
//         for(let k=1;k<=sp;k++)
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for(let j=1;j<=i;j++)
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//         sp--;
//     }
// }

// // 8..reverse pyramid
// { var sp=30;
//     for(let i=1;i<=10;i+=2)
//     {
//         for(let k=1;k<=sp;k++)
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for(let j=10;j>i;j--)
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//         sp++;
//     }
// }

// // 9..hollow pyramid
// {
//     var sp = 30;
//     for (let i = 1; i <= 10; i += 2) 
//     {
//         for (let k = 1; k <= sp; k++) 
//         {
//             document.write("&nbsp ");
//         }
//         for (let j = 1; j <=i; j++) 
//         {
//             if(j==1 || i==9 || j==i)
//             {
//             document.write("*");
//             }
//             else
//             {
//                 document.write("&nbsp&nbsp");
//             }
//         }
//         document.write("<br>");
//         sp--;
//     }
// }

// // 10..diamond
// {
//     var sp = 30;
//     for (let i = 1; i <= 10; i += 2) 
//     {
//         for (let k = 1; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//         sp--;
//     }
//     for (let i = 1; i < 10; i += 2) 
//     {
//         for (let k = -1; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = i; j < 8; j++) 
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//         sp++;
//     }
// }

// // 11..hollow diamond
// {
//     var sp = 30;
//     for (let i = 1; i <= 10; i += 2) 
//     {
//         for (let k = 1; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = 1; j <= i; j++) 
//         {
//             if(j==1 || j==i)
//             {
//             document.write("*");
//             }
//             else
//             {
//                 document.write("&nbsp&nbsp");
//             }
//         }
//         document.write("<br>");
//         sp--;
//     }
//     for (let i = 1; i < 10; i += 2) 
//     {
//         for (let k = -1; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = i; j < 8; j++) 
//         {
//             if(j==1 || j==i || j==7)
//             {
//             document.write("*");
//             }
//             else
//             {
//                 document.write("&nbsp&nbsp");
//             }
//         }
//         document.write("<br>");
//         sp++;
//     }
// }

// // 12..hourglass
// {
//     var sp = 30;
//     for (let i = 1; i < 10; i += 2) 
//     {
//         for (let k = -1; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = i; j < 10; j++) 
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//         sp++;
//     }
//     for (let i = 4; i <= 10; i += 2) 
//     {
//         for (let k = 1; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = 2; j <= i; j++) 
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//         sp--;
//     }
// }

// // 13..right pascal
// {
//     var sp = 30;
//     for (let i = 1; i <= 4; i ++) 
//     {
//         for (let k = 1; k <= sp; k++) 
//         {
//             document.write("");
//         }
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//         sp--;
//     }
//     for (let i = 1; i <= 4; i ++) 
//     {
//         for (let k = 0; k <= sp; k++) 
//         {
//             document.write("");
//         }
//         for (let j = i; j <= 4; j++) 
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//         sp++;
//     }
// }

// // 14..left pascal
// {
//     var sp = 30;
//     for (let i = 1; i <= 4; i ++) 
//     {
//         for (let k = 1; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//         sp--;
//     }
//     for (let i = 1; i <= 4; i ++) 
//     {
//         for (let k = 0; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = i; j <= 4; j++) 
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//         sp++;
//     }
// }

// 15..heart
// {
//     var n = 6;
//     sp=6;
// for (let i = 3; i < n; i += 2) 
// {
//   // print first spaces
//   for (let k = 1; k < sp - i; k += 2) 
//   {
//     document.write('&nbsp&nbsp')
//   }
//   // print first stars
//   for (let j = 1; j <= i ; j++)
//   {
//     document.write('*')
//   }
//   // print second spaces
//   for (let k = 1; k <= sp-i; k++) 
//   {
//     document.write('&nbsp&nbsp')
//   }
//   // print second stars
//   for (let j = 1; j <= i; j++) 
//   {
//     document.write('*')
//   }
//   document.write("<br>");
// }
// // lower part
// // inverted pyramid
// var sp=0;
// for (let i = 12; i > 0; i-=2) 
// {
//   for (let k = 0; k < sp; k++) 
//   {
//     document.write('&nbsp&nbsp')
//   }
//   for (let j = 1; j < i; j++) 
//   {
//     document.write('*')
//   }
//   document.write("<br>");
//   sp++;
// }
// }

// // javascript number pettern
// // 1.. tringle 
// {
//     for(let i = 1; i<=5; i++)
//     {
//         for(let j = 1; j<=i; j++)
//         {
//             document.write(j);
//         }
//         document.write("<br>")
//     }
// }

// // 2..tringle
// {
//     for(let i = 1; i<=5; i++)
//     {
//         for(let j = 1; j<=i; j++)
//         {
//             document.write(i);
//         }
//         document.write("<br>")
//     }
// }

// // 3..tringle
// {
//     var a = 1;
//     for(let i = 1; i<=4; i++)
//     {
//         for(let j = 1; j<=i; j++)
//         {
//             document.write(a++);
//         }
//         document.write("<br>")
//     }
// }

// // 4.. reverse 
// {
//         for(let i = 5; i>=1; i--)
//         {
//             for(let j = 1; j<=i; j++)
//             {
//                 document.write(j);
//             }
//             document.write("<br>")
//         }
// }

// // 5..reverse
// {
//     for (let i = 1; i <= 5; i++) 
//     {
//         for (let j = 5; j >= i; j--) 
//         {
//             document.write(j);  
//         }
//         document.write("<br>");
//     }
// }

// // 6..reverse 
// {
//     for (let i = 5; i >= 1; i--) 
//     {
//         for (let j = i; j >= 1; j--) 
//         {
//             document.write(j);  
//         }
//         document.write("<br>");
//     }
// }

// // 7..number pyramid 
// { 
//     var sp=20;

//     for(let i=1;i<=10;i+=2)
//     {
//         for(let k=1;k<=sp;k++)
//         {
//             document.write("&nbsp");
//         }
//         for(let j=1;j<=i;j++)
//         {
//             document.write(j);
//         }
//         document.write("<br>");
//         sp--;
//     }
// }

// // 8..numbr pyramid
// { 
//     var sp=20;
//     var a = 1;

//     for(let i=1;i<=5;i+=2)
//     {
//         for(let k=1;k<=sp;k++)
//         {
//             document.write("&nbsp");
//         }
//         for(let j=1;j<=i;j++)
//         {
//             document.write(a++);
//         }
//         document.write("<br>");
//         sp--;
//     }
// }

// // 9..reverse pyramid
// { var sp=10;
    
//     for(let i=10;i>=1;i-=2)
//     {
//         for(let k=1;k<=sp;k++)
//         {
//             document.write("&nbsp");
//         }
//         for(let j=1;j<i;j++)
//         {
//             document.write(j);
//         }
//         document.write("<br>");
//         sp++;
//     }
// }

// 10..diamond 
// {
//     var sp = 10;
//     for (let i = 1; i <= 7; i += 2) 
//     {
//         for (let k = 1; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write(j);
//         }
//         document.write("<br>");
//         sp--;
//     }
//     for (let i = 5; i >= 1; i -= 2) 
//     {
//         for (let k = -1; k <= sp; k++) 
//         {
//             document.write("&nbsp&nbsp");
//         }
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write(j);
//         }
//         document.write("<br>");
//         sp++;
//     }
// }

// 11.. hourglass 
// {
//         var sp = 5;
//         for (let i = 8; i >= 1; i -= 2) 
//         {
//             for (let k = -1; k <= sp; k++)  
//             {
//                 document.write("&nbsp&nbsp");
//             }
//             for (let j = 1; j < i; j++) 
//             {
//                 document.write(j);
//             }
//             document.write("<br>");
//             sp++;
//         }
//         for (let i = 4; i <= 8; i += 2) 
//         {
//             for (let k = 1; k <= sp; k++) 
//             {
//                 document.write("&nbsp&nbsp");
//             }
//             for (let j = 1; j < i; j++) 
//             {
//                 document.write(j);
//             }
//             document.write("<br>");
//             sp--;
//         }
//     }

// // 12.. pascal 
// {
//     for (let i = 1; i <= 4; i ++) 
//     {
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write(j);
//         }
//         document.write("<br>");
//     }
//     for (let i = 3; i >= 1; i--) 
//     {
//         for (let j = 1; j <= i; j++) 
//         {
//             document.write(j);
//         }
//         document.write("<br>");

//     }
// }

// javascript pettern
// {
//     var a = ["j","a","v","a","s","c","r","i","p","t"]

//     for (let i = 0; i < 10; i++) 
//     {
//         for (let j = 0; j <= i; j++) 
//         {
//             document.write(a[j] + "&nbsp&nbsp");
//         }
//         document.write("<br>");
//     }
// }   