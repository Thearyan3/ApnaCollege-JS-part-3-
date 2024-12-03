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

// let start = ["january", "july", "march", "august"];
// start.shift();
// start.shift();
// start.unshift("june");
// start.unshift("july");
// console.log(start);


//Question No. 4 - For the given start state of an array, change it to final form using splice.
// start : ["january", "july", "march", "august"];
// final : ["july", "june", "march", "august"];

// let start = ["january", "july", "march", "august"];
// start.splice(0, 2, "july", "june");
// console.log(start)


//Question No. 5 - Return the index of the "javascript" from the given array, if it was reversed.
// let arr = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
// console.log(arr.reverse().indexOf("javascript"));


//Question No. 6 - Create a 2D array which represents the tic-tac-toe game.
// let arr = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
// console.log(arr);
// arr[0][1] = 'O';
// console.log(arr);