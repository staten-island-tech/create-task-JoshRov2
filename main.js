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
    <h2>${quote.text}</h2>
    <h3>${quote.author}</h3>
    `
    faveEl.insertAdjacentHTML("beforeend", HTML)
  })}