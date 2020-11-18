if ('serviceWorker' in navigator) {
    //regiter sw on load of the page, so that 
    //page can load most imp resources before it fetches the sw
    navigator.serviceWorker.register('sw.js')
    .then(reg => {
        console.log('Registeration successded. Scope is ' + 
        reg.scope);
    });
}


let namesArray = ['sarah', 'hannah', 'john', 'jack'];
let namesArrayLength = namesArray.length;
console.log("lenth of names array: "+namesArrayLength);

const items = [
	{
        name: 'Array length',
        description: 'Get the length of an array',
        code: 'let length = array.length;'
    },
    {
        name: 'For each',
        description: 'calls once for each element on a an array',  // TODO
        code: 'array.forEach( item => {  } )'
    },
    {
        name: 'document.querySelector)',
        description: 'Used to find an element in DOM, using a CSS selector.',
        code: `let button1 = document.querySelector ('.form button');`
    },
    {
        name: 'document.addEventListener',
        description: 'One can add an event like a click',
        code: `let button2 = button.addEventListener ('click',event => {});`
    },
    {
        name: 'document.createEleent',
        description: 'Add an element in DOM',
        code: `let button3 = document.createElemet ('button')`
    },
    {
        name: 'Map',
        description: 'creates a new array that returns all the values from name',
        code:  `const b = items.map(mystery => mystery.name);`
        /**
         * Map creates a new array populates with result of calling a
         * provided functuon on every element of the calling array. 
         */
    },
    {
        name: 'Map',
        description: 'creates a new array that returns all the values from name',
        code:  `const b = items.map(mystery => mystery.name);`   
    }
];

let itemArrayLength = items.length;
console.log("length of item array: " + itemArrayLength);
items.forEach(item=> {
    console.log(item);    
});

 

//4a find
const a = items.find(element => element.name == 'For each');
console.log(a);
//find and shows the whole object. 
/**
 * {name: "For each", description: "Lowercase", code: "array.forEach( item => {  } )"}
code: "array.forEach( item => {  } )"
description: "Lowercase"
name: "For each"
 */

//4b map
const b = items.map(mystery => mystery.name);
console.log(b);
//returns a list of strigs with the name property of all objects
/*
(5) ["Array length", "For each", "document.querySelector)", "document.querySelector)", "document.querySelector)"]
0: "Array length"
1: "For each"
2: "document.querySelector)"
3: "document.querySelector)"
4: "document.querySelector)"
length: 5
*/

let nameAndCode = items.map(item => ({
    name: item.name,
    code: item.code
}));
console.log('Name and Code: ', nameAndCode);

//4c
let c = items.find(mystery => mystery.description == 'Lowercase');
console.log(c);
//finds and returns the object that matches the description
/*
{name: "For each", description: "Lowercase", code: "array.forEach( item => {  } )"}
*/

//4d reduce
let d = items.reduce((acc, cur) => acc + '\n' + cur.code);
console.log(d);
//the first value we have an object returned to us beacuse acc starts 
//with and object and retrns an object beacuse we are not suppling initial value .
/**[object Object]
array.forEach( item => {  } )
let button1 = document.querySelector (. form button)
let button2 = document.querySelector (. form button)
let button3 = document.querySelector (. form button) 

let d = items.reduce((acc, cur) => acc + '\n' + cur.code, 0);
if 0 is added then it will first go to 0  so acc= 0 and cur.code = items[1].code*/

let dd = items.reduce((acc, cur) => acc + '\n' + cur.code, 0);
console.log("after adding 0 \n " + dd)

//4e
let e = items.map(mystery => ({ ...mystery, category: 'general' }));
console.log(e);

/**
 * creates a new array from an existing array:
 *  by adding general as a category
 */
// 0:
// category: "general"
// code: "let length = array.length;"
// description: "Get the length of an array"
// name: "Array length"


// 4f
let f = items.filter(mystery => mystery.description != '');
console.log(f);
/**
 * only returns objects from teh array whose description is not 
 * and empty string unlike position 3 in array
 */

 // 4g
 // writes a new list with all elemets tha hava a name which comes after
 //M in alphbetical order
 let g = items.filter(mystery => {
     //does not work if name ==''
     if(mystery.name == '') {
         return true;
     }
     else {
        const c = mystery.name[0].toUpperCase();
        return c > 'M';
     }  
});
console.log('g ' , g);
/**
 * returns first letter of each word in 'name' of every object as
 * as capital. 
 */

 // 4h
 //takes away element that have a an element with id = 3
 const remove = 3; 
 let h = items.filter(mystery => mystery.id != remove);

//  5 Vad gör följande kod?
const list = [1, 2, 3, 5, 8, 13, 21];
// 5a	
let a1 = list.length;
console.log(a1);
/**
 * returns length of the array
 */
// 5b	
let b1 = list[0] + list[list.length-1];
console.log(b1);
/**
 * list[0] = 1 
 * list[7-1] = 6
 * so 1 + 21 = 22
 */

// 5c	
let c1 = [...list, 34].length;
console.log(c1);

/**
 * here we are adding a new elemet 34 
 * to the array list and then returning length
 */

// 6 Add async and await items to the list.


const promiseFunc = items => {
    return Promise.resolve('ok');
}

const asyncFunc = async items => {
    return promiseFunc(items);
}

const getData = async () => {
    return Promise.all(list.map(items => asyncFunc(items)))
  }
  
  getData().then(data => {
    console.log(data)
  })
