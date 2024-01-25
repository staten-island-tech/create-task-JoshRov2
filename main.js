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

quoteBtn.addEventListener("click", async () => {
  const quoteURL = `https://api.quotable.io/quotes/random?format=json`;
  const quotes = await getData(quoteURL);
  if (!quotes) {
    return false;
  }
  quoteGen(quotes);
});

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
    if(event.target.matches(".fave")){
    const faveQuote = await getData(quotes.Results, favorites)
    favorites.push(faveQuote);
    }
    if(event.target.matches(".dis")){
      
    }
  });