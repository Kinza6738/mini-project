const resultDiv = document.getElementById("result");

let arr;
arr = window.prompt("Enter numbers separated by commas:");
const num = arr.split(",").map(Number);

function analyzeNumbers() {

  function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  function calculateAverage(arr) {
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
      average += arr[i];
    }
    return average / arr.length;
  }

  function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
    }
    return [min, max];
  }

  function getEvenNumbers(arr) {
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) evens.push(arr[i]);
    }
    return evens;
  }

  function getOddNumbers(arr) {
    let odds = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) odds.push(arr[i]);
    }
    return odds;
  }

  function reverseArray(arr) {
    let reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reverse.push(arr[i]);
    }
    return reverse;
  }

  const sum = calculateSum(num);
  const average = calculateAverage(num);
  const minMax = findMinMax(num);
  const evenNumbers = getEvenNumbers(num);
  const oddNumbers = getOddNumbers(num);
  const reverseNumber = reverseArray(num);

  resultDiv.innerHTML = `
    <p><strong>Sum:</strong> ${sum}</p>
    <p><strong>Average:</strong> ${average}</p>
    <p><strong>Min:</strong> ${minMax[0]}</p>
    <p><strong>Max:</strong> ${minMax[1]}</p>
    <p><strong>Even Numbers:</strong> ${evenNumbers.join(", ")}</p>
    <p><strong>Odd Numbers:</strong> ${oddNumbers.join(", ")}</p>
    <p><strong>Reversed:</strong> ${reverseNumber.join(", ")}</p>
  `;
}
