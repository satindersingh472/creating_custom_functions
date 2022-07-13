// creating a function to add two numbers and mutliply the outcome with 5
function multiply_numbers(num1, num2) {
    let add_numbers = num1 + num2;
    let multiply_by_5 = add_numbers * 5;
    return multiply_by_5;
}
// declaring a multiply variable to store the outcome of the multiply_numbers function
let multiply = multiply_numbers(5, 5);
// displaying the outcome of multiply variable
console.log(multiply);

multiply = multiply_numbers(10, 10);
console.log(multiply);

multiply = multiply_numbers(50,50);
console.log(multiply);

// function will return true if length if the string argument is greater than 10
function greater_than_10(randomword) {
    // if function will check the randomword for its character length
    if (randomword.length > 10) {
        return true;
    } else {
        return false;
    }

}
// word variable will store the value for greater than 10 function
let word = greater_than_10("satinder");
// console.log will show the output of word varible either true or false
console.log(word);

word = greater_than_10("satinder singh");
console.log(word);

word = greater_than_10("sam");
console.log(word);


// function starts_with_ph will return the first value in the arrays starts with "ph" 
function starts_with_ph(argument) {
    let counter = 0;
    while (counter < argument.length) {
        // the if condition will check for the first value in the array that start with ph using .startsWith builtin function
        if (argument[counter].startsWith("ph")) {
            return argument[counter];
        }
        counter++;
    }
}
// dictionary array is the random array
let dictionary_array1 = [`potato`, `phrase`, `phase`, `phone`, `pharma`];
// variable dictionary will store the value for starts with ph function
let dictionary = starts_with_ph(dictionary_array1);
console.log(dictionary);
 
let dicitonary_array2 = [`prunes`,`prick`,`photos`,`photon`];
dictionary = starts_with_ph(dicitonary_array2);
console.log(dictionary);

let dicitonary_array3 = [`phylisophy`,`particle`,`phrase`];
dictionary = starts_with_ph(dicitonary_array3);
console.log(dictionary);
