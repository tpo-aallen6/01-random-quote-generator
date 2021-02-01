/******************************************
Treehouse FSJS Techdegree: Adam Allen
project 1 - A Random Quote Generator
******************************************/

const quotes = [
  {
    quote: 'I’ve failed over and over and over again in my life and that is why I succeed.',
    source: 'Michael Jordan',
    tag: '#Motivation'
  },
  {
    quote: "I can't in good conscience allow the U.S. government to destroy privacy, internet freedom and basic liberties for people around the world with this massive surveillance machine they're secretly building.",
    source: 'Edward Snowden',
    tag: '#Hero'
  },
  {
    quote: 'Who controls the past controls the future. Who controls the present controls the past.',
    source: 'George Orwell',
    citation: '1984',
    year: 1949,
    tag: '#Ministry of Truth'
  },
  {
    quote: 'This body holding me reminds me of my own mortality. Embrace this moment, remember we are eternal, all this pain is an illusion.',
    source: 'Tool',
    citation: 'Parabola',
    year: 2001,
    tag: '#Lateralus'
  },
  {
    quote: "The secret to happiness, of course, is not getting what you want; it's wanting what you get.",
    source: 'Alex Trebek',
    tag: '#Genius'
  },
  {
    quote: 'Information is power. But like all power, there are those who want to keep it for themselves.',
    source: 'Aaron Swartz',
    tag: '#Hero'
  },
  {
    quote: "As it has for more than two centuries, progress will come in fits and starts. It's not always a straight line. It's not always a smooth path.",
    source: 'Barack Obama',
    citation: 'Victory Speech',
    year: 2012,
    tag: '#Legend'
  }
]

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
]

/**
 * Returns a random item from a given array when called.
 * Uses Math.floor and Math.random to generate a random number from the array's length.
 * @param randomItem the random index position of the item
 * @returns array[randomItem] the random item taken from the given array
**/

function getRandomItem (array) {
  const randomItem = Math.floor(Math.random() * array.length)
  return array[randomItem]
}

/***
 * Changes the background colors of various elements when called.
 * @param buttonHeaderColor holds the random color to allow specific elements to match
***/

function changeColors (arrayOfColors, doc) {
  const button = document.getElementById('load-quote')
  const quoteBox = document.getElementById('quote-box')
  const header = document.getElementById('random-quotes')
  const buttonHeaderColor = getRandomItem(arrayOfColors)
  button.style.backgroundColor = buttonHeaderColor
  quoteBox.style.backgroundColor = buttonHeaderColor
  header.style.backgroundColor = buttonHeaderColor
  document.body.style.backgroundColor = getRandomItem(arrayOfColors)
}

/***
 * Prints a random quote and source to the page.
 * Calls the getRandomItemfunction and stores a quote in randomQuote.
 * Prints to the page the random quote with the quote's source, citation, year, and tag if applicable. 
 * @param randomQuote holds the random quote to be printed to the page
 * @param html holds the layout of the content to be printed to the page
***/

function printQuote () {
  const randomQuote = getRandomItem(quotes)

  let html = `<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}`

  if (randomQuote.citation && randomQuote.year) {
    html += `<span class="citation">${randomQuote.citation}</span>
             <span class="year">${randomQuote.year}</span>`
  } else if (randomQuote.citation && !randomQuote.year) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  } else if (randomQuote.year && !randomQuote.citation) {
    html += `<span class="year">${randomQuote.year}</span>`
  }

  if (randomQuote.tag) {
    html += `<span class="tag">${randomQuote.tag}</span>`
  }

  html += `</p>`

  document.getElementById('quote-box').innerHTML = html
  changeColors(colors, document)
}

printQuote()

document.getElementById('load-quote').addEventListener('click', printQuote, false)

setInterval(printQuote, 5000)
