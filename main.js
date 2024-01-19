const appEl = document.getElementById('app');
const favorites = [];
const quoteBtn = document.getElementById('startup')

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data.Results;
  } catch (error) {
    console.error(error);
  }
};

const quoteURL =`https://api.quotable.io/quotes/random`;
console.log(quoteURL);
function quoteGen(quote){
    appEl.textContent = " ";
    quote.forEach((result) => {
        const HTML = `
        <h2>${result.content}</h2>
        <h3>Author: ${result.author}</h3>
        <button class="next">Next Quote</button>
        <button class="fave">Add to Favorites</button>
        <button class="dis">Dislike</button>
        `   
    appEl.insertAdjacentHTML("beforeend", HTML)
    });
}
const quotes = await getData(quoteURL)
quoteBtn.addEventListener("click",() =>{
  console.log(quotes);
  const display = quotes.Results;
  if(!display){
    return false;
  }
  quoteGen(display);
});

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