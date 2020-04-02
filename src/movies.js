/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)



function compare(movieA,movieB) {
    const firstMovie = movieA.year;
    const secondMovie = movieB.year;

    let comparison = 0;
    if (firstMovie > secondMovie) {
        comparison = 1;
    } else if (firstMovie < secondMovie) {
        comparison = -1;
    }
    //console.log(comparison)
    return comparison
}

let sortedArray = movies.sort(compare);

function orderByYear(arr){
    return sortedArray;
}

orderByYear(movies);

// function returnSingleElement(arr){
//     for(i=0; i<arr.length; i++){
//         let singleElements = [];
//         singleElements.push(arr[2])
//         return singleElements
//     }
// }

// returnSingleElement(sortedArray);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
