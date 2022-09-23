// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

// const markHeight = 1.88;
// const markWeight = 95;
// const johnHeight = 1.76;
// const johnWeight = 85;

// function bmi_calculate(height, weight) {
//     return weight/ height ** 2;
// }

// const isMarkBMIHigher = bmi_calculate(markHeight, markWeight) > bmi_calculate(johnHeight, johnWeight)

// console.log('Is Mark BMI Higher? ', isMarkBMIHigher);


// const dolphineScores = [96,108,89]
// const kolalaScores = [88,91,110]

// const dolphineScores = [97,112,101]
// const kolalaScores = [109,95,123]

// const dolphineScores = [96,108,89]
// const kolalaScores = [88,91,110]

// const dolphineScores = [96,108,89]
// const kolalaScores = [88,91,110]

// function getAverage(scores) {
//     let count = scores.length
//     let total = 0
//     for (i=0; i< count; i++) {
//         total += scores[i]
//     }
//     return total/count;
// }


// const dophinAvg = getAverage(dolphineScores);
// const kolalaAvg = getAverage(kolalaScores);

// if (( dophinAvg < kolalaAvg) && kolalaAvg > 100 ) {
//     console.log('Kolala Wins !!');
// } else if (( dophinAvg > kolalaAvg) && dophinAvg > 100) {
//     console.log('Dolphin Wins !!');
// } else if ((dophinAvg === kolalaAvg) && dophinAvg > 100) {
//     console.log('Match is a draw :) ');
// } else {
//     console.log(`The score is Dolphin: ${dophinAvg}; Kolala: ${kolalaAvg}. Nobody wins.`);   
// }

const bill = Number(prompt('Enter the bill amount.'));
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

console.log(`Please pay: ${bill + tip}💰; \(Bill: ${bill}, Tip: ${tip}\)`);