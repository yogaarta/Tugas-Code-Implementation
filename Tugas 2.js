const reverseWord = (sentence) => {
    if (typeof sentence !== "string") {
        return console.log("Kalimat harus berupa string!")
    }
    let word = ""
    let result = ""
    for (let i = 0; i <= sentence.length - 1; i++) {
        if (sentence[i] !== " ") {
            word += sentence[i]
        }
        if (sentence[i] === " ") {
            result = word + " " + result
            word = ""
        }
    }
    result = word + " " + result
    return console.log(result)
}

reverseWord("Selamat pagi dunia dan segala isinya")