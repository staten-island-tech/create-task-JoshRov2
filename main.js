const appEl = document.getElementById('app');
const faveEl = document.getElementById('favorites')
const disEl = document.getElementById('disliked')
const favorites = [];
const dislikedAuthors = [];
const quoteBtn = document.getElementById('startup')

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data[0];
  } catch (error) {
    console.error(error);
  }
};
const quoteURL = `https://api.quotable.io/quotes/random?format=json`;
quoteBtn.addEventListener("click", getQuote);
async function getQuote() {
  const quotes = await getData(quoteURL);
  if (!quotes) {
    return false;
  }
  console.log(quotes)
  if (dislikedAuthors.includes(quotes.author)){
    console.log('if');
    getQuote();
  } else {
    quoteGen(quotes);
  }
}

function quoteGen(data) {
  appEl.innerHTML = "";
  const HTML = `
  <h2>${data.content}</h2>
  <h3>Author: ${data.author}</h3>
  <button class="fave">Add to Favorites</>
  <button class="dis">Dislike</>
  `;
  appEl.insertAdjacentHTML("beforeend", HTML);
}

appEl.addEventListener("click", async(event) => {
  const el = event.target
    if(event.target.matches(".fave")){
    const quoteContent = {text: el.parentElement.children[0].textContent, author: el.parentElement.children[1].textContent};    
    console.log(quoteContent);
    favorites.push(quoteContent);
    console.log(favorites);
    countQuotes();
    faveQuotes();
    }
    if(event.target.matches(".dis")){
    const quoteAuthor = el.parentElement.children[1].textContent;
    const name = quoteAuthor.substring(8);
    console.log(name);
    dislikedAuthors.push(name);
    }
  });

  function faveQuotes(){    
  faveEl.innerHTML = " ";
  favorites.forEach((quote) => {
    const HTML = `
    <h3>${quote.text}</h3>
    <h4>${quote.author}</h4>
    `
    faveEl.insertAdjacentHTML("beforeend", HTML)
  })}

  function countQuotes(){
    let currentNumber = 0
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].selected) {
        currentNumber++;
      }    
      return currentNumber;
    }
    const HTML = `
    <h2>You have ${currentNumber} favorite quotes.</h2>
    `
    faveEl.insertAdjacentHTML("beforeend", HTML);
    console.log(currentNumber);
  }
  
  