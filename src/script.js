const quoteText = document.querySelector(".quote");
quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".name");

function randomQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerHTML = result.content;
      authorName.innerHTML = result.author;
    });
}

quoteBtn.addEventListener("click", randomQuote);
