//your JS code here. If required.
const counterPara = document.getElementById("counter");
const incButton = document.getElementById("incrementBtn");

let counter = 0;

incButton.addEventListener("click",() => {
	alert(`${counter}`)
	counter++;
	counterPara.textContent = counter;
})