'use strict'

const calcAverage = (A, B, C) => (A + B + C) / 3

//test data for the average
const avgDolphin = calcAverage(44, 23, 71);
const avgKoaloas = calcAverage(65, 54, 49);



function checkWinner(avgDolphin, avgKoaloas) {



    if (avgDolphin >= 2 * avgKoaloas) {
        console.log(`team Dolphin wins ${avgDolphin} vs ${avgKoaloas} `);
    }

    else if (avgKoaloas >= 2 * avgDolphin) {
        console.log(`team koaloas win ${avgKoaloas} vs ${avgDolphin}`);
    }

    else {
        console.log('no body wins....');
    }

}


checkWinner(avgDolphin, avgKoaloas);

