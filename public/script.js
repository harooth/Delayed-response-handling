const loader = document.querySelector(".loader");

fetchHandler();

function fetchHandler() {
	displayLoading();

	fetch("/delayed-response").then(resp=>resp.json())
		.then(data => {
			hideLoading()
			console.log(data);
			document.body.innerHTML += JSON.stringify(data, undefined, 2);
		})
}

function displayLoading() {
	loader.classList.add("display");
	// to stop loading after some time
	let id = setTimeout(() => {
		loader.classList.remove("display");
	}, 1000);
	clearTimeout(id);
}

// hiding loading 
function hideLoading() {
	loader.classList.remove("display");
}