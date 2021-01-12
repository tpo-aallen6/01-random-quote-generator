/******************************************
Treehouse FSJS Techdegree: Adam Allen
project 1 - A Random Quote Generator
******************************************/

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
    citation: 'Parabola',
    year: 2001
  },
  {
    quote: "The secret to happiness, of course, is not getting what you want; it's wanting what you get.",
    source: 'Alex Trebek',
  },
  {
    quote: "Information is power. But like all power, there are those who want to keep it for themselves.",
    source: 'Aaron Swartz',
  },
  {
    quote: "As it has for more than two centuries, progress will come in fits and starts. It's not always a straight line. It's not always a smooth path.",
    source: 'Barack Obama',
    citation: 'Victory Speech',
    year: 2012
  }
];

/*** 
 * `colors` array 
***/

const colors = [
  '#246D0A',
  '#530A6D',
  '#0A4F6D',
  '#6D280A',
  '#AF7F47',
  '#4777AF',
  '#6DA489',
  '#A46D88',
  '#654384',
  '#628443',
  '#478B92',
  '#924E47',
  '#744792'
];

const button = document.getElementById('load-quote');
const quote_box = document.getElementById('quote-box');
const header = document.getElementById('random-quotes');

/*** 
 * `getRandomColor` function 
***/

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const random = Math.floor(Math.random()* quotes.length);
  return quotes[random];
}

function changeColors() {
  const buttonHeaderColor = getRandomColor();
  button.style.backgroundColor = buttonHeaderColor;
  quote_box.style.backgroundColor = buttonHeaderColor;
  header.style.backgroundColor = buttonHeaderColor;
  document.body.style.backgroundColor = getRandomColor();
}

/***
 * `printQuote` function
***/

function printQuote() {
  const randomQuote = getRandomQuote();

  let html = `<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}</p>`;
  
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

    if (randomQuote.year) {
      html += `<span class="year">${randomQuote.year}</span>`;
  }

  document.getElementById('quote-box').innerHTML = html;
  changeColors();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

printQuote();

document.getElementById('load-quote').addEventListener("click", printQuote, false);