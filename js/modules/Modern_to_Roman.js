const modernNumerals = {
    units : ['I', 'V', 'X'],
    tens : ['X', 'L', 'C'],
    hundreds : ['C', 'D', 'M'],
    thousands : 'M'
}

const notModernNumerals = /[^\d]/

export const radix = /(?<=^\d)(?=\d{3}$)/

function convertModern () {
  
    let input = inputM.value.split('').reverse() // The input value will be treated from right to left, hence the need to reverse it.

    let arr = []

    for (let i = 0; i < input.length; i++) {
        if (i == 0) {
            arr[3] = digit2letter (input[0], modernNumerals.units)
        } else if (i == 1) {
            arr[2] = digit2letter (input[1], modernNumerals.tens)
        } else if (i == 2) {
            arr[1] = digit2letter (input[2], modernNumerals.hundreds)
        } else if (i == 3) {
            arr[0] = digit2letter (input[3], modernNumerals.thousands)
        }
    }

    return arr.join('')

};

function digit2letter (digit, col) {

    let letter = ''

    if (col == modernNumerals.thousands) {
        for (let i = 0; i < digit; i++) { letter += col }
    } else {        
        if (digit == 1 || digit == 2 || digit == 3) {
            for (let i = 0; i < digit; i++) { letter += col[0] }
        } else if (digit == 4) {
            letter += `${col[0]+col[1]}`
        } else if (digit == 5) {
            letter += col[1]
        } else if (digit == 6 || digit == 7 || digit == 8) {
            letter += col[1]
            for (let i = 0; i < digit - 5; i++) { letter += col[0] }
        } else if (digit == 9) {
            letter += `${col[0]+col[2]}`
        }
    }

    return letter
}

export function modern2roman () {

    inputM.value = inputM.value.replace(notModernNumerals, '')

    inputM.value < 5000 ? inputR.value = convertModern() : inputR.value = ''

    inputM.value = inputM.value.replace(radix, ',') // Adds a thousand separator.
}