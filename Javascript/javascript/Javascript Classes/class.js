// Creating JavaScript Class

{
    // // constructor function
    // function Person () {
    //     this.name = 'John',
    //     this.age = 23
    // }

    // // create an object
    // const person1 = new Person();
}

{
    // // creating a class
    // class Person {
    //     constructor(name) {
    //     this.name = name;
    //     }
    // }
}


{
    // // creating a class
    // class Person {
    //     constructor(name) {
    //     this.name = name;
    //     }
    // }
  
    // // creating an object
    // const person1 = new Person('John');
    // const person2 = new Person('Jack');
    
    // console.log(person1.name);
    // console.log(person2.name); 

}

// Javascript Class Methods

// While using constructor function

{
    // constructor function
    // class Person {
    //     constructor(name) {

    //         // assigning  parameter values to the calling object
    //         this.name = name;

    //         // defining method
    //         this.greet = function () {
    //             return ('Hello' + ' ' + this.name);
    //         };
    //     }
    // }
    // console.log(name);
    // Person(greet)
}

{
    // class Person {
    //     constructor(name) {
    //     this.name = name;
    //   }
    
    //     // defining method
    //     greet() {
    //         console.log(`Hello ${this.name}`);
    //     }
    // }
    
    // let person1 = new Person('John');
    
    // // accessing property
    // console.log(person1.name); // John
    
    // // accessing method
    // person1.greet(); // Hello John
}

// Hoisting

{
    // accessing class
    const p = new Person(); // ReferenceError

    // defining class
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    console.log();
}