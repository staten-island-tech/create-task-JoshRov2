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

const quoteURL =`https://favqs.com/api/qotd?format=json`;
console.log(quoteURL);
function quoteGen(quote){
    appEl.textContent = " ";
    quote.forEach((result) => {
        const HTML = `
        <h2>${result.body}</h2>
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
      
    }
    if(event.target.matches(".fave")){
      
    }
    if(event.target.matches(".dis")){
      
    }
  });