// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log("LOOPING MAJU");
let row = 5;
let n = 0;
for(let i = 1; i < row; i++ ){
    for(let j = 1; j <= i; j++){
        n += j;
    }
    n += "\n"
}
console.log(n);

console.log("LOOPING MUNDUR");
let rows = 5;
let temp = "";
for(let i = rows; i > 0; i--){
    for(let j = i; j > 0; j--){
        temp += j + " ";
    }
    temp += "\n";
}
console.log(temp);