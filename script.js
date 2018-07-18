// Global Variables 
var inputTitle = document.querySelector('.js-input-title'); 
var inputBody = document.querySelector('.js-input-body'); 
var submitBtn = document.querySelector('.js-save-button'); 
var section = document.querySelector('.js-section'); 

// Event Listeners 
submitBtn.addEventListener('click', addIdea);
console.log(submitBtn);  

// Functions 
function addIdea(event) {
  event.preventDefault(); 
  var newInputTitle = inputTitle.value.trim(); 
  var newInputBody = inputBody.value.trim(); 
  var newIdea = document.createElement('article');
  newIdea.setAttribute('class', 'idea-box');
  createIdea(newInputTitle, newInputBody, newIdea);
  section.appendChild(newIdea); 
  saveToLocalStorage(newIdea);
  clearInputs();

};

function createIdea(newInputTitle, newInputBody, newIdea) {
  newIdea.innerHTML = `<h3>${newInputTitle}</h3>
        <img class="delete-button"src="images/delete.svg">
        <p>${newInputBody}</p>
        <img class="vote-buttons"src="images/upvote.svg">
        <img class="vote-buttons"src="images/downvote.svg">
        <h5 class="quality">quality: swill</h5>`
}; 

function clearInputs() {
  inputTitle.value = '';
  inputBody.value = ''; 
}; 

function saveToLocalStorage(newIdea) {
  console.log(newIdea)

  var stringifiedIdea = localStorage.setItems('savedIdea', JSON.stringify(newIdea));
}



var parsedIdea = JSON.parse(localStorage.getItem('key'));


