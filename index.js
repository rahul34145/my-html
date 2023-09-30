/*var x=document.getElementById('para');

//x.innerHTML="ok";
x.style.color='red';
var button=document.getElementById('btn');
//var x=0;
y=1;
function ok(){
if(y<3){
    x.innerHTML='less than 3';
    x.style.backgroundColor='red';
}

}
btn.addEventListener('click',ok);*/
var num1 = document.getElementById('para1');
var button = document.getElementById('btn1');
console.log(num1.innerHTML);
var x = Number(num1.innerHTML);

function increment() {
    x = x + 1;
    num1.innerHTML = x;
    num1.style.color='red';
    num1.style.backgroundColor='blue ';

}
btn1.addEventListener('click', increment);

var num2 = document.getElementById('para2');
var button = document.getElementById('btn2');
console.log(num2.innerHTML);
var y = Number(num2.innerHTML);

function decrement() {
    y = y - 1;
    num2.innerHTML = y;
    num2.style.color='red';
    num2.style.backgroundColor='green';
}
btn2.addEventListener('click', decrement);
