// Variables 
var inputTitle = $('.js-input-title'); 
var inputBody = $('.js-input-body'); 
var submitBtn = $('.js-save-button'); 

// Event Listeners 
submitBtn.on('click', createIdea); 

// Functions 
function createIdea() {
  e.preventDefault(); 
  var ideaTitle = inputTitle.val(); 
  var ideaBody = inputBody.val(); 
  var newIdea = $('<article>'.appendTo('section'); 

}