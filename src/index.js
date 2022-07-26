//All JS modules and functions put here

import './index.html';
import './index.scss';
import {showPopup,hidePopup, formValidate} from './modules/functions';
import {svg,button,popup,form,date,nationality} from './modules/consts';

//Making svg animation start right after all styles loaded
document.addEventListener('DOMContentLoaded', function(){
    svg.classList.add('hide');
})

window.addEventListener('load', function(){
    svg.classList.remove('hide');
})

//Removing appearing animation from button after it ends
setTimeout(() => {
    button.classList.add('opacity');
    button.classList.remove('appear','twelfth');
}, 6500);


popup.addEventListener('click', hidePopup);

form.addEventListener('submit', formSend);
function formSend(e){
    e.preventDefault();
    let valid = formValidate();

    if(valid === 0){
        let formData = new FormData(form);
        formData.append('nationality', nationality);
        formData.append('date', date);
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then(()=>showPopup())
            .then(()=>form.reset())
            .catch((error)=>console.log(error))
    }
}