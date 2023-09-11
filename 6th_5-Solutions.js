/*
------   1   -------

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

SOLUTION

function warnTheSheep(queue) {
  if (queue[queue.length-1]==="wolf"){
    return "Pls go away and stop eating my sheep"
  }
  else{
    let num = queue.length - ((queue.indexOf("wolf"))+1)
    return `Oi! Sheep number ${num}! You are about to be eaten by a wolf!`
  }
}

------   2   -------

Complete the function which will return the area of a circle with the given radius.

Returned value is expected to be accurate up to tolerance of 0.01.

If the radius is not positive, throw Error.

Example:

circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
circleArea(0);           // throws Error
circleArea(-1);          // throws Error

SOLUTION

function circleArea(radius) {
  if (radius <= 0){
    throw new Error("radius lesser than 0");
  }
  else{
    return (radius * radius * 3.14159265359)
  }
  return ;
}
  
  return [hY,catYears,dogYears];
}


------   3   -------


Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

SOLUTION

function persistence(num) {
    if (num < 10) {
        return 0; 
    } else {
        let result = 1;
        let numStr = num.toString();
        for (let i = 0; i < numStr.length; i++) {
            result *= parseInt(numStr[i]);
        }
        return 1 + persistence(result);
    }
}

------   4   -------

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

SOLUTION 

function sortArray(array) {
    // Create an array of odd numbers from the original array
    const oddNumbers = array.filter(num => num % 2 !== 0);

    // Sort the odd numbers in ascending order
    oddNumbers.sort((a, b) => a - b);

    // Replace the odd numbers in the original array with the sorted odd numbers
    let oddIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            array[i] = oddNumbers[oddIndex];
            oddIndex++;
        }
    }

    return array;
}

------   5   -------

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

SOLUTION

function solution(number){
  let sum = 0
  for (let i = 3; i< number; i++){
    if (i % 3 === 0 || i % 5 === 0){
      sum += i
    }
  }
  return sum
}

*/