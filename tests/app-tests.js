const chai = require('chai')
const expect = chai.expect
const app = require('../src/functions')

describe('Translate from English to Kinglon', () => {
    it('Should translate the provided example', () => {
        let input = 'Uhura'

        let output = app.translate(input)

        expect(output).to.equal('0xF8E5 0xF8D6 0xF8E5 0xF8E1 0xF8D0')
    })

    it('Should accept some digraphs', () => {
        let input = 'ch'
        let output = app.translate(input)

        expect(output).to.equal('0xF8D2')

        input = 'gh'
        output = app.translate(input)

        expect(output).to.equal('0xF8D5')

        input = 'nG'
        output = app.translate(input)

        expect(output).to.equal('0xF8DC')

        input = 'tLh'
        output = app.translate(input)

        expect(output).to.equal('0xF8E4')
    })

    it('Should accept ALL digraphs', () => {
        let input = 'chghnGtLh'
        let output = app.translate(input)

        expect(output).to.equal('0xF8D2 0xF8D5 0xF8DC 0xF8E4')
    })

    it('Should accept spaces between words', () => {
        let input = 'ch nGt h'
        let output = app.translate(input)

        expect(output).to.equal('0xF8D2 0x0020 0xF8DC 0xF8E3 0x0020 0xF8D6')
    })

    it('Should accept special characters', () => {
        let input = '012 34 ,.’'
        let output = app.translate(input)

        expect(output).to.equal('0xF8F0 0xF8F1 0xF8F2 0x0020 0xF8F3 0xF8F4 0x0020 0xF8FD 0xF8FE 0xF8E9')
    })
})

describe('This character species', () => {
    it('Should be Human', (done) => {
        let input = 'Uhura'

        app.getSpecies(input)
            .then((output) => {
                expect(output).to.equal('Human')
            })
            .catch((err) => {
                done(err)
            })

        input = 'Kirk'

        app.getSpecies(input)
            .then((output) => {
                expect(output).to.equal('Human')

                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    it('Should be Ocampa', (done) => {
        let input = 'Benaren'

        app.getSpecies(input)
            .then((output) => {
                expect(output).to.equal('Ocampa')

                done()
            })
            .catch((err) => {
                done(err)
            })
    })
})