
function currentTime() {
var date = new Date(); 
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var midday = "AM";
midday = (hour >= 12) ? "PM" : "AM"; 
hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); 
hour = updateTime(hour);
min = updateTime(min);
sec = updateTime(sec);
document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; 
  var t = setTimeout(currentTime, 1000); 
}

function updateTime(k) {
if (k < 10) {
  return "0" + k;
}
else {
  return k;
}
}

currentTime();

var theme = document.querySelector(':root')

function lightmode(){
    document.documentElement.setAttribute('data-theme', 'light')
}

function darkmode(){
    document.documentElement.setAttribute('data-theme', 'dark')
}

const Calculator={
  result:0,
  operator:0,
  past:0,
  current:0,

  addDigit : function(num){
    this.current*=10;
    this.current+=num;
  },

  operation : function(op){
    this.operator=op;
    this.past=this.current;
    this.current=0;
  },

  enter : function(){
    if (this.operator==1){
      this.result=this.past+this.current;
    }
    else if (this.operator==3){
      this.result=this.past-this.current;
    }
    else if (this.operator==2){
      this.result=this.past/this.current;
    }
    else if (this.operator==4){
      this.result=this.past*this.current;
    }
    this.current=this.result;
  },

  clear : function(){
    this.result=0;
    this.operator=null;
    this.past=0;
    this.current=0;
  },
}

document.getElementById("one").onclick=function(){
  Calculator.addDigit(1)
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}

document.getElementById("two").onclick=function(){
  Calculator.addDigit(2)
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}

document.getElementById("three").onclick=function(){
  Calculator.addDigit(3)
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}

document.getElementById("four").onclick=function(){
  Calculator.addDigit(4)
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}
document.getElementById("five").onclick=function(){
  Calculator.addDigit(5)
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}
document.getElementById("six").onclick=function(){
  Calculator.addDigit(6)
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}
document.getElementById("seven").onclick=function(){
  Calculator.addDigit(7)
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}
document.getElementById("eight").onclick=function(){
  Calculator.addDigit(8)
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}
document.getElementById("nine").onclick=function(){
  Calculator.addDigit(9)
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}
document.getElementById("zed").onclick=function(){
  Calculator.addDigit(0)
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}
document.getElementById("clear").onclick=function(){
  Calculator.clear()
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}

document.getElementById("plus").onclick=function(){
  Calculator.operation(1)
  document.getElementById("resb").innerHTML= Calculator.current.toString()
}

document.getElementById("divide").onclick=function(){
Calculator.operation(2)
document.getElementById("resb").innerHTML= Calculator.current.toString()
}

document.getElementById("subtract").onclick=function(){
Calculator.operation(3)
document.getElementById("resb").innerHTML= Calculator.current.toString()
}

document.getElementById("multiply").onclick=function(){
Calculator.operation(4)
document.getElementById("resb").innerHTML= Calculator.current.toString()
}

document.getElementById("enter").onclick=function(){
Calculator.enter()
document.getElementById("resb").innerHTML= Calculator.current.toString()
}

