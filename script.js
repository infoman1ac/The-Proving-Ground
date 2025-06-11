const authorEl = document.getElementById("quote-author");
const quoteEl = document.getElementById("quote-text");
const genBtn = document.getElementById("gen-btn");
const url = "https://dummyjson.com/quotes";
let quotes = [];

fetch("https://dummyjson.com/quotes")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not okay');
        }
        return response.json();
    })
    .then(data => {
        quotes = data.quotes;
        console.log(quotes)
        showRandomQuote();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function showRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = randomQuote.quote;
    authorEl.textContent = randomQuote.author;
}

genBtn.addEventListener("click", showRandomQuote);
