let name = prompt("What's your name?");
let age = prompt("How old were you when you first used a computer?");
let currentAge = prompt("How old are you now?");
let years = currentAge-age;
document.getElementById("output").innerHTML=name + ", you have used computers for " + years + " years.";