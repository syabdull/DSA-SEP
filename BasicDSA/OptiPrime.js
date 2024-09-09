// psudoCode
// we know the factors always comes in pairs
//exampe 2 and 5 is factors of 10
//if considre first one as a and second one as b
//we can also write as a*n/a(b)
//factors starts repeating after a<=n/a
// we can generate the equaltion a*a<=n;
//apow2<=n
//a<=rootn
//no of iterations in wrost case will be squareroot number of iteration

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(7));
