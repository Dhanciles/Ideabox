// Global Variables 
var inputTitle = document.querySelector('.js-input-title'); 
var inputBody = document.querySelector('.js-input-body'); 
var saveBtn = document.querySelector('.js-save-button'); 
var section = document.querySelector('.js-section'); 

// Event Listeners 
saveBtn.addEventListener('click', checkInputs);
inputBody.addEventListener('input', enableSaveButton); 
inputTitle.addEventListener('input', enableSaveButton); 
  
// Fetching initial state of page
addIdeasFromLocalStorage(); 

 
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
  var createdIdea = createIdea();
  addEventsToArticles(createdIdea); 
  clearInputs();
  disableSaveButton(); 
};

function createIdea() {
  var id = Date.now()
  var newIdea = document.createElement('article');
  var newInputTitle = inputTitle.value.trim(); 
  var newInputBody = inputBody.value.trim(); 

  newIdea.innerHTML = 
        `<div class="title-container" id=${id}>
          <h2 contenteditable>${newInputTitle}</h2>
          <img class="js-delete-button delete-button"src="images/delete.svg">
        </div>
        <p contenteditable>${newInputBody}</p>
        <div class="vote-container">
          <img class="js-upvote vote-buttons"src="images/upvote.svg">
          <img class="js-downvote vote-buttons"src="images/downvote.svg">
          <h5 class="js-idea-quality quality">quality: swill</h5>
        </div>`
        saveToLocalStorage(id, newIdea)
        return newIdea;
};
   
function clearInputs() {
  inputTitle.value = '';
  inputBody.value = ''; 
};

function addEventsToArticles(createdIdea) {  
  section.appendChild(createdIdea);
  var upVote = createdIdea.querySelector('.js-upvote');
  var downVote = createdIdea.querySelector('.js-downvote'); 
  var deleteBtn = createdIdea.querySelector('.js-delete-button'); 
  var ideaQuality = createdIdea.querySelector('.js-idea-quality'); 
  upVote.addEventListener('click', function(){
      if (ideaQuality.innerText === 'quality: swill') {
      ideaQuality.innerText  = 'quality: plausible';
    } else if (ideaQuality.innerText === 'quality: plausible') {
      ideaQuality.innerText = 'quality: genius';
    }
    updateLocalStorage(createdIdea)
  });
  downVote.addEventListener('click', function(){
      if (ideaQuality.innerText === 'quality: genius') {
      ideaQuality.innerText = 'quality: plausible';
    } else if (ideaQuality.innerText === 'quality: plausible') {
      ideaQuality.innerText = 'quality: swill';
    }
    updateLocalStorage(createdIdea)
  });
  deleteBtn.addEventListener('click', function() {
    deleteFromLocalStorage(createdIdea);
    createdIdea.remove(); 
  });
};

function deleteFromLocalStorage(createdIdea) {
  localStorage.removeItem(createdIdea.firstElementChild.id)
}

function saveToLocalStorage(id, newIdea) {
  localStorage.setItem(id, newIdea.innerHTML);
}f

function addIdeasFromLocalStorage() {
  if (localStorage.length > 0) {
    Object.keys(localStorage).forEach(function(key){
      var article = document.createElement('article')
      article.innerHTML = localStorage.getItem(key);
      addEventsToArticles(article);
    }) 
  }
}

function updateLocalStorage(revisedIdea) {
  localStorage.setItem(revisedIdea.firstElementChild.id, revisedIdea.innerHTML);
}




