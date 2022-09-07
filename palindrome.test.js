const pal = require('./palindrome');

test('Is palindrome - 112211', () => {
    expect(pal(112211)).toBe(true);
})
test('Not palindrome - 12112211', () => {
    expect(pal(12112211)).toBe(false);
})

describe('Return - Not valid', () => {
    test('Plindrome of letters', () => {
        expect(pal('aabbaa')).toBe('Not valid')
    });

    test('Plindrome of symbols', () => {
        expect(pal('--==++')).toBe('Not valid')
    })
})
   