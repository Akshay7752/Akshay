// javascript map method 
// new Map()	  Creates a new Map
// set()	      Sets the value for a key in a Map
// get()	      Gets the value for a key in a Map
// delete()	      Removes a Map element specified by the key
// has()	      Returns true if a key exists in a Map
// entries()	  Returns an iterator with the [key, value] pairs in a Map

// Property       Description
// size	Returns the number of elements in a Map




/* Methods */

/* You can create a Map by passing an Array to the new Map() constructor */

// {
//     const data = new Map([
//         ["op-1" , 10],
//         ["op-2" , 20],
//         ["op-3" , 30],
//         ["op-4" , 40],
//     ]);

//     document.getElementById("s1").innerHTML = data.get("op-2");
// }

{
    /* The set() method can also be used to change existing Map values */

    // const newmap = new Map();
    // newmap.set("item-1" , "car");
    // newmap.set("item-2" , "bus");
    // newmap.set("item-3" , "truck");

    // document.getElementById("s2").innerHTML =newmap.get("item-3");
}

{
    /* The get() method gets the value of a key in a Map */

    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);

    // newmap.set("item-1" , "train");
    // document.getElementById("s2").innerHTML = newmap.get("item-1");

}

{
    /* The size property returns the number of elements in a Map */

    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80]
    // ])
    // const sizes = Data.size;
    // document.getElementById("s2").innerHTML = sizes;
}  

{
    /* The delete() method removes a Map element */

    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);

    // const deletes = newmap.delete("item-2");
    // document.getElementById("d1").innerHTML =deletes;
    // document.getElementById("d2").innerHTML =newmap.size;
} 

{
    /* The has() method returns true if a key exists in a Map */
    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80]
    // ])
    // const hass = Data.has("option-1");
    // document.getElementById("size1").innerHTML =hass;

    // const hasss = Data.has("option-5");
    // document.getElementById("size2").innerHTML =hasss;
}

// {
//     const Data = new Map([
//         ["option-1" , 20],
//         ["option-2" , 40],
//         ["option-3" , 60],
//         ["option-4" , 80]
//     ])
    
//     Data.delete("option-5");

//     const hasss = Data.has("option-5");
//     document.getElementById("k1").innerHTML =hasss;

//     document.getElementById("k2").innerHTML =Data.size;
// }

// {
//     const a = new Map([
//         ["o-1" , "car0"],
//         ["o-2" , "car1"],
//         ["o-3" , "car2"],
//         ["o-4" , "car3"],
//     ]);

//     let b = " ";

//     for(let x of a.entries())
//     {
//         b += x + "<br>";
//     }
//     document.getElementById("ent").innerHTML = b;
// }