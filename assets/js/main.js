
//========= Sixth thing is DOM elements:=====
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


//======== Fifth thing:===========
const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

//==========Seventh thing:==========
//Generate event listen
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    //console.log(length);
    //console.log(typeof length);
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    //console.log(hasUpper, hasLower, hasNumber, hasSymbol);
    resultEl.innerText = generatePassword(
        hasUpper, 
        hasLower, 
        hasNumber, 
        hasSymbol,
        length
        );
});

//=========Last thing:================
//copy password to clipboard
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    if(!password)
    {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied to clipboard');
})


// ============== Eighth thing:==========================
//generation password function
function generatePassword(upper, lower, number, symbol, length)
{
    //1. Init pw var
    //2. Filter out unchecked types
    //3. Loop over length and call generator function for each type
    //4. Add final pw to the pw var and return
    let generatedPassword = '';
    const typesCount = upper + lower + number + symbol;
    //console.log('typesCount: ', typesCount);
    // const typesArr = [lower, upper,number, symbol];
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );
    //console.log('typesArry: ', typesArr);

    if(typesCount === 0)
    {
        console.log('type count is zero');
        return '';
    }
    
    for(let i=0; i<length; i+=typesCount)
    {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            //console.log('functName: ', funcName);
            generatedPassword += randomFunc[funcName]();
        });
    }
    //console.log(generatedPassword.slice(0, length));
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

//========second thing:=========
function getRandomUpper()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//console.log(getRandomUpper());

//=========first thing: http://www.net-comber.com/charset.html ========

function getRandomLower()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//console.log(String.fromCharCode(97));
//console.log(Math.floor(Math.random() * 26) + 97);
//console.log(getRandomLower());

//========third thing:==========
function getRandomNumber()
{
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//console.log(getRandomNumber());

//-========== Forth thing:===========
function getRandomSymbol()
{
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    //return symbols[0];
    //return symbols[1];
    return symbols[Math.floor(Math.random() * symbols.length)];
}
//console.log(getRandomSymbol());









// SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });