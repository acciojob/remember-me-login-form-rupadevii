//your JS code here. If required.
const form = document.forms.form;
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

existingBtn.addEventListener("click", () => {
	const credentials = JSON.parse(localStorage.getItem("credentials"));
	alert(`logged in as ${credentials.username}`)
})

if(localStorage.getItem("credentials")){
 existingBtn.removeAttribute("hidden")
}
	

form.addEventListener("submit", (e) => {
	e.preventDefault();
	alert(`Logged in as ${username.value}`)

	let credentials = {}
	if(checkbox.checked){
		credentials = {username: username.value, password: password.value}
		localStorage.setItem("credentials", JSON.stringify(credentials));
		 existingBtn.removeAttribute("hidden")	
	}
	else{
		localStorage.removeItem("credentials")
		existingBtn.setAttribute("hidden", true)
	}
})
