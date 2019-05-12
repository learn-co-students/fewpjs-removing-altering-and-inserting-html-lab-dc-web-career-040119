// Write your code here!
document.querySelector('main#main').remove();
const newHeader = document.body.appendChild(document.createElement("h1"));
newHeader.setAttribute("id", "victory");

let nam = "ken";
newHeader.innerHTML= `${nam} is the champion`;