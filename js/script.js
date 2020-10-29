//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."
let jobTitle = `Artist`
let myFutureCity = `Toronto`
let annualSalary = 15000
let companyName = `Yes Productions`
document.querySelector(".ex1").innerHTML = ( `You will be a ${jobTitle} in ${myFutureCity}, making $${annualSalary} at ${companyName}`)
console.log(`You will be a ${jobTitle} in ${myFutureCity}, making $${annualSalary} at ${companyName}`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.
let randomPerson = `Maria`
let birthYear = 1986
let currentYear = 2020
let ageToday = currentYear - birthYear
document.querySelector(".ex2").innerHTML = ( `${randomPerson} is ${ageToday} years old.`)
console.log(`${randomPerson} is ${ageToday} years old.`)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".
let currentAge = 30
let supplyDaily = 2
let maxAge = 75 
let maxSupply = (maxAge - currentAge)*2 
document.querySelector(".ex3").innerHTML = ( `You will need ${maxSupply} of favorite snack to last you until the ripe old age of ${maxAge}`)
console.log(`You will need ${maxSupply} of favorite snack to last you until the ripe old age of ${maxAge}`)

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let radius = 24
let pi = Math.PI
let circumference = 2*(pi * radius)
let area = pi * radius **2
document.querySelector(".ex4").innerHTML = ( `The circumference is ${circumference}cm. The area is ${area}.`)
console.log(`The circumference is ${circumference}cm. The area is ${area}.`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
let celsius = 30
let cToF = celsius *9/5 + 32
let fahrenheit = 50
let fToC = (fahrenheit-32)*5/9
document.querySelector(".ex5").innerHTML = `${celsius}°C is ${cToF}°F.${fahrenheit}°F is ${fToC}°C `
console.log(`${celsius}°C is ${cToF}°F.${fahrenheit}°F is ${fToC}°C `)


//Lab5//
// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(a){
    return  a**2;
}
let num = 22
document.querySelector(".ex6").innerHTML = `The square of ${num} is ${squareNumber(num)}`
squareNumber(num)
 console.log(`The square of ${num} is ${squareNumber(num)}`)

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(a){
    let resultHalf = a/2
    return resultHalf 
}
let b = 5
document.querySelector(".ex7").innerHTML = `Half of ${b} is ${halfNumber(b)}`
halfNumber(b)
console.log(`Half of ${b} is ${halfNumber(b)}`)

// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf(a,b){
    let resultPrcnt = a/b*100
    return resultPrcnt 
}
let numOne = 7
let numTwo = 10
document.querySelector(".ex8").innerHTML = `${numOne} is ${percentOf(numOne,numTwo)}% of ${numTwo}`
percentOf(numOne,numTwo) 
console.log(`${numOne} is ${percentOf(numOne,numTwo)}% of ${numTwo}`)



// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.
function areaOfCircle(r){
let resultArea = pi*r**2
return resultArea
}
let radiusOfCircle = 2
document.querySelector(".ex9").innerHTML = `Area of a circle with radius ${radiusOfCircle}cm is ${areaOfCircle(radiusOfCircle)} sq cm`
areaOfCircle(radiusOfCircle)
console.log(`Area of a circle with radius ${radiusOfCircle}cm is ${areaOfCircle(radiusOfCircle)} sq cm`)

// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).
function runAll(h) {
  
    console.log (`half of ${h} is ${x}, square of ${x} is ${y}, area of circle withradius ${y} is ${z}, and ${z} is ${p}% of ${y}.`)
    return x, y
}
let someNum= 12
let x = halfNumber(someNum)
let y = squareNumber(x)
let z = areaOfCircle(y)
let p = percentOf(z,y)
document.querySelector(".ex10").innerHTML = `Half of ${someNum} is ${x}, square of ${x} is ${y}, area of circle with radius ${y} is ${z}, and ${z} is ${p}% of ${y}.`
runAll(someNum)
//LAB 6//
//In HTML, create an <ol>
//Within the ordered-list, add 10 <li>
//Give each list-item a unique id (ex1, ex2, etc, for example)
//Instead of outputting to the console, put the string output from the previous 10 exercises to the document, with each string of output going into its own list item. (There are a few ways to write this solution, consideration given to methods that are more efficient - as long as they're still readable and logical)

