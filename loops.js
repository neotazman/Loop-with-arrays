
//To be used for the Basic Level:
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
const edgeCaseArray = [6, 24, 865, 300, '84', 5, 324, 'twenty-seven', 52, 8.32, 99, 333.333, 'popsicles', 43]


// Your code here

//the Basic Challenge
const basicChallenge = document.getElementById('basicChallenge'); // the element that is displaying the outputDivs, i know the outputDivs are now paragraph elements, but it still tells me what the element is

const isNumber = (input) => { //check if the input is a number
    if(typeof input === 'number') {
        return true;
    } else {
        return false;
    }
}

const allNumbers = (input) => { // writes all numbers
    let outputDiv = document.createElement('p') //creates a line with the answers

    for(let i = 0; i < input.length; i++) {
        if(!isNumber(input[i])) {
            continue; //skips non-numbers
        } else if(i === input.length - 1) { //if it's the last one, there is no comma at the end
            outputDiv.append(JSON.stringify(input[i]));
        } else {
            outputDiv.append(JSON.stringify(input[i]) + ', ');
        }
    }
    return outputDiv;
}

const evenNumbers = (input) => {
    let outputDiv = document.createElement('p')
    let evenNumbersArr = [] //creates a new array to put all the even numbers

    for(let i = 0; i < input.length; i++) { //filters out the odd numbers
        if(input[i] % 2 === 0 && isNumber(input[i])) {
            evenNumbersArr.push(input[i])
        } else {
            continue
        }
    }

    outputDiv.append(evenNumbersArr.join(', '))

    return outputDiv
}

const oddNumbers = (input) => {
    let outputDiv = document.createElement('p')
    let oddNumbersArr = []

    for(let i = 0; i < input.length; i++) {
        if(input[i] % 2 === 1 && isNumber(input[i])) {
            oddNumbersArr.push(input[i])
        }
    }

    outputDiv.append(oddNumbersArr.join(', '))

    return outputDiv
}

const eightNumbers = (input) => { // writes numbers that are divisible by 8
    let outputDiv = document.createElement('p')
    let eightNumbersArr = []

    for(let i = 0; i < input.length; i++) {
        if(input[i] % 8 === 0 && isNumber(input[i])) {
            eightNumbersArr.push(input[i])
        }
    }

    outputDiv.append(eightNumbersArr.join(', '))

    return outputDiv
}

const squaredNumbers = (input) => {
    let outputDiv = document.createElement('p')
    let squaredNumbersArr = []

    for(let i = 0; i < input.length; i++) {
        if(isNumber(input[i])) {
            squaredNumbersArr.push(input[i] ** 2)
        }
    }

    outputDiv.append(squaredNumbersArr.join(', '))

    return outputDiv
}

const totalSum = (input) => {
    let outputDiv = document.createElement('p')
    let sum = 0

    for(let i = 0; i < input.length; i++) {
        if(isNumber(input[i])) {
            sum += input[i]
        }
    }
    
    outputDiv.append(JSON.stringify(sum))

    return outputDiv
}

const smallestNumber = (input) => {
    let outputDiv = document.createElement('p')
    let smallestNum = Number.POSITIVE_INFINITY

    for(let i = 0; i < input.length; i++) {
        if(input[i] < smallestNum && isNumber(input[i])) { //checks if value is a number and is less than all previou numbers
            smallestNum = input[i]
        }
    }
    outputDiv.append(JSON.stringify(smallestNum))
    return outputDiv
}

const largestNumber = (input) => {
    let outputDiv = document.createElement('p')
    let largestNum = Number.NEGATIVE_INFINITY

    for(let i = 0; i < input.length; i++) {
        if(input[i] > largestNum && isNumber(input[i])) {
            largestNum = input[i]
        }
    }
    outputDiv.append(JSON.stringify(largestNum))
    return outputDiv
}

//the Intermediate Challenge
const intermediateChallenge = document.getElementById('intermediateChallenge');

const isInteger = (input) => {
    if(isNumber(input) && input === Math.floor(input)) {
        return true
    } else {
        return false
    }
}

const divisibleByThree = () => {
    let outputDiv = document.createElement('p')
    let threeContainer = []

    for(let i = 1; i < 100; i++) {
        if(i % 3 === 0) {
            threeContainer.push(i)
        }
    }

    outputDiv.append(threeContainer.join(', '))

    return outputDiv
}

const divisibleBySeven = () => {
    let outputDiv = document.createElement('p')
    let sevenContainer = []

    for(let i = 1; i < 100; i++) {
        if(i % 7 === 0) {
            sevenContainer.push(i)
        }
    }

    outputDiv.append(sevenContainer.join(', '))

    return outputDiv
}

