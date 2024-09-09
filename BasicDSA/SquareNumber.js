//find the Perfectsquare root of number

// psudo code
//loop from 1 to n , and check if n* n is equal to square root of that particular number
//since it is a perfect square  the no of iterations will be around root of that number

function perfectSquare(n) {
  for (let i = 1; i <= n; i++) {
    if (i * i == n) {
      return i;
    }
  }
}

console.log(perfectSquare(25));
