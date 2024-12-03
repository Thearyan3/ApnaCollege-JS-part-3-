// Qs 1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number]. For example : for array[7, 9, 0, -2]and n = 3 Print, [7, 9, 0]
let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0, n));


// Qs 2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number]. For example : for array[7, 9, 0, -2]and n = 3 Print, [7, 9, 0]
let arr1 = [7, 9, 0, -2];
let n1 = 3;
console.log(arr.slice(arr.length - n1));


//Qs 3. Write a javascript program to check whether a string is blank or not.
let str1 = "Aryan";
if(str1.length == 0){
    console.log("Empty String");
}else{
    console.log("Not Empty");
}


//Qs 4. Write a javascript program to check whether the character at the given (character) index is lowercase.
let str2 = "AryanTanwar";
let idx = 5
if(str2[idx] === str2[idx].toLowerCase()){
    console.log("Character is lowercase");
}else{
    console.log("Character is not lowercase");
}


//Qs 5. Write a javascript program to strip leading and trailing spaces from a string.
let str3 = "   Hello Aryan Tanwar   ";
console.log(str3.trim());


//Qs 6. Write a  javascript program to check if an element exists in an array or not.
let arr2 = [0, 1, 2, "A", 'a', 'b', 3, 5];
console.log(arr.includes(0, 3, 2, -2));