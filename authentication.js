document.addEventListener('DOMContentLoaded', bindButton);

function bindButton(){
	document.getElementById("validate").addEventListener('click', function(event){
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		if (username.length == 0){
			document.getElementById("result").textContent = "Please enter a username.";
		}
		else if (password.length == 0){
			document.getElementById("result").textContent = "Please enter a password.";
		}
		else if (username === "CS361" && password === "group 6"){
			document.getElementById("result").textContent = "Logged in.";
			window.location = "classSetup.html";
		}
		else{
			document.getElementById("result").textContent = "Wrong username/password combination.";
		}
		event.preventDefault(); //if not using if/else if/else series, add "return false".
	})
}