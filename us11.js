document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
	document.getElementById('submit').addEventListener('click', function(event) {
		var term = document.getElementById("termMenu");
		var currentTerm = term.options[term.selectedIndex].text;
		var nameMenu = document.getElementById("nameMenu");
		var currentName = nameMenu.options[nameMenu.selectedIndex].text;

		var node = document.createElement("LI");                
		var textnode = document.createTextNode(currentTerm + " -- " + currentName + "      ");         
		node.appendChild(textnode);                              
		document.getElementById("myList").appendChild(node);

		var btn = document.createElement("BUTTON");        
		var t = document.createTextNode("DELETE");       
		btn.appendChild(t);                                
		node.appendChild(btn); 

		var list = document.getElementById("myList");

		btn.addEventListener("click", function(){
		    this.parentNode.parentNode.removeChild(this.parentNode);
		});

		event.preventDefault();
	});
}