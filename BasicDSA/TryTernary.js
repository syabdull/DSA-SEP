//doing the samething with ternary operator

function findSmallestOfThree(a, b, c) {
  let small = 0;

  a < b
    ? a < c
      ? (small = a)
      : (small = c)
    : b < c
    ? (small = b)
    : (small = c);
  console.log(small, "smallest value");
}
console.log(findSmallestOfThree(3, 4, 2));
