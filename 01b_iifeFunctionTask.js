

//a

 ((arr)=>{
  for(let num of arr){
    if(num%2!=0)
      console.log(num);
  }
})([1,2,3,4,5,6,7]);










//b
let titleCase = ((arr)=>{
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
})(['hi there', 'HELLO WORLD','gUvI']);


// console.log(titleCase);










//c

let sumOfArray = ((arr)=>{
  let result = 0;
  for(let num of arr){
    result +=num;
  }
  return result;
})([4,5]);

// console.log(sumOfArray);










//d

let primeNo = ((arr)=>{
  return arr.filter(element=>check(element));
})([1,2,3,4,5,6,7,8,9,10,11]);
  
function check(num){
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

// console.log(primeNo);










//e

let isPalindrom = ((arr)=>{
  arr = arr.map(String);
  return arr.filter(element => checkPalindrom(element));
})([12321, "pop", "hello", "23"]);


function checkPalindrom(str){
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

// console.log(isPalindrom)












//f

let median = ((arr1,arr2)=>{
  return (arr1.pop()+arr2[0])/2
})([1,2,3],[4,5,6]);

// console.log(median);












//g

let isDuplicate = ((arr)=>{
  return arr.filter((element,index)=> checkDuplicate(element,arr,index))
})([1,2,2,3,4,7,5,6,5,5]);

function checkDuplicate(num,arr,index){
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

// console.log(isDuplicate);












//h

let rotateArray = ((arr,k)=>{
  for(let i =0; i<k; i++){
    arr.splice(0,0,arr.pop());
  }
  return arr;
})([1,2,3,4,5],3);

// console.log(rotateArray);