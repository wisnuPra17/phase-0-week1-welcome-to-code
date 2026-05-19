// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log("LOOPING PERTAMA (maju)");
let i = 1;
let temp = 0;
while (i <= 10) {
    temp += i;
    i++;
    console.log(`I Love U in ${temp}`);
}
console.log("LOOPING KEDUA (mundur)");
i = 10;
let n = "";
while (i >= 1) {
    n += i + " ";
    console.log(n);
    i--;
}
