var modal		= document.getElementById("addNewCategory-Modal");					//	Get the modal by id
var	btn 		= document.getElementsByClassName("add-category")[0];				//	Get the button that opens the modal
var span		= document.getElementsByClassName("close")[0];						//	Get the span element that closes the modal

var	placement	= document.getElementById("tab-insert");
var details		= document.getElementById("category");

// When the user clicks on the button, open the modal
function openModal() {
	modal.style.display = "block";
	console.log("modal: opened");
}

// When the user clicks on the span close the modal
function closeModal() {
	modal.style.display = "none";
	console.log("modal: closed");
}

// Saves the category task and displays it
function	saveCategory()
{
	var title = details.elements["title"].value;
	var color = details.elements["color"].value;

	if (title == 0 || color == 0)
	{
		alert("Error: Title or Color cannot be blank");
		return;
	}
	else
	{
		createCategory(placement);
		storeCategory();
		console.log("Saving Category");
		console.log("Category title: " + title);
		console.log("Category color: " + color);
	}
}

function	createCategory(element)
{
	let	newCateogry = document.createElement("div");
	let category = document.createTextNode(element);

	newCateogry.classList.add("category");
	newCateogry.addEventListener("click", removeElement);
	newCateogry.appendChild(category);
	placement.prepend(newCateogry);
	closeModal();
}

function storeCategory()
{
	const savedCategory = [];

	for (const element of placement.children) 
	{
		placement.push(element.textContent);
	}
	localStorage.setItem("categoryName", JSON.stringify(savedCategory));
}

window.onload = () => 
{
	const savedCategories = JSON.parse(localStorage.getItem("categoryName")) || [];
	for (let i = savedCategories.length - 1; i >= 0; i--)
	{
		createCategory(savedCategories[i]);
	}
}
