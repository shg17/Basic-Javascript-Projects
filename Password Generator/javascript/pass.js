// DOM element
const resultEl=document.getElementById('result');
const lengthEl=document.getElementById('length');
const uppercaseEl=document.getElementById('uppercase');
const lowercaseEl=document.getElementById('lowercase');
const numberEl=document.getElementById('numbers');
const symbolsEl=document.getElementById('symbols');
const generateEl=document.getElementById('generate');
const clipboardEl=document.getElementById('clipboard');


// saare functions kai keys isme store kr lenge hum
const randomFunc={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
};
// console.log(typeof(randomFunc));

generateEl.addEventListener('click',()=>{

    // length was a string 
    // to convert to number add + sign
    const length=+lengthEl.value;


   //whether they are checked or not 
    const hasLower=lowercaseEl.checked;
    const hasUpper=uppercaseEl.checked;
    const hasNumber=numberEl.checked;
    const hasSymbol=symbolsEl.checked;

    resultEl.innerHTML=generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length);


    // console.log(typeof(length));
});

// copy password to the clipboard

clipboardEl.addEventListener('click',()=>{
    const textarea=document.createElement('textarea');
    const password=result.innerText;

    if(!password){
        return;

    }
    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied to clipboard');
})


// generate generatePassword function
function generatePassword(lower,upper,number,symbol,length) {
    // 1.initialise password variable
    // 2.filter out unchecked type
    // 3.loop over the length n call a generator function for each type
    // 4.add the final pass to password var

    let generatedPassword='';

    // to count no of checked items
    const typeCount=lower+upper+number+symbol;
    // console.log(typeCount);

    // array of checked values
    // to get keys n then their values we use braces
    // filter to get array with only true checkbox
    const typeArr=[{lower},{upper},{number},{symbol}].filter
    (item =>Object.values(item)[0]
    );
    console.log(typeArr);

    // if there are no true checkbox
    if(typeCount===0)
   {
    return '';
   }
   
// looop through length
   for(let i=0;i<length;i+=typeCount){
       typeArr.forEach(type=>{

        // to get the function name or keys
           const funcName=Object.keys(type)[0];
           console.log(funcName);

        generatedPassword+=randomFunc[funcName]();


        });
   }
  const finalPassword=generatedPassword.slice(0,length);
//   console.log(finalPassword);

return finalPassword;
  
}








// generator function

// this function will always return a lowercase alphabet
function getRandomLower(){
return String.fromCharCode(Math.floor(Math.random()*26)+97);

}
// console.log(getRandomLower());


// this function will return uppercase alphabet
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
    
}
// console.log(getRandomUpper());


// method on string to get any charcter
// console.log(String.fromCharCode(49));

// to generate any random decimel
// console.log(Math.random());

// to create a limit for this decimel
// decimel between 1 to 26
// console.log(Math.random()*26);

// to create a whole number
// this will give us all the whole numbers from 1 to 26
// console.log(Math.floor(Math.random()*26));

// for lowercase we want numbers from 97 to 122
// console.log(Math.floor(Math.random()*26)+97);


// to get random number from 0 to 9
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
    
}
// console.log(getRandomNumber());


// to return symbols randomly
function getRandomSymbol(){
    const symbols='!@#$%^&*()_+<>/,.{}[]'
    return symbols[Math.floor(Math.random()*symbols.length)];
}
// console.log(getRandomSymbol());

// getRandomLower();
// getRandomUpper();
// getRandomNumber();
// getRandomSymbol();






