function palindrome(num, count) {
    count = count || 0;
    let str = num.toString();
    let strReverse = str.split("").reverse().join("");
    if (str === strReverse) {
      return {
        result: num,
        steps: count,
      };
    }
    return palindrome(num + Number(strReverse), count + 1);
  }
  
  console.log(palindrome(54));
  console.log(palindrome(122));
  console.log(palindrome(181));