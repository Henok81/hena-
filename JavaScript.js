var icon = document.getElementById("icon");
icon.onclick = function (){
	document.body.classList.toggle("dark-theme");
	if(document.body.classList.contains("dark-theme")){
		icon.src="moon.png";
	}else{
		icon.src="sun.png";
	}
}
/*typing*/
const dynamicText = document.querySelector("h2 span");
const words = ["web developer","software developer","Ethical hacker","Freelancer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
	const currentWord = words[wordIndex];
	const currentChar = currentWord.substring(0,charIndex);
	dynamicText.textContent = currentChar;
	if(!isDeleting && charIndex < currentWord.length){
		charIndex++;
		setTimeout(typeEffect,100);
	}else if(isDeleting && charIndex > 0){
		charIndex--;
		setTimeout(typeEffect,100);
	}else{
		isDeleting = !isDeleting;
		wordIndex = !isDeleting ? (wordIndex + 1) % words.length:wordIndex;
		setTimeout(typeEffect,1200);
	}
}
typeEffect();
function login(){
	alert("first register it")
}
function submit(){
	alert("You are registerd")
}
function send(){
	alert("Thank you i will contact you")
}
