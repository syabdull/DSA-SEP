//find the smallest of three numbers

function findSmall(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}
console.log(findSmall(10, 1, 4));
