//Modale

function openArea(evt, areaName) {
  var i, x;
  x = document.getElementsByClassName("area");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(areaName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}

//Recomandari

let parentSetTimeOutElementContainer = document.getElementById("set-time-out");
function createParaph(text) {
  let paragraph = document.createElement("p");
  paragraph.innerText = text;

  return paragraph;
}

function renderParagraph(paragrapghText, parent) {
  let paragraph = createParaph(paragrapghText);
  parent.appendChild(paragraph);
}

setTimeout(function() {
  renderParagraph(
    "Alexandra is a hard working person, willing to improve herself day by day! (Alexandru C.)",
    parentSetTimeOutElementContainer
  );
  setTimeout(function() {
    renderParagraph(
      "It was a pleasure working with Alexandra! (Cristina P.)",
      parentSetTimeOutElementContainer
    );
    setTimeout(function() {
      renderParagraph(
        "I know Alex for 5 years now and no matter how difficult a situation or project was, Alexandra made sure everyone left with a smile and met the objectives at the same time. As a team member or a leader, Alexandra earns my highest recommendation. (Ioana B.)",
        parentSetTimeOutElementContainer
      );
    }, 1000);
  }, 1000);
}, 1000);

function showParagrapshWidthDelay(secondsValue) {
  return new Promise(function(resolve, reject) {}, 1000);
}

showParagrapshWidthDelay(1)
  .then(showParagrapshWidthDelay)
  .then(showParagrapshWidthDelay)
  .then(showParagrapshWidthDelay);

//Button

function scrollWin(x, y) {
  window.scrollBy(x, y);
}

//End of Button

//Contact me

const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const sendBtn = document.getElementById('send');
const form = document.getElementById('send-mail');
const resetBtn = document.getElementById('resetBtn');

(function eventListeners(){
  document.addEventListener('DOMContentLoaded', startApp);
  email.addEventListener('blur', validateData);
  subject.addEventListener('blur', validateData);
  message.addEventListener('blur', validateData);
  sendBtn.addEventListener('click', sendEmail);
  resetBtn.addEventListener('click', resetForm);
})();

function startApp(){
  sendBtn.disabled = true;
}

function validateData(){
  validateLength(this);
  if(this.type == 'email'){
  validateEmail(this);  
  }     
  let errors = document.querySelectorAll('.error');
  if(email.value !== '' && subject.value !== '' && message.value!==''){
    if(errors.length === 0){
      sendBtn.disabled = false;
  } 
  }else{
    sendBtn.disabled = true;
    }  
}
//When reset button is clicked.
function resetForm(e){
  e.preventDefault();
  form.reset();
}
//When send button is clicked.
function sendEmail(e){
  e.preventDefault();
  const spinnerGif = document.querySelector('#spinner');
  spinnerGif.style.display = 'block';
  const sent = document.createElement('img');
  sent.src = 'https://www.dropbox.com/s/0g5h91zyozcbenc/mail.gif?raw=1';
  sent.style.display = 'block';
  var link = `mailto:${email.value}?subject=${(subject.value)}&body=${(message.value)}`;
  // timer for the spinner and mail.
  setTimeout(function(){
    spinnerGif.style.display = 'none';
    document.querySelector('#loaders').appendChild(sent);   
    setTimeout(function(){
    sent.remove();
    form.reset();
    sendBtn.disabled = true;
    window.location.href = link;
    },1500);
    },3000);
}
//Check the lenght in the form inputs.
function  validateLength(campo){
  if(campo.value.length > 0){
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  }else{
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}
function validateEmail(campo){
  const message = campo.value;
  if(message.indexOf('@') !==-1){
  campo.style.borderBottomColor = 'green';
  campo.classList.remove('error');
  }else{
  campo.style.borderBottomColor = 'red';
  campo.classList.add('error');
  }
}
