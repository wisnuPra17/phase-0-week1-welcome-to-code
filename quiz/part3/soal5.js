// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****
let star = "";
for (let i = 0; i < input; i++) {   
    for (let j = 0; j <= i; j++) {  
        star += "*";
    }
    star += "\n";
}
console.log(star);