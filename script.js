const select = document.querySelector('#year')
let inner = ''
for (let i = 1920; i <= 2020; i++) {
    inner += `<option>${i}</option>`
}
select.innerHTML = inner

const select2 = document.querySelector('#date')
let innerDate = ''
for (let i = 1; i <= 31; i++) {
    innerDate += `<option>${i}</option>`
}
select2.innerHTML = innerDate

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const select3 = document.querySelector('#month')
let innerMonth = ''
for (let el of month) {
innerMonth +=`<option>${el}</option>`
}
select3.innerHTML = innerMonth


const national =['American', 'Indian', 'Russian', 'Ukrainian', 'Mexican', 
'Canadian', 'Iranian', 'Japanese', 'Chinese', 'Jew', 'Swedish', 'Norwegian', 'German', 'English', 'French']
const selectNation = document.querySelector('#nationality')
let innerNation = ''
for (let el of national) {
innerNation +=`<option>${el}</option>`
}
selectNation.innerHTML = innerNation