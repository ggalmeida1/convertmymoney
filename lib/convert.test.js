const convert = require('./convert')


//successful test

test('Convert cotacao 4 and quantidade 4', () => {
    expect(convert.convert(4,4)).toBe(16)
})


test('Convert 0 to 4', () => {
    expect(convert.convert(0,4)).toBe(0)
})

test('toMoney converts float', () => {
    expect (convert.toMoney(2)).toBe('2.00')
})


test('toMoney converts string', () => {
    expect (convert.toMoney('2')).toBe('2.00')
})