const sevenAndThree = () => { // divisible by seven or three
    let outputDiv = document.createElement('p')
    let numContainer = []

    for(let i = 1; i < 100; i++) {
        if(i % 3 === 0 || i % 7 === 0) {
            numContainer.unshift(i) //this is written backwards
        }
    }

    outputDiv.append(numContainer.join(', '))

    return outputDiv
}

const oddByFive = () => { // divisible by five, but has to be odd
    let outputDiv = document.createElement('p')
    let numContainer = []

    for(let i = 1; i < 100; i++) {
        if(i % 5 === 0 && i % 10 !== 0) {
            numContainer.push(i)
        }
    }

    outputDiv.append(numContainer.join(', '))

    return outputDiv
}

const sumToTwenty = () => { //the sum of all the numbers up to twenty
    let outputDiv = document.createElement('p')
    let totalSum = 0

    for(let i = 0; i <= 20; i++) {
        totalSum += i
    }

    outputDiv.append(JSON.stringify(totalSum))
    return outputDiv
}

const upPositives = (a, b) => { //counts every integer up from a to b
    let outputDiv = document.createElement('p')

    if(isInteger(a) && isInteger(b) && a > 0 && b > 0 && a < b) { // checks that the parameters are correct
        for(let i = a; i <= b; i++) {
            if(i === b) {
                outputDiv.append(JSON.stringify(i))
            } else {
                outputDiv.append(JSON.stringify(i) + ', ')
            }
        }
    } else {
        outputDiv.append('Parameters must be positive integers and a must be less than b')
    }

    return outputDiv
}

const downPositives = (a, b) => { //counts every integer down from a to b
    let outputDiv = document.createElement('p')

    if(isInteger(a) && isInteger(b) && a > 0 && b > 0 && a > b) { // checks that the parameters are correct
        for(let i = a; i >= b; i--) {
            if(i === b) {
                outputDiv.append(JSON.stringify(i))
            } else {
                outputDiv.append(JSON.stringify(i) + ', ')
            }
        }
    } else {
        outputDiv.append('Parameters must be positive integers and a must be greater than b')
    }

    return outputDiv
}

const upNegatives = (a, b) => { //counts every integer up from a to b to b
    let outputDiv = document.createElement('p')

    if(isInteger(a) && isInteger(b) && a < 0 && b < 0 && a < b) { // checks that the parameters are correct
        for(let i = a; i <= b; i++) {
            if(i === b) {
                outputDiv.append(JSON.stringify(i))
            } else {
                outputDiv.append(JSON.stringify(i) + ', ')
            }
        }
    } else {
        outputDiv.append('Parameters must be negative integers and a must be less than b')
    }

    return outputDiv
}

const downNegatives = (a, b) => { //counts every integer down from a to b
    let outputDiv = document.createElement('p')

    if(isInteger(a) && isInteger(b) && a < 0 && b < 0 && a > b) { // checks that the parameters are correct
        for(let i = a; i >= b; i--) {
            if(i === b) {
                outputDiv.append(JSON.stringify(i))
            } else {
                outputDiv.append(JSON.stringify(i) + ', ')
            }
        }
    } else {
        outputDiv.append('Parameters must be negative integers and a must be greater than b')
    }

    return outputDiv
}

const oddPositiveToNegative = (a, b) => { //counts odd integers down from postive a to negative b
    let outputDiv = document.createElement('p')
    let returnArray = []

    if(isInteger(a) && isInteger(b) && a > 0 && b < 0 && a > b) { // checks that the parameters are correct
        for(let i = a; i >= b; i--) {
            if(i % 2 === 1 || i % 2 === -1) { //checks for odd numbers
                returnArray.push(i)
            } else {
                continue
            }
        }
    } else {
        outputDiv.append('Parameters must be integers and a must be greater than b')
    }

    outputDiv.append(returnArray.join(', '))

    return outputDiv
}

const convertToArray = (arrayString) => arrayString.innerText.split(', ').map(string => Number(string)) //i already wrote all the code to convert the results to strings so it's easier to just convert them back

console.log(convertToArray(divisibleBySeven()))
//test the functions

//starting with basic challenge tests
basicChallenge.append(allNumbers(sampleArray))
console.assert(Array.isArray(convertToArray(allNumbers(sampleArray))) === true, 'the result is not an array')
console.assert(convertToArray(allNumbers(sampleArray)).length === sampleArray.length, "it's not converting properly")

basicChallenge.append(evenNumbers(sampleArray)) 
console.assert(convertToArray(evenNumbers(sampleArray)).findIndex((element) => element % 2 === 1) === -1, 'not all numbers are even')
console.assert(Array.isArray(convertToArray(evenNumbers(sampleArray))) === true, "it's not an array")

basicChallenge.append(oddNumbers(sampleArray))  
console.assert(convertToArray(oddNumbers(sampleArray)).findIndex((element) => element % 2 === 1) !== -1, 'not all numbers are odd')
console.assert(Array.isArray(convertToArray(oddNumbers(sampleArray))) === true, 'out is not an array')

