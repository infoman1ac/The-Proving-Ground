const authorEl = document.getElementById("quote-author");
const quoteEl = document.getElementById("quote-text");
const genBtn = document.getElementById("gen-btn");
const url = "https://fakestoreapi.com/products/1";

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not okay");
        }
        return response.json();
    })
    .then((data) => console.log(data.description));

.catch ((error) =>
    console.error("Error:", error)
);
