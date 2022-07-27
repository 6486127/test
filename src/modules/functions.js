import { button, emailWarning, image, popup, wrapper } from "./consts";
import { passwordRegEx, emailRegEx, mismatch, uncorrect, wrongEmail } from "./strings";

function addError(input){
    input.parentElement.classList.add('error');
}

function removeError(input){
    input.parentElement.classList.remove('error');
}

function testEmail(input){
    return !emailRegEx.test(input.value);
}
function testPassword(input){
    return !passwordRegEx.test(input.value);
}
function compare(array){
    let r =(array[0] === array[1]);
    return !r ;
}
export function dateAssemble(...array){
    let date = '';
    array.forEach(function(item){
        date = date + item.textContent + '.';
    })
    return date;
}
export function showPopup(){
    popup.classList.add('show');
    wrapper.classList.add('hide');
}

export function hidePopup(){
    popup.classList.remove('show');
    wrapper.classList.remove('hide');
}

function showImage(){
    image.classList.add('block');
}

function hideImage(){
    image.classList.remove('block');
}
    
function shake(){
    button.classList.add('shake');
    setTimeout(()=>{removeShake()},500);
    
}
function removeShake(){
    button.classList.remove('shake');
}

export function formValidate(){
    let error = 0;
    let formCheck = document.querySelectorAll('.check');
    let passwords = [];
    let passwordElements = [];

    for (let i = 0; i < formCheck.length; i++){
        let input = formCheck[i];
        removeError(input);
        
        //Checking email input
        if(input.id === 'email'){
            if(testEmail(input)){
                hideImage();
                emailWarning.textContent = wrongEmail;
                addError(input);
                error++;
            }else{
                showImage();
                emailWarning.textContent='';
            }
        }
        //Checking password and repeat password inputs
        else{
            passwordElements.push(input);
            passwords.push(input.value);
            if(testPassword(input)){
                input.closest('.item').lastElementChild.textContent = uncorrect;
                addError(input);
                error++
            }else{
                input.closest('.item').lastElementChild.textContent='';
                if(passwords.length === 2){
                    if(compare(passwords)){
                        passwordElements.forEach(input => {
                            input.closest('.item').lastElementChild.textContent = mismatch;
                            addError(input);
                            error++
                        }); 
                    }
                }
            }
        }
        
    }
    if(error!==0){
        shake();
    }
    return error;  
}