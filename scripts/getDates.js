// Get the current year
const currentYear = new Date().getFullYear();


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");


// Output the current year dynamically in the footer's first paragraph
document.querySelector('footer p:first-child').innerHTML = `&copy; ${currentYear} Osondu Benjamin Ihentuge Nigeria`;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Output the last modified date dynamically in the second paragraph
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		header.style.background = "#000";
		header.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		header.style.background = "#eee";
		header.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
