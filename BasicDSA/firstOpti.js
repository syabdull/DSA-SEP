//firstOptimization for prime

//psudo code
//starting from 2 and check if the number ie is completely dividing the n if yes inscrease the count , if the
//count becomes 2 just break and return false

//if the count is equal to 1 //it is obviously going to be return true;

function firstOPti(n) {
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
    if (count == 2) {
      return false;
    }
  }

  if (count == 1) {
    return true;
  }
}

console.log(firstOPti(3));
