// javasvript array 

// const fruits = [];
// fruits.push("banana","apple","lemon","mango");
// console.log(fruits);
// fruits[5]="pineapple";
// console.log(fruits[5]);
// console.log(Object.keys(fruits));
// console.log(fruits.length);
// fruits.length=10;
// console.log(fruits);
// console.log(Object.keys(fruits));
// console.log(fruits.length);
// console.log(fruits[8]);
// fruits.length=2;
// console.log(fruits);
// console.log(fruits.length);


// let newarray=["madhu","vishal","kishor","chirag"];
// document.write(newarray[3],newarray[3]);

// {
    // const newarrays=[
    //     "one",
    //     "two",
    //     "three",
    //     "four"];

    //     newarrays[1]="five";
    //     document.write(newarrays);
// }

// array lenth properties

// {
    // const newarray=[
    //     "one",
    //     "two",
    //     "three",
    //     "four"];
    // document.write(newarray.length);
// }

// accessing the first array element

// {
//     const fruits=["apple","banana","mango","pineapple"];
//     document.write(fruits[3]);
// }

// accessing the last array element

// {
    // var fruits=["banana","apple","mango","pineapple"];
    // document.getElementById("demo").innerHTML=fruits[fruits.length-4];
// }

// adding array element

// {
//     const fruits=["banana","mango","apple"];
//     document.getElementById("demo").innerHTML=fruits;   

//     function myfunction()
//     {
//         fruits.push("pineapple");
//         document.getElementById("demo1").innerHTML=fruits;
//         document.getElementById("demo2").innerHTML=fruits.length;
    // }
// }

// The lenth property provides an easy way to append new elements to an array without using push() method

// {
//     const name=["riya","maya","ruhi"];
//     document.getElementById("demo").innerHTML=name;

//     function myfunctionn()
//     {
//         name[name.length]= "niya";
//         document.getElementById("demo1").innerHTML=name;
//     }
// }

// Adding elements with high indexes can create undefined "holes" in an array
// {
//     const name=["riya","maya","ruhi"];
//     name[6]="niya";
//     console.log(name);

//     let fLen=name.length;
//     let text="";
//     for(i=0;i<fLen;i++)
//     {
//         text+=name[i]+"<br>";
//     }
//     document.getElementById("demo").innerHTML=text; 
// }

// Array methods

// converting array to sring
 

// The join() method also joins all array element into a string

// {
//     const name=["riya","maya","ruhi","mahi"];
//     document.getElementById("demo").innerHTML=name.join(" also ");
// }

// popping and pushing method

// {
//     const name=["riya","maya","ruhi","mahi"];
//     document.getElementById("demo").innerHTML=name;
//     name.pop();
//     name.pop();
    
//     document.getElementById("demo").innerHTML=name;
// }

// The pop() method returns the value that was "poped out"

// {
//     const name=["riya","maya","ruhi","mahi"];
//     document.getElementById("demo").innerHTML=name.pop();
//     document.getElementById("demo1").innerHTML=name;
// }

// Javascript array push()
// the push() method adds a new elements to an array (at the end)

// {
//     const name=["riya","maya","ruhi","mahi"];
//     document.getElementById("demo").innerHTML=name;
//     name.push("khushi");
//     document.getElementById("demo1").innerHTML=name;
// }

// The push() method returns the new array lenth
// {
//     const name=["riya","maya","ruhi","mahi"];
//     document.getElementById("demo").innerHTML=name.push("khushi");
//     document.getElementById("demo1").innerHTML=name.length;
// }

// Shifting elements
// javascript Array shift()

// the shift method removes the first array elements and "shifts" all other elements to a lower index

// {
//     const name=["riya","maya","ruhi","mahi"];
//     document.getElementById("demo").innerHTML=name;
//     name.shift();
//     document.getElementById("demo1").innerHTML=name;
// }

// JavaScript Array unshift()
// added new element in beggning
// {
//     const name=["riya","maya","ruhi","mahi"];
//     document.getElementById("demo").innerHTML=name;
//     name.unshift("rima");
//     document.getElementById("demo1").innerHTML=name;
// }

