const quotes = [
  {
    quote:
      "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
    author: "Rosa Parks",
  },
  {
    quote: "Being happy never goes out of style.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "Life is either a great adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote:
      "All you need in this life is ignorance and confidence; then success is sure.",
    author: "Mark Twain",
  },
  {
    quote:
      "I have very strong feelings about how you lead your life. You always look ahead, you never look back.",
    author: "Ann Richards",
  },
  {
    quote:
      "Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
    author: "Barbara Bush",
  },
  {
    quote:
      "All your life, you will be faced with a choice. You can choose love or hate…I choose love.",
    author: "Johnny Cash",
  },
  {
    quote: "I don't go by the rule book…I lead from the heart, not the head.",
    author: "Princess Diana",
  },
  {
    quote: "The time is always right to do what is right.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
