
//a

let oddNo = (arr)=>{
  for(let num of arr){
    if(num%2!=0)
      console.log(num);
  }
}

// oddNo([1,2,3,4,5,6,7]);











//b
let titleCase = (arr)=>{
  let result = [];
  for(let string of arr){
    let temp = string.toLowerCase().split(' ');
    let temp2 = [];
    for(let word of temp){
      temp2.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    result.push(temp2.join(' '));
  }
  return result;
}

// console.log(titleCase(['hi there', 'HELLO WORLD','gUvI']));










//c

let sumOfArray = (arr)=>{
  let result = 0;
  for(let num of arr){
    result +=num;
  }
  return result;
}

// console.log(sumOfArray([4,5]));










//d

let primeNo = (arr)=>{
  return arr.filter(element=>check(element));
}
  

let check = (num)=>{
  let flag = true;
  if(num <2)
    flag = false;
  else{
    for(let i=2; i<=num;i++){
      if(num%i==0 && num!=i)
        flag = false;
    }
  }
  return flag;
}

// console.log(primeNo([1,2,3,4,5,6,7,8]));










//e

let isPalindrom = (arr)=>{
  arr = arr.map(String);
  return arr.filter(element => checkPalindrom(element));
}


let checkPalindrom = (str)=>{
  let i=0;
  let j = str.length-1;
  let flag = true;
  while(i<j){
    if(str[i] == str[j]){
      i++;
      j--;
    }
    else{
      flag = false;
      break;
    }
  }
  return flag;
}
// console.log(isPalindrom([12321, "pop", "hello", "23"]));


