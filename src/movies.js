/* eslint no-restricted-globals: 'off' */

// ITERATION 1: Ordering by year - Order by year, ascending (in growing order)

function compare(movieA,movieB) {
    const earlierMovie = movieA.year;
    const laterMovie = movieB.year;

    let comparison = 0;
    if (earlierMovie > laterMovie) {
        comparison = 1;
    } else if (earlierMovie < laterMovie) {
        comparison = -1;
    } 
    return comparison
}

let sortedArray = movies.sort(compare);

function orderByYear(arr){
  let finalSortedArr = [];
  for (i=0; i<arr.length; i++){
    let newMovieObj = {year: 0, title: "some title"};
    newMovieObj.year = sortedArray[i].year;
    newMovieObj.title = sortedArray[i].title;
    
    finalSortedArr.push(newMovieObj);

  }
  return finalSortedArr;
}

orderByYear(movies);

//let sortedArrayVar = orderByYear(movies);

// ITERATION 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
    let totalCount = 0
    for(i=0; i<arr.length; i++){
      let bothConditions = movies[i].genre.includes("Drama") && movies[i].director.includes("Steven Spielberg");
      if(bothConditions == true) {
       totalCount++
     };
    }
    return totalCount
  }
  
  howManyMovies(movies);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

let firstTwenty = [];

const orderAlphabetically = (arr) => {
    if(arr.length>=20){
        for(i=0; i<20; i++){
            firstTwenty.push(arr[i])
        }
    } else if (arr.length<20){
        for(i=0; i<arr.length; i++){
            firstTwenty.push(arr[i])
        }
    }
    return firstTwenty
}

orderAlphabetically(movies);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
