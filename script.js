// Global Variables 
var inputTitle = document.querySelector('.js-input-title'); 
var inputBody = document.querySelector('.js-input-body'); 
var saveBtn = document.querySelector('.js-save-button'); 
var section = document.querySelector('.js-section'); 

// Event Listeners 
saveBtn.addEventListener('click', checkInputs);
inputBody.addEventListener('input', enableSaveButton); 
inputTitle.addEventListener('input', enableSaveButton); 

 
// Functions 
function enableSaveButton() {
  saveBtn.removeAttribute('disabled'); 
};    

function disableSaveButton() {
  saveBtn.setAttribute('disabled', ''); 
}; 

function checkInputs(event) {
  event.preventDefault(); 
  if (!inputTitle.value) {
    alert ('Please enter a title for your idea.'); 
  } else if (!inputBody.value) {
    alert ('Please enter content into the body text area.'); 
  } else {
    addIdea(); 
  }
}; 

function addIdea() {
  var newInputTitle = inputTitle.value.trim(); 
  var newInputBody = inputBody.value.trim();   
  addEventsToArticles(newInputTitle, newInputBody); 
  var newIdea = document.createElement('article');
  createIdea(newInputTitle, newInputBody, newIdea);
  addToLocalStorage(newIdea); 
  clearInputs();
  disableSaveButton(); 
};

function createIdea(newInputTitle, newInputBody, newIdea) {
  newIdea.innerHTML = 
        `<div class="title-container">
          <h2 contenteditable>${newInputTitle}</h2>
          <img class="js-delete-button delete-button"src="images/delete.svg">
        </div>
        <p contenteditable>${newInputBody}</p>
        <div class="vote-container">
          <img class="js-upvote vote-buttons"src="images/upvote.svg">
          <img class="js-downvote vote-buttons"src="images/downvote.svg">
          <h5 class="js-idea-quality quality">quality: swill</h5>
        </div>`
};

function clearInputs() {
  inputTitle.value = '';
  inputBody.value = ''; 
};

function addEventsToArticles(newInputTitle, newInputBody) { 
  var newIdea = document.createElement('article');
  newIdea.dataset.ideaKey = 'idea'; 
  createIdea(newInputTitle, newInputBody, newIdea); 
  section.appendChild(newIdea);
  var upVote = newIdea.querySelector('.js-upvote');
  var downVote = newIdea.querySelector('.js-downvote'); 
  var deleteBtn = newIdea.querySelector('.js-delete-button'); 
  var ideaQuality = newIdea.querySelector('.js-idea-quality'); 
  upVote.addEventListener('click', function(){
      if (ideaQuality.innerText === 'quality: swill') {
      ideaQuality.innerText  = 'quality: plausible';
    } else if (ideaQuality.innerText === 'quality: plausible') {
      ideaQuality.innerText = 'quality: genius';
    }

  });
  downVote.addEventListener('click', function(){
      if (ideaQuality.innerText === 'quality: genius') {
      ideaQuality.innerText = 'quality: plausible';
    } else if (ideaQuality.innerText === 'quality: plausible') {
      ideaQuality.innerText = 'quality: swill';
    }
  });

  deleteBtn.addEventListener('click', function() {
    newIdea.remove(); 
  });
};

function addToLocalStorage(newIdea) {
  var ideaObject = {title: this.title, body: this.body, quality: this.quality}; 
  var stringifiedIdea = JSON.stringify(ideaObject); 
  localStorage.setItem('idea', stringifiedIdea); 
  console.log(stringifiedIdea); 
}; 

