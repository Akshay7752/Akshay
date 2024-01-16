// set method 

// new Set()	Creates a new Set
// add()	  Adds a new element to the Set
// delete()  	Removes an element from a Set
// has()	  Returns true if a value exists in the Set
// values()	   Returns an iterator with all the values in a Set
// size	Returns the number of elements in a Set


// new Set()
// {
//     const x = new Set([10,20,30]);
//     console.log(x.size);
// }

// add() 
// {
//     const x = new Set();
//     x.add("a");
//     x.add("b");
//     x.add("c");

//     console.log(x);
// }

// {
//     const set = new Set();

//     const a = "a";
//     const b = "b";
//     const c = "c";

//     set.add(a);
//     set.add(b);
//     set.add(c);

//     console.log(set.size);
// }

// delete() 
// {
//     const a = new Set(["aaa","bbb","ccc","ddd"]);

//     a.delete("bbb");
//     console.log(a);
// }

// has() 
// {
//     const x = new Set(["a" , "b" , "c"]);
    
//     let y = x.has("a");
  
//     console.log(y);
// }

// values()	 
// {
//     const x = new Set(["a" , "b" , "c"]);
    
//     let y = x.values();
  
//     console.log(y);
// }