/**
 * Reduce duplicate characters to a desired minimum
 */
exports.reduceString = function(str, amount) {

    var i;
    var result;
    var count;
    for (i = 0, result = "", count = 0; i < str.length; i++) {
        if (count < amount) {
            result = result.concat(str[i]);
            count++;
        }
        if (str[i + 1] !== str[i]) {
            count = 0;
        }
    }
    return result;
};

/**
 * Wrap lines at a given number of columns without breaking words
 */
exports.wordWrap = function(str, cols) {

    var result = "";
    var i = 0;
    var count = 0;
    while (i < str.length) {

        if (str[i] === " " && count >= cols) {
            result += "\n";
            count = 0;
        } else {
            result += str[i];
            count++;
        }
        i++;
    }
    return result;
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
