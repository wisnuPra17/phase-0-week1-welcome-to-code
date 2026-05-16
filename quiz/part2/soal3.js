// Soal 3. Breaking Sentence (Again) using Substring

// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word = "wow JavaScript is so cool";
let exampleFirstWord3 = word.substring(0, 3);

console.log("First Word: " + exampleFirstWord3);
//code di bawah sir
let secondWord = word.substring(4, 14);
console.log("Second Word: " + secondWord);
let thirdWord = word.substring(15, 17);
console.log("Third Word: " + thirdWord);
let fourthWord = word.substring(18, 20);
console.log("Fourth Word: " + fourthWord);
let fifthWord = word.substring(21, 25);
console.log("Fifth Word: " + fifthWord);
// ekspektasi output
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool