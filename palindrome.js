const input=document.getElementById('text-input');
const button=document.getElementById('check-btn');
const result=document.getElementById('result');


button.addEventListener('click',checkbtn);




function checkbtn(){
  let receive = input.value
  if(receive.length === 0){
    alert("Please input a value");
    result.classList.remove('class1');
    result.classList.remove('class2');
    return;
  }
  else
  {
    
  console.log('we are good');
  return isPalindrome(input.value);
  }
}

function isPalindrome(str){
  let lowercased = str.toLowerCase();
  let reggex = lowercased.replace(/[^a-z0-9]/g,"");
  let final = reggex.split("").reverse().join("");
  if(final == reggex){
    result.classList.remove('class2');
    result.classList.add('class1');
   return result.innerHTML =`${input.value} is a palindrome`; 
  }
  else
  {
    result.classList.remove('class1');
  result.classList.add('class2');
  return result.innerHTML =`${input.value} is not a palindrome`;}
}

