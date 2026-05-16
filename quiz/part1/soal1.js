let nama = "Wisnu",
  peran = "";
//code disini gunakan console.log untuk outputnya
console.log("Selamat datang di Game Proxytia");
if (nama === "") {
  console.log("Nama harus diisi!");
} else if (peran === "") {
  console.log(`Pilih peranmu ${nama} untuk memulai game!`);
  listRole();
} else {
  if (peran === "Ksatria") {
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
  } else if (peran === "Tabib") {
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
  } else if (peran === "Penyihir") {
    console.log(
      `Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`,
    );
  } else {
    console.log(
      `Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`,
    );
  }
}
function listRole() {
  console.log("1. Ksatria");
  console.log("2. Tabib");
  console.log("3. Penyihir");
}
