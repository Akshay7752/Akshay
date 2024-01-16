
// javascript string method

// string length
// string slice()
// string substring()
// string substr()
// string replace()
// string replaceall()
// string touppercase()
// string tolowercase()
// srting concate()
// string trim()
// string trimstart()
//string trimend()
//string padStart()
//string padEnd()
//string charAt()
//string charCodeat()
// String split()

// string length()

// {
//     let text="this is check the length";
//     let length=text.length;
//     document.write(length);
// }

// string slice

// {
//     let fruits="apple, mango, banana";
//     let part=fruits.slice(8, 11);
//     document.write(part);
// }

// string substring()

// {
//     let fruits="apple,banana,mango";
//     let part=fruits.substring(2,8);
//     document.write(part);
// }

// string substr()

// {
//     let fruits="apple, banana,kiwi,mango";
//             //  123456789987654365123456;
//     let part=fruits.substr(2,10);
//     document.write(part);
// }

// string replace()

// {
//     function myFunction() {
//         let text = document.getElementById("para-1").innerHTML;
//         document.getElementById("para-1").innerHTML = text.replace("visit", "skillqode");
//     }
// }


    // {
    //     let text = "please visit microsolllp";
    //     let change = text.replace(/microsolllp/i, "skillqode");
    //     document.write(change);
    // }


// {
//     let text = "please visit skillqode visit and visit again";
//     let change = text.replace(/visit/g, "loop");
//     document.write(change);
// }   

// string replaceall() 
// {
//     let text = "i love cats. but Cats are very easy to love. cats    are very popular. but Cats dangerous";
//     let change = text.replaceAll("cats" , "dogs");
//     let changee = text.replaceAll("cats" , "dogs");  
//     document.write(change + changee)
//     document.write(changee)
// }

// string touppercase() 
    //  let text = "i love cats. but Cats are very easy to love. cats are very popular. but Cats dangerous";
    //  let text1 = text.toUpperCase();
    //  document.write(text1);

 //  string tolowercase()
    //  let text = "i love cats. but Cats are very easy to love. cats are very popular. but Cats dangerous";
    //  let text1 = text.toLowerCase();
    //  document.write(text1);

// srting concate()
// {
//     let text1 = "kishan";
//     let text2 = "bhalala";
//     let text3 = text1.concat(" ",text2);
//     let text4 = text3.length;
//     console.log(text3);
//     console.log(text4);
// }

// string trim()
// {
//     let a = "    this is javascript      ";
//     let b = a.trim();
//     console.log(b);
// }

// string trimstart()
// {
//     let a = "    this is javascript      ";
//     let b = a.trimStart();
//     console.log(b);
// }

//string trimend()
// {
//     let a = "    this is javascript      ";
//     let b = a.trimEnd();
//     console.log(b);
// }
//string padstart()
// {
//     let a = "10";
//     let b = a.padStart(5, "0");
//     console.log(b);
// }
//string padEnd()
// {
//     let a = "101";
//     let b = a.padEnd(5, "0");
//     console.log(b);
// }
//string charat()
// {
//     let a = "my name is kishan"
//     let b = a.charAt(0);
//     console.log(b)
// }
//string codeat()
// {
//     let a = "my nAme is kishan"
//     let b = a.charCodeAt(4);
//     console.log(b)
// }
// String split()
// {
//     let a = "kishan";
//     const array = a.split("");

//     a = " ";
//     for(let i = 0; i < array.length; i++)
//     {
//         a += array[i] + "<br>"
//     }
//     document.write(a);
// }

// javascript string search method 
// string indexOf()
// string lastindexOf()
// string search()
// string match()
// string matchAll()
// string includes()
// string startsWith()
// string endsWith()

// string indexOf()
// {
//     let car = "audi, bmw, innova, jaguar";
//     let b = car.indexOf("m");
//     console.log(b);
// }
// {
//     let car = "audi, bmw, innova, jaguar";
//     let b = car.indexOf("a",5);
//     console.log(b);
// }
// string lastindexOf()
// {
//     let car = "audi,bmw,innova,jaguar";
//     let b = car.lastIndexOf("i");
//     console.log(b);
// }
// {
//     let car = "audi, bmw, innova, jaguar";
//     let b = car.lastIndexOf("i",15);
//     console.log(b);
// }

// string search()
// {
//     let a = "javascipt is 'most' popular language";
//     let b = a.search("m");
//     console.log(b);
// }
// {
//     let a = "javascipt is 'most' popular language";
//     let b = a.search(/i/i);
//     console.log(b);
// }
// string match()
// {
//     let a = "javascipt is 'most' popular language";
//     let b = a.match("m");
//     console.log(b);
// }
// string matchAll()
// {
//     let a = "this javascipt is 'most' popular language";
//     let b = a.matchAll(/is/g);
//     console.log(b);
// }
// string includes()
// string startsWith()
// {
//     let a = "javascipt is 'most' popular language";
//     let b = a.startsWith("j");
//     console.log(b);
// }
// {
//     let a = "javascipt is 'most' popular language";
//     let b = a.startsWith("a",1);
//     console.log(b);
// }

// string endsWith()
// {
//     let a = "javascipt is 'most' popular language";
//     let b = a.endsWith("e");
//     console.log(b);
// }
// {
//     let a = "javascipt is 'most' popular language";
//     let b = a.endsWith("e",36);
//     console.log(b);
// }

// javascript template literals 
// back tic 
// {
//     let a = `hello world`;
//     console.log(a);
// }

// quotes inside
// {
//     let a = `hello world 'joe'`;
//     console.log(a);
// }

// // allow multiline string 
// {
//     let a = `"hello
//      world"`;
//     console.log(a);
// }


