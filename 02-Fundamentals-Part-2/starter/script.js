'use strict';

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/ 3;

// function checkWinner(avgDolphins, avgKolas) {
//     if (avgDolphins >= 2*avgKolas) 
//         console.log( `Dolphin Wins 🏆 (${avgDolphins} vs ${avgKolas})` )
//     else if (avgKolas >= 2*avgDolphins) 
//         console.log( `Kolalas Wins 🏆 (${avgKolas} vs ${avgDolphins})` )
//         else
//         console.log('Nobody Wins 🙁')
// }

// checkWinner(calcAverage(44,23,71), calcAverage(65,54,49));
// checkWinner(calcAverage(85,54,41), calcAverage(23,34,27));

const john = {
    fistName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,

    fullName: function() {
        return this.fistName + ' ' + this.lastName;
    },

    calcBMI: function() {
        this.bmi = this.mass/ (this.height ** 2);
        return this.bmi;
    }
}

const mark = {
    fistName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,

    fullName: function() {
        return this.fistName + ' ' + this.lastName;
    },

    calcBMI: function() {
        this.bmi = this.mass/ (this.height ** 2);
        return this.bmi;
    }
}

function printResult() {
    let bigger = john;
    let smaller = mark;
    if (john.calcBMI() < mark.calcBMI()) {
        bigger = mark;
        smaller = john;
    }

    console.log(`${bigger.fullName()}'s BMI (${bigger.calcBMI()}) is higher than ${smaller.fullName()}'s BMI (${smaller.calcBMI()})` )
}

printResult()