// Get the current year
const currentYear = new Date().getFullYear();

// Output the current year dynamically in the footer's first paragraph
document.querySelector('footer p:first-child').innerHTML = `&copy; ${currentYear} Osondu Benjamin Ihentuge Nigeria`;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Output the last modified date dynamically in the second paragraph
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;
