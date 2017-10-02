
function isPrime(num) {
  if(num>0){
      no = 0;
      for(let i=1; i<=num; i++){
        if(num % i === 0)
          no++;
      }
      if(no ===2)
        return true;    
      else
        return false;
  } else {
    return false;
  }
}


TESTS:

Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
Test Passed
You have passed all of the tests! :)