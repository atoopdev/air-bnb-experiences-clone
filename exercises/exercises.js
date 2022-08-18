const names = ["aliCe", "bOb", "charlie", "david"]

// const map1 = names.map(Capitalize)
const map1 = names.map((name) =>{
    console.log("In Capitalize")
    // convert to all lower case
    const lower = name.toLowerCase()
    // console.log(lower)

    // grab first letter
    let firstLetter = lower.charAt(0)
    // // console.log(firstLetter)

    // // capitalize
    firstLetter = firstLetter.toUpperCase()
    // // console.log(firstLetter)

    // // slice rest of word
    const restofWord = lower.slice(1)
    // // console.log(restofWord)

    // // combine
    const capitalizedWord = firstLetter + restofWord
    // console.log(capitalizedWord)
    return capitalizedWord;
    
})
console.log(map1)

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const map2 = pokemon.map((poke) =>{
    return `<p>${poke}</p>`
})
console.log(map2)