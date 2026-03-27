for (let i=2; i<=50; i++) {
  let esPrimo = true;
  
  for (let j=2; j<i; j++) {
    if (i % j === 0) {
        esPrimo = false;
        break;
    }
 }
  if (esPrimo) {
    console.log(i);
  }
}