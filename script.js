// Global Variables 
var inputTitle = document.querySelector('.js-input-title'); 
var inputBody = document.querySelector('.js-input-body'); 
var submitBtn = document.querySelector('.js-save-button'); 

// Event Listeners 
submitBtn.addEventListener('click', addIdea); 

// Functions 
function addIdea(event) {
  event.preventDefault(); 
  var newIdeaTitle = inputTitle.value.trim(); 
  var newIdeaBody = inputBody.value.trim(); 
  var newIdea = document.createElement('article');
  createIdea(newideaTitle, newIdeaBody, newIdea);
  main.appendChild(newIdea); 
  clearInputs(); 
};

function createIdea(newideaTitle, newIdeaBody, newIdea) {
  newIdea.innerHTML = `<h3>${newideaTitle}</h3>
        <img class="delete-button"src="images/delete.svg">
        <p>${newIdeaBody}</p>
        <img class="vote-buttons"src="images/upvote.svg">
        <img class="vote-buttons"src="images/downvote.svg">
        <h5 class="quality">quality: swill</h5>`
}; 

function clearInputs() {
  inputTitle.value = '';
  inputBody.value = ''; 
}; 
