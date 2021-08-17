
//To be used for the Basic Level:
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


// Your code here

let basicChallenge = document.getElementById('basicChallenge');

let allNumbers = (input) => {
    let outputDiv = document.createElement('p')

    for(i = 0; i < input.length; i++) {
        if(i === input.length - 1) {
            outputDiv.append(JSON.stringify(input[i]));
        } else {
            outputDiv.append(JSON.stringify(input[i]) + ', ');
        }
    }

    basicChallenge.append(outputDiv)
}

let evenNumbers = (input) => {
    let outputDiv = document.createElement('p')
    let evenNumbersArr = []

    for(i = 0; i < input.length; i++) {
        if(input[i] % 2 === 0) {
            evenNumbersArr.push(input[i])
        }
    }

    for(i = 0; i < evenNumbersArr.length; i++) {
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

allNumbers(sampleArray)
evenNumbers(sampleArray)
oddNumbers(sampleArray)