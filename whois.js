'use strict'

const yourname = document.querySelector('meta[name="author"]').getAttribute("content")
const email = document.querySelector('meta[name="reply-to"]').getAttribute("content")
const date_of_birth = document.querySelector('#data time').getAttribute("datetime")

function counter() {
  const age = document.querySelector("#age")
  age.textContent = ((new Date() - new Date(date_of_birth)) / 31557600000).toFixed(9)
}

function start() {
  setTimeout(() => { counter(); requestAnimationFrame(start); }, 1000 / 30);
}

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    start()
    let thisAge = ((new Date() - new Date(date_of_birth)) / 31557600000)
    let thisYear = new Date().getFullYear();

    for (let i = 0; i <= thisAge; i++) {
      const eachAge = document.createElement('li');
      eachAge.innerHTML = `
      <p>
      <i>${thisAge.toFixed(0) - i - 1} - ${thisAge.toFixed(0) - i}</i>
      <u>${thisYear - i}</u>
      </p>
      `
      document.querySelector('#lifeOf').appendChild(eachAge);
    }
  } else if (event.target.readyState === 'complete') {
    const author = document.querySelector('#author')
    author.textContent = yourname;
    author.addEventListener('click', function(){
      author.className = author.className === "name" ? "email" : "name";
      author.textContent = author.textContent === yourname ? email : yourname;
    });
  }
});