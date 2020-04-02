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
      let bothConditions = arr[i].genre.includes('Drama') && arr[i].director.includes('Steven Spielberg');
      if(bothConditions) {
       totalCount++
     }
    }
    return totalCount
  };
  

// ITERATION 3: Alphabetic Order - Order by title and print the first 20 titles

function compare(movieA,movieB) {
    const closerToA= movieA.title;
    const furtherFromA = movieB.title;

    let comparison = 0;
    if (closerToA > furtherFromA) {
        comparison = 1;
    } else if (closerToA < furtherFromA) {
        comparison = -1;
    // } else if (closerToA.match(/^\d/) == true || furtherFromA.match(/^\d/) == true){
    //     comparison = 0;
    }
    return comparison
    
}

let alphArray = movies.sort(compare);

function orderAlphabetically(arr){
    let finalAlphArr = [];
    let firstTwenty = [];
    for(i=0; i<arr.length; i++){
        let justTitleObj = {title: "something"};
        justTitleObj.title = alphArray[i].title;
        finalAlphArr.push(justTitleObj);
    }
    //return finalAlphArr;

    // ++ Attempt to remove a title if it contains a number ++

    // if(finalAlphArr.title.match(/^\d/) == true)){
    //     delete finalAlphArr.title
    // }

    if(finalAlphArr.length>=20){
            for(i=0; i<20; i++){
                firstTwenty.push(finalAlphArr[i])
            }
    } else if (arr.length<20){
            for(i=0; i<arr.length; i++){
                firstTwenty.push(finalAlphArr[i])
            }
    }
    return firstTwenty
    }
//
//orderAlphabetically(movies);








// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (arr) => {

}

ratesAverage();

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
