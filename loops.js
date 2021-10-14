
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

//test the functions

//starting with basic challenge tests
basicChallenge.append(allNumbers(sampleArray)) 
basicChallenge.append(allNumbers(edgeCaseArray)) 

basicChallenge.append(evenNumbers(sampleArray)) 
basicChallenge.append(evenNumbers(edgeCaseArray)) 

basicChallenge.append(oddNumbers(sampleArray)) 
basicChallenge.append(oddNumbers(edgeCaseArray)) 

basicChallenge.append(eightNumbers(sampleArray)) 
basicChallenge.append(eightNumbers(edgeCaseArray)) 

basicChallenge.append(squaredNumbers(sampleArray)) 
basicChallenge.append(squaredNumbers(edgeCaseArray)) 

basicChallenge.append(totalSum(sampleArray)) 
basicChallenge.append(totalSum(edgeCaseArray)) 

basicChallenge.append(smallestNumber(sampleArray))
basicChallenge.append(smallestNumber(edgeCaseArray))

basicChallenge.append(largestNumber(sampleArray))
basicChallenge.append(largestNumber(edgeCaseArray))

//now the intermediate challenges
intermediateChallenge.append(divisibleByThree())
console.log(divisibleByThree())

intermediateChallenge.append(divisibleBySeven())

intermediateChallenge.append(sevenAndThree())
console.assert(sevenAndThree())

intermediateChallenge.append(oddByFive())

intermediateChallenge.append(sumToTwenty())

intermediateChallenge.append(upPositives(3, 16))
intermediateChallenge.append(upPositives(40, '31'))

intermediateChallenge.append(downPositives(27, 4))
intermediateChallenge.append(downPositives(6))

intermediateChallenge.append(upNegatives(-42, -15))
intermediateChallenge.append(upNegatives('-40', -23))

intermediateChallenge.append(downNegatives(-4, -30))
intermediateChallenge.append(downNegatives(-12, 26))

intermediateChallenge.append(oddPositiveToNegative(14, -26))
intermediateChallenge.append(oddPositiveToNegative(26, "negative five"))