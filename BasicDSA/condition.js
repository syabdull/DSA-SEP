//find the smallest of three numbers of find the greatest of three numbers

function findSmallest(a, b, c) {
  if (a < b) {
    if (a < c) {
      return a;
    } else {
      return c;
    }
  } else {
    if (b < c) {
      return b;
    } else {
      return c;
    }
  }
}

console.log(findSmallest(10, 12, 8));
