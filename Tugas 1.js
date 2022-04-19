const detectPalindrom = (word) => {
    if (typeof word !== "string"){
        return console.log("Kata harus berupa string")
    }
    let word2 = ""
    for (let i = word.length -1; i >= 0; i--){
        word2 += word[i]
    }
    if (word.toLowerCase() === word2.toLowerCase()){
        return console.log("Ini Kata Palindrom")
    }
    return console.log("Ini bukan kata Palindrom")
}

detectPalindrom("pagi")