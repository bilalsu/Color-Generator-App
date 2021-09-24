const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color'); /* Query Selector? */

btn.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random()*4);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


/* Now create a function that will give one of the random numbers*/
/* let randomNumber = Math.floor(Math.random()*4); */
function getRandomNumber() {
    return Math.floor(Math.random()* colors.length);
}