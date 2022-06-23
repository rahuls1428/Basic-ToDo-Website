// below .getElementById fn returns an Element object representing
// the element whose id property matches the specified string.
let ourToDoForm = document.getElementById("ourForm");
console.log(ourToDoForm);
let inputToDo = document.getElementById("ourInputField");
console.log(inputToDo);

let ourToDoList = document.getElementById("ourList");

//the default behaviour of browser when you "submit" something is to
//send the submitted info to a server
ourToDoForm.addEventListener("submit", function (event) {
  //below function is to prevent our browser from sending html form data somewhere else
  //and refreshing the webpage when user clicks submit button
  event.preventDefault();

  console.log("User input is: " + inputToDo.value);
  console.log("Adding " + inputToDo.value + " to the list!");

  createItem(inputToDo.value);
});

function createItem(item) {
  //below is example of a template literal
  //if we want to add something dynamic to template literal:
  //just use ----> ${}
  //NOTE: The browser considers each HTML element an Object.
  //So when deleteItem fn runs, the button element (Object) is calling it to run
  let ourHtmlItem = `<li>${item} <button onclick="deleteItem(this)">Delete</button></li>`;

  //check out: dev.to/jeannienguyen/insertadjacenthtml-vs-innerhtml-4epd#:~:text=Using%20innerHTML%20means%20that%20any,existing%20nodes%20are%20not%20altered.
  ourToDoList.insertAdjacentHTML("beforeend", ourHtmlItem);

  //once we have typed input in the field & submitted, we dont need input anymore
  //so we should remove that input after submit button is pressed
  inputToDo.value = "";

  //if user clicks submit button instead of pressing 'ENTER' on keyboard,
  //the text field wont be focussed ANYMORE so user CANT immediately start typing NEXT input
  //thus we will add .focus fn to text field to prevent this
  inputToDo.focus();
}

//when app/website first load, there wont be any delete buttons
//once you start add items to list, then delete buttons will appear
function deleteItem(elementToDelete) {
  console.log("Deleting: " + elementToDelete);
  console.log(elementToDelete);
  console.log(elementToDelete.parentElement);
  elementToDelete.parentElement.remove();
}

//Now everytime the app/website is reloaded or refreshed,
//all the user's data is lost/reset
//SO we must send this user-input-data to a server/cloud to store in a database
//BUT servers/databases want raw data (ex in form of an array, objects etc)
//THEY dont understand webpage elements
