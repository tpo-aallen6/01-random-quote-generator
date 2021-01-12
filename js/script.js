/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
    source: 'Michael Jordan',
  },
  {
    quote: "I can't in good conscience allow the U.S. government to destroy privacy, internet freedom and basic liberties for people around the world with this massive surveillance machine they're secretly building.",
    source: 'Edward Snowden',
  },
  {
    quote: "Who controls the past controls the future. Who controls the present controls the past.",
    source: 'George Orwell',
    citation: '1984',
    year: 1949
  },
  {
    quote: 'This body holding me reminds me of my own mortality. Embrace this moment, remember we are eternal, all this pain is an illusion.',
    source: 'Tool',
    citation: 'Lateralus - Parabola',
    year: 2001
  },
  {
    quote: "The secret to happiness, of course, is not getting what you want; it's wanting what you get.",
    source: 'Alex Trebek',
  },
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const random = Math.floor(Math.random()* quotes.length);
  return quotes[random];
}

/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}</p>`;
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

printQuote();

document.getElementById('load-quote').addEventListener("click", printQuote, false);