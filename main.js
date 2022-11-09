//Alert Form
let alertForm = document.querySelector('#alertForm');
let alertInput = document.querySelector('#alertInput');

alertForm.addEventListener('submit', function(event){
    event.preventDefault();
    alert(alertInput.value);
    alertInput.value = '';
    
})


//Sandwhich Form
let sandwichForm = document.querySelector('#sandwichForm');
let ingredients = document.querySelectorAll('#sandwichForm .ingredients');

sandwichForm.addEventListener('submit', function(event){
    event.preventDefault();
    let myIngredients =[];
    let str1 = "Your sandwhich contains: "
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].checked === true){
            myIngredients.push(ingredients[i].id)
        } 
    }
    let str2 = myIngredients.join(", ")
    let str3 = `${str1}${str2}.`
    alert(str3);

    for(let i = 0; i < ingredients.length; i++){
        ingredients[i].checked = false;
    }

})


//Haircut Scheduler
let hairCutForm = document.querySelector('#haircutScheduler');
let hairCutDate = document.querySelector('#date');
let hairCutter = document.querySelector('#hairCutter');
let shortHairRadio = document.querySelector('#shortHair');
let longHairRadio = document.querySelector('#longHair');
let hairLength = '';
let hairLengthLabel = document.querySelector('#hairLengthLabel');
hairLengthLabel.style.fontWeight ="bold";

hairCutForm.addEventListener('submit', function(event){
    event.preventDefault();
    if(shortHairRadio.checked === true){
        hairLength = 'short';
    }
    else if(longHairRadio.checked === true){
        hairLength = 'long';
    }
    alert(`Haircut scheduled for ${hairCutDate.value}, with ${hairCutter.value}, for ${hairLength} hair.`);
    hairCutDate.value = '';
    hairCutter.value = '';
    longHairRadio.checked = true;
})


//Create Account
let createAccountForm = document.querySelector("#createAccountForm");
let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let passwordOne = document.querySelector('#password');
let passwordTwo = document.querySelector('#confirm-password');

createAccountForm.addEventListener('submit',function(event){
    event.preventDefault();
    alert(`Username: ${userName.value}  |  Email: ${email.value}`)
    userName.value = '';
    email.value = '';
    passwordOne.value = '';
    passwordTwo.value = '';
})

