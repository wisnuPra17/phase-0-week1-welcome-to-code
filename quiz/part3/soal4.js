// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
//menggunakan for
let max = 100;
console.log("Looping dengan pertambahan 2 : ")
for(let i = 1; i <= max; i+=2){
    if(i % 3 === 0) console.log(i + " kelipatan 3");
}
console.log("\nLooping dengan pertambahan 5 : ")
for(let i = 1; i <= max; i+=5){
    if(i % 6 === 0) console.log(i + " kelipatan 6");
}
console.log("\nLooping dengan pertambahan 9 : ")
for(let i = 1; i <= max; i+=9){
    if(i % 10 === 0) console.log(i + " kelipatan 10");
}

//menggunakan while
console.log("\nLooping dengan pertambahan 2 : ")
let j = 1;
while(j <= max){
    if(j % 3 === 0) console.log(j + " kelipatan 3");
    j += 2;
}
console.log("\nLooping dengan pertambahan 5 : ")
let k = 1;
while(k <= max){
    if(k % 6 === 0) console.log(k + " kelipatan 6");
    k += 5;
}
console.log("\nLooping dengan pertambahan 9 : ")
let l = 1;
while(l <= max){
    if(l % 10 === 0) console.log(l + " kelipatan 10");
    l += 9;
}