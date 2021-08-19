
//To be used for the Basic Level:
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
const edgeCaseArray = [6, 24, 865, 300, '84', 5, 324, 'twenty-seven', 52, 8.32, 99, 333.333, 'popsicles']


// Your code here

const basicChallenge = document.getElementById('basicChallenge'); // the element that is displaying the outputDivs

const isNumber = (input) => { //check if the input is a number
    if(typeof input === 'number') {
        return true;
    } else {
        return false;
    }
}

const allNumbers = (input) => { // writes all numbers
    let outputDiv = document.createElement('p') //creates a line with the answers

    for(i = 0; i < input.length; i++) {
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

    for(i = 0; i < input.length; i++) { //filters out the odd numbers
        if(input[i] % 2 === 0) { //automatically rules out non-numbers
            evenNumbersArr.push(input[i])
        }
    }

    for(i = 0; i < evenNumbersArr.length; i++) { //writes the even numbers into a string
        if(i === evenNumbersArr.length - 1) {
            outputDiv.append(JSON.stringify(evenNumbersArr[i]))
        } else {
            outputDiv.append(JSON.stringify(evenNumbersArr[i]) + ', ')
        }
    }

    return outputDiv
}

const oddNumbers = (input) => {
    let outputDiv = document.createElement('div')
    let oddNumbersArr = []

    for(i = 0; i < input.length; i++) {
        if(input[i] % 2 === 1) {
            oddNumbersArr.push(input[i])
        }
    }

    for(i = 0; i < oddNumbersArr.length; i++) {
        if(i === oddNumbersArr.length - 1) {
            outputDiv.append(JSON.stringify(oddNumbersArr[i]))
        } else {
            outputDiv.append(JSON.stringify(oddNumbersArr[i]) + ', ')
        }
    }

    return outputDiv
}

const eightNumbers = (input) => { // writes numbers that are divisible by 8
    let outputDiv = document.createElement('p')
    let eightNumbersArr = []

    for(i = 0; i < input.length; i++) {
        if(input[i] % 8 === 0) {
            eightNumbersArr.push(input[i])
        }
    }

    for(i = 0; i < eightNumbersArr.length; i++) {
        if(i === eightNumbersArr.length - 1) {
            outputDiv.append(JSON.stringify(eightNumbersArr[i]))
        } else {
            outputDiv.append(JSON.stringify(eightNumbersArr[i]) + ', ')
        }
    }

    return outputDiv
}

const squaredNumbers = (input) => {
    let outputDiv = document.createElement('p')
    let squaredNumbersArr = []

    for(i = 0; i < input.length; i++) {
        if(isNumber(input[i])) {
            squaredNumbersArr.push(input[i] ** 2)
        }
    }

    for(i = 0; i < squaredNumbersArr.length; i++) {
        if(i === squaredNumbersArr.length - 1) {
            outputDiv.append(JSON.stringify(squaredNumbersArr[i]))
        } else {
            outputDiv.append(JSON.stringify(squaredNumbersArr[i]) + ', ')
        }
    }

    return outputDiv
}

const totalSum = (input) => {
    let outputDiv = document.createElement('p')
    let sum = 0

    for(i = 0; i < input.length; i++) {
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

    for(i = 0; i < input.length; i++) {
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

    for(i = 0; i < input.length; i++) {
        if(input[i] > largestNum && isNumber(input[i])) {
            largestNum = input[i]
        }
    }
    outputDiv.append(JSON.stringify(largestNum))
    return outputDiv
}

//test the functions
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
