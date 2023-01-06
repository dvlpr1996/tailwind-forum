let year = document.querySelector("#year");
if (year) {
	year.innerHTML = (new Date).getFullYear();
}

window.addEventListener("load", () => {
	window.addEventListener("offline", () => {
		alert("you are offline. check your internet connection");
	});
});
