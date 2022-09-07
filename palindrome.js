const palindrome = n => {
    if (n < 0 || typeof n !== 'number') return 'Not valid';
    return n.toString().split('').reverse().join('') === n.toString();
}

module.exports = palindrome;