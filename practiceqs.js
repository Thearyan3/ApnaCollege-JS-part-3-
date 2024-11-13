// Question No. 1 - For the given String : 
// Trim it & convert it to uppercase. 

// let msg = "!help";
// console.log(msg.trim().toUpperCase());

// Question No. 2 - For the String -> let name = "ApnaCollege", predict the output for following: 

// let name = "ApnaCollege";
// console.log(name.slice(4, 9));     //Colle
// console.log(name.indexOf("na"));   //2
// console.log(name.replace("Apna", "Our"));   //OurCollege 

//Question No. 3 - For the given start state of an array, change it to final form using methods.
// start : ["january", "july", "march", "august"];
// final : ["july", "june", "march", "august"];

let start = ["january", "july", "march", "august"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);

