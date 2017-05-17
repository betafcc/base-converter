const { _throw }     = require('./util.js');
const { abs, floor } = Math;


// (String, String, String) -> String
const convertBase = (digits, a, b) =>
    toDigits(fromDigits(digits , a), b);

// (String, String) -> Number
const fromDigitsInteger = (digits, alphabet) =>
    (digits[0] === '-') ? -fromDigitsNatural(digits.slice(1), alphabet) :
    fromDigitsNatural(digits, alphabet);

// (String, String) -> Number
const fromDigitsNatural = (digits, alphabet) =>
    Array
        .from(digits)
        .reduce((a, b) =>
            alphabet.length * a + fromDigit(b, alphabet)
        , 0);

// (Char, String) -> Number
const fromDigit = (digit, alphabet) =>
    ((index) =>
        (index === -1)
        ? _throw(new RangeError(`Digit '${digit}' not in alphabet '${alphabet}'`))
        : index
    )(alphabet.indexOf(digit));

// TODO
const fromDigits = fromDigitsInteger;

// (Number, String) -> String
const toDigitsInteger = (numberRep, alphabet) =>
    (numberRep < 0) ? '-'.concat(toDigitsNatural(abs(numberRep), alphabet)) :
    toDigitsNatural(numberRep, alphabet);

// (Number, String) -> String
const toDigitsNatural = (numberRep, alphabet) =>
    (alphabet.length === 1) ? repeat(alphabet, numberRep)  :
    (numberRep === 0)       ? toDigit(numberRep, alphabet) :
    toDigitsPositive(numberRep, alphabet);

// (Number, String) -> String
// (Number, String, [Char]) -> String
const toDigitsPositive = (numberRep, alphabet, digits=[]) =>
    (numberRep === 0) ? digits.join('') :
    toDigitsPositive(
        floor(numberRep / alphabet.length),
        alphabet,
        [toDigit(numberRep % alphabet.length, alphabet) , ...digits]
    );

// (Number, String) -> String
const toDigit = (numberRep, alphabet) =>
    (numberRep < 0 || numberRep >= alphabet.length)
    ? _throw(new RangeError(`Number '${numberRep}' out of Range for alphabet '${alphabet}'`))
    : alphabet[numberRep];

// TODO
const toDigits = toDigitsInteger;


// (String, Number) -> String 
const repeat = (str, times) =>
    Array(times)
        .fill()
        .map(el => str)
        .join('');



module.exports = {
    convertBase,
    fromDigits,
    toDigits,
};
