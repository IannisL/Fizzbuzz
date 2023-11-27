// Loop through all numbers from 1 to 100.
// Loop through all numbers from 1 to 100.
for (let num = 1; num <= 100; num++) {
    // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    if ((num % 3 == 0) && (num % 5 == 0)) {
        console.log("Fizz Buzz.");
    }
    // If a number is divisible by 3, log “Fizz.”
    else if (num % 3 == 0) {
        console.log("Fizz.");
    }
    // If a number is divisible by 5, log “Buzz.”
    else if (num % 5 == 0) {
        console.log("Buzz.");
    }
    // If a number is not divisible by either 3 or 5, log the number.
    else {
        console.log(num);
    }
}
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.


// let numX = 1;
// while (numX <= 100) {
//     if ((numX % 3 == 0) && (numX % 5 == 0)) {
//         console.log("Fizz Buzz.");
//     }
//     // If a number is divisible by 3, log “Fizz.”
//     else if (numX % 3 == 0) {
//         console.log("Fizz.");
//     }
//     // If a number is divisible by 5, log “Buzz.”
//     else if (numX % 5 == 0) {
//         console.log("Buzz.");
//     }
//     // If a number is not divisible by either 3 or 5, log the number.
//     else {
//         console.log(numX);
//     }
//     numX++;
// }







// Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
// Begin with the following task:

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.


// After you have implemented the above:
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
// Using the original CSV example data, here is what the result of this step should look like:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// becomes
// [["ID", "Name", "Occupation", "Age"], ["42", "Bruce", "Knight", "41"], ["57", "Bob", "Fry Cook", "19"], ["63", "Blaine", "Quiz Master", "58"], ["98", "Bill", "Doctor’s Assistant", "26"]]



/*
// feeling loopy
// loop through the string
*/

