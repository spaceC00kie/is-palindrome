// given a string, write a function that returns a boolean saying if the string is a palindrome or not

const isPali = str => {
  //make string into array
  let arr = str.split("")
  //define left and right pointer variables
  let left = 0
  let right = arr.length - 1
  //while loop moving pointers in until they cross
  while (left < right) {
    //check if values are same

    //if values are equal return "yes"

    //if values are not equal return "no"

    //move both pointers in
    left++
    right--
  }
}

console.log(isPali("kayak"))

console.log(isPali("testing"))
