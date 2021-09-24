const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById('btn');
const color = document.querySelector('.color'); /* Query Selector? */

btn.addEventListener('click', function(){
    document.body.style.backgroundColor = getDigits();
    color.textContent = getDigits();
});


/* Now create a function that will give one of the random numbers*/
/* let randomNumber = Math.floor(Math.random()*4); */
function getRandomNumber() {
    return Math.floor(Math.random()* colors.length);
}
/*Create a function to get a random hex color*/

function getDigits(){
    let digits = '#';
    for(let i = 0; i < 6; i++){
        digits += hex[Math.floor(Math.random()*hex.length)]
    }
    return digits
}