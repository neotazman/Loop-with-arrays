
//To be used for the Basic Level:
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


// Your code here

let basicChallenge = document.getElementById('basicChallenge'); // the element that is displaying the outputDivs

let allNumbers = (input) => {
    let outputDiv = document.createElement('p') //creates a line with the answers

    for(i = 0; i < input.length; i++) {
        if(i === input.length - 1) { //if it's the last one, there is no comma at the end
            outputDiv.append(JSON.stringify(input[i]));
        } else {
            outputDiv.append(JSON.stringify(input[i]) + ', ');
        }
    }

    basicChallenge.append(outputDiv) //appends the string to the basic challenge div
}

let evenNumbers = (input) => {
    let outputDiv = document.createElement('p')
    let evenNumbersArr = [] //creates a new array to put all the even numbers

    for(i = 0; i < input.length; i++) { //filters out the odd numbers
        if(input[i] % 2 === 0) {
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

    basicChallenge.append(outputDiv)
}

let oddNumbers = (input) => {
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

    basicChallenge.append(outputDiv)
}

let eightNumbers = (input) => {
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

    basicChallenge.append(outputDiv)
}



//run the functions
allNumbers(sampleArray)
evenNumbers(sampleArray)
oddNumbers(sampleArray)
eightNumbers(sampleArray)