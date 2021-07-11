
document.getElementById("dark").onclick=function(){
    document.getElementById("topp").style.backgroundColor='rgb(0,0,0)';
    document.getElementById("nam").style.color='rgb(145,145,145)';
    document.getElementById("scho").style.color='rgb(145,145,145)';
    document.getElementById("maj").style.color='rgb(145,145,145)';
    document.getElementById("resu").style.color='rgb(145,145,145)';
    document.getElementById("gall").style.color='rgb(145,145,145)';
    document.getElementById("link").style.color='rgb(145,145,145)';
    document.getElementById("funp").style.color='rgb(145,145,145)';
    document.getElementById("textbox").style.backgroundColor='rgba(0,0,0,.35)';
    document.getElementById("textbox").style.color='rgba(255,255,255,.5)';
    document.getElementById("clock").style.backgroundColor='rgba(0,0,0,.35)';
    document.getElementById("clock").style.color="rgb(30, 230, 88)";
}

document.getElementById("light").onclick=function(){
    document.getElementById("topp").style.backgroundColor='white';
    document.getElementById("nam").style.color='black';
    document.getElementById("scho").style.color='black';
    document.getElementById("maj").style.color='black';
    document.getElementById("resu").style.color='black';
    document.getElementById("gall").style.color='black';
    document.getElementById("link").style.color='black';
    document.getElementById("funp").style.color='black';
    document.getElementById("textbox").style.backgroundColor='rgba(250,250,250,.25)';
    document.getElementById("textbox").style.color='black';
    document.getElementById("clock").style.backgroundColor='rgba(250,250,250,.25)';
    document.getElementById("clock").style.color='rgb(59, 230, 88)';

}

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



