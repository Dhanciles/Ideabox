// Global Variables 
var inputTitle = document.querySelector('.js-input-title'); 
var inputBody = document.querySelector('.js-input-body'); 
var submitBtn = document.querySelector('.js-save-button'); 
var section = document.querySelector('.js-section'); 

// Event Listeners 
submitBtn.addEventListener('click', addIdea);
 
// Functions 
function addIdea(event) {
  event.preventDefault(); 
  var newInputTitle = inputTitle.value.trim(); 
  var newInputBody = inputBody.value.trim();   
  addEventsToArticles(newInputTitle, newInputBody); 
  var newIdea = document.createElement('article');
  newIdea.setAttribute('class', 'idea-box');
  createIdea(newInputTitle, newInputBody, newIdea);
  section.appendChild(newIdea); 
  saveToLocalStorage(newIdea);
  clearInputs();
};

function createIdea(newInputTitle, newInputBody, newIdea) {
  newIdea.innerHTML = `<h3>${newInputTitle}</h3>
        <img class="js-delete-button delete-button"src="images/delete.svg">
        <p>${newInputBody}</p>
        <img class="js-upvote vote-buttons"src="images/upvote.svg">
        <img class="js-downvote vote-buttons"src="images/downvote.svg">
        <h5 class="quality">quality: swill</h5>`
}; 

function clearInputs() {
  inputTitle.value = '';
  inputBody.value = ''; 
};

function addEventsToArticles(newInputTitle, newInputBody) { 
  var newIdea = document.createElement('article');
  createIdea(newInputTitle, newInputBody, newIdea); 
  section.appendChild(newIdea);
  var upVote = newIdea.querySelector('.js-upvote');
  var downVote = newIdea.querySelector('.js-downvote'); 
  var deleteBtn = newIdea.querySelector('.js-delete-button'); 
  upVote.addEventListener('click', function(){
    console.log('upVote');
  })
  downVote.addEventListener('click', function(){
    console.log('downVote');
  })
  deleteBtn.addEventListener('click', function() {
    newIdea.remove()
    console.log('delete');
    console.log(this)
    console.log(event.target);  
  })
};

function saveToLocalStorage(newIdea) {
  console.log(newIdea)
  var stringifiedIdea = localStorage.setItems('savedIdea', JSON.stringify(newIdea));
}

function retrieveFromLocalStrorage() {
  console.log()
  var parsedIdea = JSON.parse(localStorage.getItem('key'));
}


