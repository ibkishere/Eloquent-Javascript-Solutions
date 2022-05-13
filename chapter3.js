function isEven (N) {
        if (N < 0) {     
            return "N is a negative number"
        }
        else if  (N % 2 === 0) {
        return true 
        }
        else {
        return "N is not an even number"
        }
}
console.log(isEven(4))
// Now we will made this even number checker code a ecursive program

function isEvenRec( M ) {
if (M === 0) {
        return true
}
else if (M < 0) {
    return false
}
else {
    return isEvenRec( M - 2)
}
}
console.log(isEvenRec(8))
// Recursion works by returning to the base case and seeing that its meets it 
// zero is even
// one is odd
// For any other number N its evenness is the same thing as N-2
// Instead of dividing by 2 and seeing that your remainder is zero, we will continually subtract 2 from the M until it reaches the base case

// BEAN COUNTING
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.


function countBs (string) {
    let count = 0
    for (n = 0; n < string.length; n++) {
        if (string[n] === "B" )
                count += 1
    }
    return count
}
console.log(countBs("abbwBfyeyu)"))


function countChar (string, char) {
    let count = 0
    for (n = 0; n < string.length; n++) {
        if (string[n] === char)
                count += 1
    }
    return count
}
console.log(countChar("abbwBfvvvvVVVVeyu", "V"))