basicChallenge.append(eightNumbers(sampleArray))  
console.assert(convertToArray(eightNumbers(sampleArray)).findIndex((element) => element % 8 === 0) !== -1, "not all numbers are divisible by eight")
console.assert(Array.isArray(convertToArray(eightNumbers(sampleArray))) === true, 'output is not an array')

basicChallenge.append(squaredNumbers(sampleArray)) 
console.assert(convertToArray(squaredNumbers(sampleArray)).findIndex((element) => Math.sqrt(element) === Math.round(Math.sqrt(element))) !== -1, 'not all numbers are squared')
console.assert(Array.isArray(convertToArray(squaredNumbers(sampleArray))) === true, "it's not an array")

basicChallenge.append(totalSum(sampleArray))  
console.assert(typeof parseInt(totalSum(sampleArray)) === 'number', "it's not displaying a number")
console.assert(parseInt(totalSum(sampleArray).innerText) === sampleArray.reduce((a, b) => a + b), "it's not the total sum")

basicChallenge.append(smallestNumber(sampleArray))
console.assert(typeof parseInt(smallestNumber(sampleArray)) === 'number', "it's not displaying a number")
console.assert(parseInt(smallestNumber(sampleArray).innerText) === 20, "it's not displaying the smallest number")

basicChallenge.append(largestNumber(sampleArray))
console.assert(typeof parseInt(largestNumber(sampleArray)) === 'number', "it's not displaying a number")
console.assert(parseInt(largestNumber(sampleArray).innerText) === 940, "it's not displaying the largest number")

//now the intermediate challenges
intermediateChallenge.append(divisibleByThree())
console.assert(divisibleByThree().innerText === '3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99', "not displaying the container properly")
console.assert(Array.isArray(convertToArray(divisibleByThree())) === true, "it's not displaying an array")

intermediateChallenge.append(divisibleBySeven())
console.assert(divisibleBySeven().innerText === '7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98', 'not displaying the container properly')
console.assert(Array.isArray(convertToArray(divisibleBySeven())) === true, "it's not displaying an array")

intermediateChallenge.append(sevenAndThree())
console.assert(sevenAndThree().innerText === '99, 98, 96, 93, 91, 90, 87, 84, 81, 78, 77, 75, 72, 70, 69, 66, 63, 60, 57, 56, 54, 51, 49, 48, 45, 42, 39, 36, 35, 33, 30, 28, 27, 24, 21, 18, 15, 14, 12, 9, 7, 6, 3', "not displaying the container properly")
console.assert(Array.isArray(convertToArray(sevenAndThree())) === true, "it's not displaying an array")

intermediateChallenge.append(oddByFive())
console.assert(oddByFive().innerText === '5, 15, 25, 35, 45, 55, 65, 75, 85, 95', 'not displaying the container properly')
console.assert(Array.isArray(convertToArray(oddByFive())) === true, "it's not displaying an array")

intermediateChallenge.append(sumToTwenty())
console.assert(sumToTwenty().innerText === '210', "function isn't running properly")
console.assert(typeof parseInt(sumToTwenty().innerText) === 'number', "it's not displaying a number")

intermediateChallenge.append(upPositives(3, 16))
console.assert(Array.isArray(convertToArray(upPositives(8, 24))) === true, "it's not displaying an array")
console.assert(convertToArray(upPositives(1, 6)).findIndex((element) => element === Math.round(element)) !== -1, "it's not displaying integers")

intermediateChallenge.append(downPositives(27, 4))
console.assert(Array.isArray(convertToArray(downPositives(22, 7))) === true, "it's not displaying an array")
console.assert(convertToArray(downPositives(16, 4)).findIndex((element) => element === Math.round(element)) !== -1, "it's not displaying integers")

intermediateChallenge.append(upNegatives(-42, -15))
console.assert(Array.isArray(convertToArray(upNegatives(-80, -56))) === true, "it's not displaying an array")
console.assert(convertToArray(upNegatives(-18, -4)).findIndex((element) => element === Math.round(element)) !== -1, "it's not displaying integers")

intermediateChallenge.append(downNegatives(-4, -30))
console.assert(Array.isArray(convertToArray(downNegatives(-18, -35))) === true, "it's not displaying an array")
console.assert(convertToArray(downNegatives(-8, -21)).findIndex((element) => element === Math.round(element)) !== -1, "it's not displaying integers")

intermediateChallenge.append(oddPositiveToNegative(14, -26))
console.assert(Array.isArray(convertToArray(oddPositiveToNegative(16, -35))) === true, "it's not displaying an array")
console.assert(convertToArray(oddPositiveToNegative(21, -30)).findIndex((element) => element % 2 === 1) !== -1, "they're not all odd")