/**
 * Reduce duplicate characters to a desired minimum
 */
exports.reduceString = function(str, amount) {


};

/**
 * Wrap lines at a given number of columns without breaking words
 */
exports.wordWrap = function(str, cols) {
};

/**
 * Reverse a String
 */
exports.reverseString = function(str) {

    if (str.length === 1) {
        return str;
    }
    if (str.length === 2) {
        return str.charAt(1).concat(str.charAt(0));
    }
    return exports.reverseString(str.substring(1)).concat(str.charAt(0));
};

/**
 * Check if String is a palindrome
 */
exports.palindrome = function(str) {

    return Object.is(str, exports.reverseString(str));
};
