const devideAndSort = (angka) => {
    if (typeof angka !== "number") {
        return console.log("Data harus bertipe number!")
    }
    let arrAngka = angka.toString().split("0")
    let result = ""
    for (let i = 0; i <= arrAngka.length - 1; i++) {
        result += arrAngka[i].split("").sort().join("")
    }
    return console.log(Number(result))
}

devideAndSort(98706540321)