// unshift() method returns the array length 

// {
//     const name=["riya","maya","ruhi","mahi"];
//     document.getElementById("demo").innerHTML= name.unshift("rima");
//     document.getElementById("demo1").innerHTML=name;
// }

// changiong elements

// {
//     const name=["riya","maya","ruhi","mahi"];
//     document.getElementById("demo").innerHTML=name;
//     name[2]="madhu";
//     document.getElementById("demo1").innerHTML=name;
// }

// javascript array add() elements

// {
//     const name=["riya","maya","ruhi","mahi"];
//     document.getElementById("demo").innerHTML=name;
//     name[name.length]="madhu";
//     document.getElementById("demo1").innerHTML=name;
// }

// javascript array delete() Element

// {
//     const name=["riya","maya","ruhi","mahi"];
//     document.getElementById("demo").innerHTML=name;
//     delete name[3];
//     name[3]="madhu";
//     document.getElementById("demo1").innerHTML=name;
// }

// meargin (concatenating)'Array'

// {
//     const girls=["riya","maya"];
//     const boys=["rahul","yash"];
//     const boys1=["aniket","vishal"];
//     const children=girls.concat(boys,boys1);

//     document.getElementById("demo").innerHTML=children;
//     console.log(children);
// }

// splicing and slicing arrays()

// {
//     const fruits=["banana","orange","apple","mango"];
//     document.getElementById("demo").innerHTML=fruits;

//     fruits.splice(0,3,"lemon","kiwi","watermalon");
//     document.getElementById("demo1").innerHTML=fruits;
// }
// {
//     const fruits=["banana","orange","apple","mango"];
//     document.getElementById("demo").innerHTML="original Array:<br>"+fruits;

//     let removed=fruits.splice(2,2,"lemon","kiwi");
//     document.getElementById("demo1").innerHTML="New Array:<br>"+fruits;
//     document.getElementById("demo2").innerHTML="removed items:<br>"+removed;
// }

// using splice() to remove elements

// {
//     const fruits=["banana","orange","apple","mango"];
//     document.getElementById("demo1").innerHTML=fruits;
//     fruits.splice(0,1);
//     document.getElementById("demo2").innerHTML=fruits;
// }

// Javascript array slice()

// {
//     const fruits=["banana","orange","lemom","apple","mango"];
//     const newremove=fruits.slice(1,3);
//     document.getElementById("demo").innerHTML= fruits+ "<br><br>"+ newremove;
// }

// Array.isArray
// {
//     let book=["math","chemistry","physics","bio"];
//     let books="string";
//     console.log(Array.isArray(book));
// }

// javascript shorting array

// {
//     let book=["math","chemistry","physics","bio","amazon"];
//     let books=book.sort;
//     console.log(books);
// }

/*******************************************************************/
// javascript array fill mathod

// {
//     const fruits=["banana","mango","grapes","apple","watermalon"];
//     const newfill=fruits.fill("kishan",1);
//     console.log(newfill);
// }

// javascript array copywithin() method

// {
//     const fruits=["banana","mango","grapes","apple","watermalon","kiwi","lemon","olive"];
//     const newcopy=fruits.copyWithin(0,1);
//     console.log(newcopy);
// }

// javascript valueof() method

// {
//     const fruits=["banana","mango","grapes","apple","watermalon","kiwi","lemon","olive"];
//     const newfruits=fruits.valueOf();
//     console.log(newfruits);
// }

// javascript flat() method

// {
//     const fruits=[1,2,3,[4,[5,6,[7,8,9]]]];
//     const newarray1=fruits.flat();
//     const newarray2=fruits.flat(2);
//     const newarray3=fruits.flat(3);
//     console.log(newarray1);
//     console.log(newarray2);
//     console.log(newarray3);
// }

// {
//     let a = ["aaa","bbb","ccc","ddd"];
//     let b = a.toString();
//     console.log(a.length);
//     console.log(b);
//     console.log(b.length);
// }