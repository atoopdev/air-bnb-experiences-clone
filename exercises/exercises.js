const names = ["aliCe", "bOb", "charlie", "david"]

const map1 = names.map(Capitalize)
console.log(map1)

function Capitalize(word){
    console.log("In Capitalize")
    // convert to all lower case
    const lower = word.toLowerCase()
    console.log(lower)

    // grab first letter
    let firstLetter = lower.charAt(0)
    console.log(firstLetter)

    // capitalize
    firstLetter = firstLetter.toUpperCase()
    console.log(firstLetter)

    // slice rest of word
    const restofWord = lower.slice(1)
    console.log(restofWord)

    // combine
    const capitalizedWord = firstLetter + restofWord
    console.log(capitalizedWord)
    return capitalizedWord
}