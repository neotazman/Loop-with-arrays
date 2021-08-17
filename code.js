
//To be used for the Basic Level:
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


// Your code here

let basicChallenge = document.getElementById('basicChallenge');

let basic1 = (input) => {
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

let basic2 = (input) => {
    let outputDiv = document.createElement('p')
    let evenNumbers = []
    for(i = 0; i < input.length; i++) {
        if(input[i] % 2 === 0) {
            evenNumbers.push(input[i])
        }
    }
    for(i = 0; i < evenNumbers.length; i++) {
        if(i === evenNumbers.length - 1) {
            outputDiv.append(JSON.stringify(evenNumbers[i]))
        } else {
            outputDiv.append(JSON.stringify(evenNumbers[i]) + ', ')
        }
    }
    basicChallenge.append(outputDiv)
}

basic1(sampleArray)
basic2(sampleArray)