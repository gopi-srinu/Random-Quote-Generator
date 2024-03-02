const quoteElement = document.getElementById('headingElement');
const hideHeading = document.querySelector("h3");
const quotes = [
    '"Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine". - Jack Ma',
    '"Like the greats, you want to make your own story yourself, and not be a copy of another". - Kylian Mbappe',
    '“Stay true to yourself. An original is worth more than a copy.” ― Suzy Kassem',
    '“People seldom improve when they have no model but themselves to copy after.” - Oliver Goldsmith',
    '“You were born an original work of art. Stay original.” - Suzy Kassem',
    '“The only way to efficiently battle evil is to copy enough to know how to counter each argument, yet not enough to believe all the bullshit.” - Will Advise',
    '“It`s better to be individual than a clone of someone else.” - Fennel Hudson',
    '“If you copy then it is not self-expression.” - Michael Schenker',
    '“Success is dangerous. One begins to copy oneself, and to copy oneself is more dangerous than to copy others. It leads to sterility.” - Pablo Picasso',
    '“Don`t Copy What Someone Is Doing, Copy What God Wants You To Do.” - Cyc Jouzy',
    '“Do your thing and dont care if they like it." - Tina Fey"',
    '“I`d rather regret the things I`ve done than the things I haven`t done." - Lucille Ball',
    '“Nothing is more difficult, and therefore more precious, than to be able to decide.” - Napoleon Bonaparte',
    '“When making a decision of minor importance, I have always found it advantageous to consider all the pros and cons.” - Sigmund Freud',
    '“Sometimes you make the right decision, sometimes you make the decision right.” - Phil McGraw',
    '“You may not control all the events that happen to you, but you can decide not to be reduced by them.” - Maya Angelou',
    '“Decision is a sharp knife that cuts clean and straight; indecision, a dull one that hacks and tears and leaves ragged edges behind it.” - Gordon Graham',
    '“Decision making is easy when your values are clear.” - Roy Disney',
    '“Truly successful decision-making relies on a balance between deliberate and instinctive thinking.” - Malcolm Gladwell'
];

function generateRandomQuote() {
    const genQuote = Math.floor(Math.random() * quotes.length);
    console.log(genQuote);
    quoteElement.innerHTML = quotes[genQuote];
    if (genQuote) {
        hideHeading.hidden = true;
    } else {
        hideHeading.hidden = false;
    }
}