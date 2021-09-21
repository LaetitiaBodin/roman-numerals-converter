import { radix } from "./Modern_to_Roman.js"

const romanNumerals = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
}

const notRomanNumerals = /[^IVXLCDM]/

const romanNumeration = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/ // May fit an empty string as well.

function convertRoman () {
  
    let input = inputR.value
  
    let number = romanNumerals[input[0]]
    
    for (let i = 1; i < input.length; i++) {
        if (romanNumerals[input[i]] <= romanNumerals[input[i - 1]]) {
            number += romanNumerals[input[i]]
        } else {
            number -= romanNumerals[input[i - 1]]
            number += romanNumerals[input[i]] - romanNumerals[input[i - 1]]
        }
    }
   
    return number.toString().replace(radix, ',') // Adds a thousand separator (the number must be must turned into a string beforehand).

}

export function roman2modern () {

    inputR.value = inputR.value.replace(notRomanNumerals, '')

    romanNumeration.test(inputR.value) && inputR.value != '' ? inputM.value = convertRoman() : inputM.value = ''

}