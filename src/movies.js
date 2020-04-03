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

function ratesAverage(arr){
    let sum = 0;
    if(arr.length === 0){
        return 0
    }
    
    for(i=0; i<arr.length; i++){
        if(arr[i].rate){ // check if the rate of the movie exists
            sum += arr[i].rate;
        }
    }

    let avg = sum/arr.length;
    return Number(avg.toFixed(2));
}
// function ratesAverage(arr){
//     movies.reduce(function(sum, movie){
//         if(movie.rate){
//             return sum + movie.rate;
//             }
//         }, 0);
//       let ratingsAverage = sum/movies.length
//       return Number(ratingsAverage.toFixed(2));
      
//     }

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
    let dramaArr = arr.filter((eachMovie) => {
        return eachMovie.genre.indexOf("Drama") >= 0
    })
    return ratesAverage(dramaArr);
}

// function dramaMoviesRate(rr){
//     let justDramas = [];
//     for(i=0; i<movies.length; i++){
//         if(movies[i].genre.includes('Drama')){
//             justDramas.push(movies[i])
//         }
//         return justDramas;
//     }
    // const ratingsSum = movies.reduce(function(sum, movie){
    //     return sum + movie.rate;
    //   }, 0);
    //   let ratingsAverage = ratingsSum/movies.length
    //   let rounded = Math.round(ratingsAverage * 100) / 100
    //   return rounded


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function timeConverter(duration) {
    // '2h 35m' '2h' '36m'
    // let hourInt=0;
    // let minuteInt=0;
    // for(let i=0; i<duration.length; i++){
    //     if(duration[i] === "h"){
    //         hourInt+= Number(duration[i-1])
    //     } else if(duration[i] === "m"){
    //         minInt += Number(duration[i-2] + duration[i-1])
    //     }
    // }
    // return hourInt * 60 + minInt;
    let minutes = 0;
    let array = duration.split("h");

    if(array.length === 1){
        minutes += parseInt(array[0])
    } else if(array[1] === ''){
        minutes += array[0] * 60;
    } else {
        minutes += array[0] * 60 + parseInt(array[1]);
    }
    return minutes;
}

function turnHoursToMinutes(movies) {
    return movies.map(function(movie){
        let copyOfMovie = { ...movie};
        copyOfMovie.duration = timeConverter(movie.duration);
        return copyOfMovie;
    });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
