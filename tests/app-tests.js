const chai = require('chai')
const expect = chai.expect
const app = require('../src/app')

describe('Translate from English to Kinglon', () => {
    it('should have that chars', () => {
        let input = 'Uhura'

        let output = app.translate(input)

        expect(output).to.equal('0xF8E5 0xF8D6 0xF8E5 0xF8E1 0xF8D0')
    })
})

describe('This character species', () => {
    it('should be Human', () => {
        let input = 'Uhura'

        let output = app.getSpecies(input)

        expect(output).to.equal('Human')
    })
})