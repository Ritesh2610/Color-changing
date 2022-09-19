const colors=["green","red","rgba(133,122,200)","f15025"]
const btn=document.getElementById('btn');
const color= document.querySelector(".color");
btn.addEventListener('click',function () {
   const randomNumber=getRandom();

   console.log(randomNumber);
   console.log(colors);
   let col= colors[randomNumber];
   console.log(col);
   document.body.style.backgroundColor = colors[randomNumber]; 
   color.textContent = colors[randomNumber];
});
function getRandom(){
    return Math.floor(Math.random()*colors.length);

}
// function get(){
//     return Math.floor(Math.random()*colors.length);

// }btn.addEventListener('click',function(){
//     const number=get();
// const nav=document.getElementsByClassName('nav');

// document.body.nav.style.backgroundColor=colors[number];

// })
