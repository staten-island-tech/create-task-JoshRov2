const appEl = document.getElementById('app');
const favorites = [];
const quoteBtn = document.getElementById('startup')

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);

    if (Array.isArray(data) && data.length > 0) {
      return data[0];
    } else {
      throw new Error("Invalid API Response")
    }
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
  <button class="next">Next Quote</>
  <button class="fave">Add to Favorites</>
  <button class="dis">Dislike</>
  `;
  appEl.insertAdjacentHTML("beforeend", HTML);
}

appEl.addEventListener("click", async(event) => {
    if(event.target.matches(".next")){
      console.log(quotes);
  const nextQuote = quotes.Results;
  if(!display){
    return false;
  }
  quoteGen(nextQuote);
    }
    if(event.target.matches(".fave")){
    const faveQuote = await fetchData(quotes.Results, favorites)
    favorites.push(faveQuote);
    }
    if(event.target.matches(".dis")){
      
    }
  });