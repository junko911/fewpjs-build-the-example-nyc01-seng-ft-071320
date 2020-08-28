// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hiddenModal = document.getElementById('modal')
hiddenModal.classList.add('hidden')

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {


  const clickHandler = () => {
    document.addEventListener('click', e => {
      if (e.target.matches('.like-glyph')) {
        mimicServerCall()
          .then(response => {
            if (response) {
              if (e.target.textContent === FULL_HEART) {
                e.target.textContent = EMPTY_HEART
              } else {
                e.target.textContent = FULL_HEART
              }
              e.target.classList.toggle('activated-heart')
            }
          })
          .catch(error => {
            hiddenModal.firstElementChild.textContent = error
            hiddenModal.classList.remove('hidden')
            setTimeout(() => {
              hiddenModal.classList.add('hidden')
            }, 5000)
          })
      }
    })
  }


  clickHandler()
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
