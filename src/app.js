'use strict'

const f = require('./functions')

function main() {
    // 1st parameter: node path
    // 2nd parameter: script path
    // 3rd and so on: console parameters
    if (process.argv.length < 3) {
        console.error('ERROR: It requires at least one parameter')

        return
    }

    const sentence = process.argv.slice(2).join(' ')

    console.log(f.translate(sentence))

    f.getSpecies(sentence)
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.error(err)
        })
}

// Main function invoked ONLY via shell
main()