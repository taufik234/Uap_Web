list_barang = [
  { kode: "001", barang: "A", harga: 10000 },
  { kode: "002", barang: "B", harga: 20000 },
  { kode: "003", barang: "C", harga: 30000 },
  { kode: "004", barang: "D", harga: 40000 },
];
function tambahkanBarang() {
  var kodeBarang = document.getElementById("kodeBarang").value;
  var banyakBarang = document.getElementById("jumlahBarang").value;
  var selecteditem = list_barang.find((item) => item.kode == kodeBarang);
  var total;
  if (selecteditem) {
    total = selecteditem.harga * banyakBarang;
    alert("Total pembayaran adalah :" + total);
    var uang = prompt("Masukan uang user :");
    var kembalikan = uang - total;
    if (uang < total) {
      alert("uang tidak ccukup");
    } else {
      alert("uang pembalian : " + uang + "\ntotal bayar :" + total + "\ntotal kembalian" + kembalikan);
    }
  } else {
    alert("Banyak barang kode" + kodeBarang + "tidak di temukan");
  }
}
