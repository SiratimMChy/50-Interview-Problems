var isPalindrome = function (s) {
    let str = '';

    for (let char of s.toLowerCase()) {
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            str += char;
        }
    }

    const reversed = str.split('').reverse().join('');

    return str === reversed;
};

console.log(isPalindrome("amanaplanacanalpanama"));
