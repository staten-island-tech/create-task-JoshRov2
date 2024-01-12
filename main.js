const appEl = document.getElementById('app');

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
        `   
    appEl.insertAdjacentHTML("beforeend", HTML)
    });
}
const quotes = await getData(quoteURL)
quoteGen(quotes);