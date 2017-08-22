let translate = function (sentence) {
    // English chars vs Klingon alphabet
    const pIqaD = new Map([
        ['a', '0xF8D0'],
        ['b', '0xF8D1'],
        //['ch', '0xF8D2'],
        ['​D', '0xF8D3'],
        ['e', '0xF8D4'],
        //['gh', '0xF8D5'],
        ['​H', '0xF8D6'],
        ['​I', '0xF8D7'],
        ['​j', '0xF8D8'],
        ['​l', '0xF8D9'],
        ['​m', '0xF8DA'],
        ['n', '0xF8DB'],
        //['​ng', '0xF8DC'],
        ['​o', '0xF8DD'],
        ['p', '0xF8DE'],
        ['q', '0xF8DF'],
        ['Q', '0xF8E0'],
        ['r', '0xF8E1'],
        ['S', '0xF8E2'],
        ['t', '0xF8E3'],
        //['tlh', '0xF8E4'],
        ['u', '0xF8E5'],
        ['v', '0xF8E6'],
        ['w', '0xF8E7'],
        ['y', '0xF8E8'],
        ['’', '0xF8E9'],
        ['0', '0xF8F0'],
        ['1', '0xF8F1'],
        ['2', '0xF8F2'],
        ['3', '0xF8F3'],
        ['4', '0xF8F4'],
        ['5', '0xF8F5'],
        ['6', '0xF8F6'],
        ['​7', '0xF8F7'],
        ['8', '0xF8F8'],
        ['9', '0xF8F9'],
        [',', '0xF8FD'],
        ['.', '0xF8FE'],
        [' ', '0x0020']
    ])

    let output = ''

    for (let i = 0; i < sentence.length; i++) {
        // ASCII code
        let char = sentence.charCodeAt(i)

        // String representation
        let str = String.fromCharCode(char)

        // Checking digraphs
        // All possible combinations among upper and lower case
        if ((str === 'c' || str === 'C') &&
            (sentence.charAt(i + 1) === 'h') || sentence.charAt(i + 1) === 'H') {
            // Ignore next char
            i += 1

            append('0xF8D2', i)
        } if ((str === 'g' || str === 'G') &&
            (sentence.charAt(i + 1) === 'h') || sentence.charAt(i + 1) === 'H') {
            // Ignore next char
            i += 1

            append('0xF8D5', i)
        } if ((str === 'n' || str === 'N') &&
            (sentence.charAt(i + 1) === 'g') || sentence.charAt(i + 1) === 'G') {
            // Ignore next char
            i += 1

            append('0xF8DC', i)
        } if ((str === 't' || str === 'T') &&
            (sentence.charAt(i + 1) === 'l' || sentence.charAt(i + 1) === 'L') &&
            (sentence.charAt(i + 2) === 'h' || sentence.charAt(i + 2) === 'H')) {
            // Ignore next 2 chars
            i += 2

            append('0xF8E4', i)
        }
        // Individual chars
        else {
            let isUppercase = char >= 65 && char <= 90

            let isLowercase = char >= 97 && char <= 122

            let hex = pIqaD.get(str)

            // Checking both uppercase and lowercase scenarios
            // * Only when char is not found
            if (!hex && (isUppercase || isLowercase)) {
                hex = pIqaD.get(String.fromCharCode(isUppercase ? char + 32 : char - 32))
            }

            //console.log(str, hex ? hex : '')

            append(hex, i)
        }
    }

    // Removing space at the end
    function append(value, i) {
        if (value) {
            output += value + (i < sentence.length ? ' ' : '')
        }
    }

    return output
}

let getSpecies = function (character) {
    return undefined
}

module.exports.translate = translate
module.exports.getSpecies = getSpecies

// 1st parameter: node path
// 2nd parameter: script path
// 3rd and so on: console parameters
if (process.argv.length < 3) {
    console.error('ERROR: It requires at least one parameter')

    return
}

const sentence = process.argv.slice(2).join(' ')

console.log(translate(sentence))