// Que -1 let string = "hello i am asif asif hello"

// let words = string.split(" ")

// let map = new Map()

// function countWords(string){
// for(let i = 0; i<words.length;i++){
//    let word = words[i];
//    let value  = map.get(words)
//    if(map.has(word)){
//       map.set(word,value+1)
//    }else{
//       map.set(word,1)
//    }
// }
// return map
// }

// console.log(countWords())

// Que-2 function removeDuplicates(nums) {
//     return [...new Set(nums)];  // here we use set object because set store unique elements.
//   }                              // and ... sytax spread the elemnents of an array
 
//   console.log(removeDuplicates([1,2,3,4,5,3,2,4]))

// Que-3 Swap Values

// function swapValues(x, y) {
//     [x, y] = [y, x];
//     return [x, y];
//   }
  
//   let x = 5;
//   let y = 10;
//   [x, y] = swapValues(x, y);
//   console.log(x, y); // Outputs: 10 5

// Que-4 

// function extractElements(arr) {
//     const [first, second, ...rest] = arr;
//     const last = rest.pop();
//     return [first, second, last];
//   }
//   const arr = [1, 2, 3, 4, 5];
//   const result = extractElements(arr);
//   console.log(result); // Outputs: [1, 2, 5]

// Que-5

// function Max(arr){
//     return Math.max(...arr)
//   }
//   function Min(arr){
//     return Math.min(...arr)
  
//   }
//   let arr = [5,2,7,1,9]
//   console.log(Max(arr));
//   console.log(Min(arr));
    
// Que-6 

// const person = {
//     name : "Mithun",
//     age:21,
//     address:{
//       street : "B-8 Block-B,Industrial Area.",
//       city : "Sector-62,Noida",
//       state : "Uttarpradesh",
//     },
//   };
  
//   let object  = {
//     name : person.name,
//     street : person.address.street
//   }
   
//   function biodata(object){
//     return object;
//   }
  
//   console.log( biodata(object));