const appEl = document.getElementById('app');
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

const quoteURL =`https://favqs.com/api/qotd?format=json`;

function quoteGen(quote){
    appEl.textContent = " ";
    quote.forEach((result) => {
        const HTML = `
        <h2>${result.body}</h2>
        <h3>Author: ${result.author}</h3>
        <button id="next">Next Quote</button>
        <button id="fave">Add to Favorites</button>
        <button id="dis">Dislike</button>
        `   
    appEl.insertAdjacentHTML("beforeend", HTML)
    });
}
const quotes = await getData(quoteURL)
quoteBtn.addEventListener("click",() =>{
  const display = quotes.Results;
  if(!display){
    return false;
  }
  quoteGen(display);
});