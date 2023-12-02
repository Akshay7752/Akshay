// Javascript Function apply()

// apply() Syntax

{
    // func.apply(thisArg, argsArray)
}

// 1: apply() Method to call a Function

// {
//     // object definition
//     const personName = {
//         firstName: "Taylor",
//         lastName: "Jackson",
//     };
    
//     // function definition
//     function greet(wish, message) {
//         return `${this.firstName}, ${wish}. ${message}`;
//     }
    
//     // calling greet() function by passing two arguments
//     let result = greet.apply(personName, ["Good morning", "How are you?"]);
    
//     console.log(result);
// }

// {
//     const add = {
//         fname: "Jack",
//         lname: "Roy"
//     }

//     function greet(wish,message){
//         return `${this.fname},${wish},${message}`
//     }

//     let result = greet.apply(add,["Good Morning","How are you?"]);

//     console.log(result);
// }

// 2: apply() for Function Borrowing

{
    // // object definition
    // const car = {
    //     name: "BMW",
    //     description() {
    //     return `The ${this.name} is of ${this.color} color.`;
    //     },
    // };
    
    // // object definition
    // const bike = {
    //     name: "Duke",
    //     color: "black",
    // };
    
    // // bike is borrowing description() method from car using apply() 

    // let result = car.description.apply(bike);
    
    // console.log(result);
}

{
    // const truck = {
    //     name: "TATA",
    //     description(){
    //         return `The ${this.name} is of ${this.color} color`;
    //     }
    // }

    // const car = {
    //     name: "Splender",
    //     color: "pilo"
    // }

    // let result = truck.description.apply(car);

    // console.log(result);
}

// 3: apply() to Append two Arrays

{
    // let color1 = ["Red", "Green", "Blue"];
    // let color2 = ["Yellow", "Black"];

    // // appending two arrays color1 and color2
    // let x = color1.push.apply(color1, color2);

    // console.log(color1);
}

// 4 : Using apply() with built-in functions

{
    // const numbers = [5, 1, 4, 3, 4, 6, 8 , 10];

    // // using apply() with Math object 
    
    // let max = Math.max.apply(null, numbers);

    // console.log(max); 

    // // without using apply() with Math object 

    // let max1 = Math.max(5, 1, 4, 3, 4, 6, 8);

    // console.log(max1); 

    // // The value null is a JavaScript literal representing null or an "empty" value, i.e. no object value is present. It is one of JavaScript's primitive values.
}

// {
//     function sum(){
//         let  sum = 0;
//         for(let i = 0 ; i < arguments.length; i++){
//             sum += arguments[i];
//         }

//         return sum;
//     }

//     const  result = sum.apply(null , [2,2,2]);

//     console.log(result);
// }

