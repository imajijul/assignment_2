// 1. Write a Function named calculateDifference that takes two argument and returns the difference between the first and second argument.
// Program-1

function calculateDifference(a, b){
    return a-b
}

const result = calculateDifference(20, 10)
console.log("Difference: " + result)

// 2. Write a function named isodd that takes one argument and returns true if the number is iddm abd false if it is not.
// Program-2

function isOdd(number){
    if (number %2 !== 0){
        return true
    }
    else{
       return false
    }
}
const checkOddNumber = isOdd(11)
console.log(checkOddNumber)


// 3. Write a function named findMin that takes an array of numbers and returns the smallest number in the array
// Program-3
function findMin(numbers){
    const minNumber = Math.max(...numbers)
    return minNumber
}

const retult3 = findMin([39, 10, 99, 23, 41, 102, 70, 45, 80, 9, 35, 52])
console.log(retult3)

// 4. Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
// Program-4
function filterEvenNumbers(numbers){
    const even = numbers.filter((number)=> {return number%2 ===0})
    return even
}

const Numbers = [11, 30, 39, 10, 99, 23, 41, 102, 70, 45, 80, 9, 35, 52]
const evenNumbers = filterEvenNumbers(Numbers)

console.log(evenNumbers)

// 5. Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
// Prograrm-5
function sortArrayDescending(numbers){
    const descending= numbers.sort((a, b)=>{
        return b - a
    })

    return descending
}

const mixedNumbers = [11, 30, 39, 10, 99, 23, 41, 102, 70, 45, 80, 9, 35, 52]
const order = sortArrayDescending(mixedNumbers)
console.log(order)


// 6. Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
// Program-6

function lowercaseFirstLetter(){
    const str = "I Almost Come to Become Success."
    return str[0].toLowerCase() + str.slice(1)
}
console.log(lowercaseFirstLetter())

// 7. Write a function named coundVowels that takes a string and returns the number of vowels.
// Problem-7

function countVowels(str){
    let vowels = str.match(/[aeiou]/igmd)

     let count =0
     for (let char of vowels){
        count +=1
     }
     return count
}
const text = "A Quick Brown Fox Jumps Over The Lazy Dog" 
const numberOfVowels = countVowels(text)
console.log(numberOfVowels)

// 8. Write a function named findAverage that takes an array of numbers and returns the average of all elements.
// Program-8

function findAverage(arr){
   let sum = 0
   for (let i=0; i<arr.length; i++){
    sum += arr[i]
   }
   return sum/arr.length
}
let numbers = [11, 30, 39, 10, 99, 23, 41, 102, 70, 45, 80, 9, 35, 52]
console.log("Agerage: " + findAverage(numbers).toFixed(3))