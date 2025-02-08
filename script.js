// Collapsible (Certificates)

var coll = document.getElementsByClassName("collapsible");

var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


// The Dark Mode System

function enableDarkMode() {
	document.body.classList.add('dark-mode');
	localStorage.setItem('theme', 'dark');
}
function disableDarkMode() {
	document.body.classList.remove('dark-mode');
	localStorage.setItem('theme', 'light');
}

function detectColorScheme() {
	let theme = 'light';

	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark';
	}

	theme === 'dark' ? enableDarkMode() : disableDarkMode();
}

detectColorScheme();

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
	localStorage.getItem('theme') === 'light' ? enableDarkMode() : disableDarkMode();
});
