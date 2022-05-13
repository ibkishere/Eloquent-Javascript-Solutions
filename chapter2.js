// Exercise 1
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// for every increment it will print out the number of "#" corresponding to the count number of that increment limit is <= 7 or < 8
//no of counts ==  console.log(#) 
// normally its writing console.log that is printing  1 to 7 "#" s the lines the loop is just incrementing the number of times you'll 
for (let line = "#"; line.length < 8 ; line+= "#" ) {
    console.log(line)
}
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)


for (let number = 1 ; number < 101; number++) {
    console.log(number)
    if (number % 3 == 0 ) {
        console.log("Fizz")
    }
    if (number % 5 == 0 ) {
        console.log("Buzz")
    }
    if (number % 3 == 0 && number % 5 == 0 ) {
        console.log("FizzBuzz")
    }
}
