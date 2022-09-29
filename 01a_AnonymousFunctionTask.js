
//a

let oddNo = function(arr){
  for(let num of arr){
    if(num%2!=0)
      console.log(num);
  }
}

// oddNo([1,2,3,4,5,6,7]);









//b
let titleCase = function(arr){
  let result = [];
  for(let string of arr){
    let temp = string.toLowerCase().split(' ');
    let temp2 = []
    for(let word of temp){
      temp2.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    result.push(temp2.join(' '))
  }
  return result;
}

// console.log(titleCase(['hi there', 'HELLO WORLD','gUvI']));








//c

let sumOfArray = function(arr){
  let result = 0;
  for(let num of arr){
    result +=num;
  }
  return result;
}

// console.log(sumOfArray([4,5]))










//d

let primeNo = function(arr){
  return arr.filter(element=>check(element));
}
  
let check = function(num){
  let flag = true;
  if(num <2)
    flag = false;
  else{
    for(let i=2; i<=num;i++){
      if(num%i==0 && num!=i)
        flag = false;
    }
  }
  return flag
}

// console.log(primeNo([1,2,3,4,5,6,7,8]));











//e

let isPalindrom = function(arr){
  arr = arr.map(String);
  return arr.filter(element => checkPalindrom(element));
}

let checkPalindrom = function(str){
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
// console.log(isPalindrom([12321, "pop", "hello", "23"]))












//f

let median = function(arr1,arr2){
  return (arr1.pop()+arr2[0])/2
}
// console.log(median([1,2,3],[4,5,6]))












//g

let isDuplicate = function(arr){
  return arr.filter((element,index)=> checkDuplicate(element,arr,index))
}

let checkDuplicate = function(num,arr,index){
  let j = arr.length-1;
  let flag = true;
  while(j > index){
    if(num == arr[j]){
      flag = false;
      break;
    }
    else{
      j--;
    }
  }
  return flag;
}

// console.log(isDuplicate([1,2,2,3,4,7,5,6,5,5]))












//h
let rotateArray = function(arr,k){
  for(let i =0; i<k; i++){
    arr.splice(0,0,arr.pop());
  }
  return arr;
}

// console.log(rotateArray([1,2,3,4,5],3))