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
    let digits = "RGBA(";
    for(let i = 0; i < 3; i++){
        digits += Math.floor(Math.random()*256);
        if (i < 2){
            digits += ',';
        }
    }
    digits += ")";
    return digits 
}