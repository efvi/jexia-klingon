const chai = require('chai')
const expect = chai.expect
const app = require('../src/app')

describe('Translate from English to Kinglon', () => {
    it('Simple Provided Test', () => {
        let input = 'Uhura'

        expect(app.translate(input)).to.equal('0xF8E5 0xF8D6 0xF8E5 0xF8E1 0xF8D0')
    })
})

describe('Show character species', () => {
    it('Simple Provided Test', () => {
        let input = 'Uhura'

        expect(app.getSpecies(input)).to.equal('Human')
    })
})