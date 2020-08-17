// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  counter1 has closures so variables cant go outside function and counter2 closure is placed outside the function and has variables that we can access on global.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * they do both use closure but counter1 isn't outside of the function while counter2 does go outside
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * so counter1 is faster, the code is smaller and condensed plus 
 *    we wouldn't have to access global variables to use the function. 
 * 
 * counter2 could be good only if the variables we needed were on the global scope
 *  the same variable would not be accessible as a parameter with its global scope closure
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(points){

 return ` ${Math.floor(Math.random()* Math.floor(points))}` ;

}

console.log(inning(3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore( inning, numberOfInnings){
let result ={
'home': 0,
'away': 0
}
for(let i = 0; i <= numberOfInnings; i++){
  result.home += inning();
  result.away += inning();
}
return result;
}
console.log(finalScore(inning, 9));


 

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

// function scoreboard(finalScore, inning, num){
// let home = 0;
// let away = 0;

// for(i = 0; i<num; i++){
// home += finalScore(inning, i).home;
// away += finalScore(inning, i).away;
// console.log(`1st inning: ${away} - ${home}`)
// }

  




// }


// function inning(){
//   return (Math.floor(Math.random()* 3))
// }
// function getInningScore(callback1, inning){
//   let scores = [];
//   for(let i = 0; i < inning; i++){
//     scores.push({'Home': callback1(), 'Away': callback1()});
//   }
//   return (scores);
// }
// console.log(scoreboard(finalScore, inning, 10));


