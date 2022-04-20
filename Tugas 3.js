const arkFood = (harga, voucher, jarak, pajak) => {
    if (typeof harga !== "number") {
        return console.log("Harga harus berupa data number!")
    }
    if (typeof voucher !== "string") {
        return console.log("Kode voucher harus berupa data string!")
    }
    if (typeof jarak !== "number") {
        return console.log("Jarak harus berupa data number!")
    }
    if (typeof pajak !== "boolean") {
        return console.log("Pajak harus berupa data boolean!")
    }

    let potongan = 0
    if (voucher.toUpperCase() === "ARKAFOOD5" && harga >= 50000 && harga <= 100000) {
        potongan = harga * 50 / 100
    }
    if (voucher.toUpperCase() === "ARKAFOOD5" && harga >= 100000) {
        potongan = 50000
    }
    if (voucher.toUpperCase() === "DITRAKTIRDEMY" && harga >= 25000 && harga <= 50000) {
        potongan = harga * 60 / 100
    }
    if (voucher.toUpperCase() === "DITRAKTIRDEMY" && harga >= 50000) {
        potongan = 30000
    }

    let biayaAntar = 0
    if (jarak <= 2) {
        biayaAntar = 5000
    }
    if (jarak > 2) {
        biayaAntar = 5000 + ((jarak - 2) * 3000)
    }

    let hargaPajak = 0
    if (pajak === true) {
        hargaPajak = harga * 5 / 100
    }

    return console.log(`Harga: ${harga} \nPotongan: ${potongan} \nBiaya Antar: ${biayaAntar} \nPajak: ${hargaPajak} \nSubTotal: ${harga - potongan + biayaAntar + hargaPajak}`)

}

arkFood(100000, "", 3, true)
