const quotes = [
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan",
    },
    {
        quote: "There are a lot of things to be happy about.",
        author: "Inside out",
    },
    {
        quote: "Today's special moments are tomorrow's memories.",
        author: "Aladdin",
    },
    {
        quote: "Do what you like, love what you do.",
        author: "Tangled",
    },
    {
        quote: "Carpe Diem, Seize the day. Make your lives extraordinary.",
        author: "Robin Williams, Dead Poets Society",
    },
    {
        quote: "Don't beat yourself up. Don't need to run so fast. Sometimes we come last but we did our best.",
        author: "zootopia",
    },
    {
        quote: "To love someone, you have to love yourself first.",
        author: "Beauty and the beast",
    },
    {
        quote: "All of our dreams can come true, if we have the courage to pursue them.",
        author: "Walt Disney",
    },
    {
        quote: "The supreme happiness in life is the conviction that we are loved.",
        author: "Victor Hugo",
    },
    {
        quote: "The way get started is to quit talking and begin doing.",
        author: "Walt Disney"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/* Math module 이용하기 
1) .random() 메서드는 0부터 1 사이의 랜덤한 값을 반환함 --> 여기에 10을 곱하면 0~110 사이의 숫자를 얻을 수 있다.
--> 단, float형이므로 소수점 뒤 숫자들은 필요 없다 --> 여기서는 올림, 반올림해서 10이 나오면 안되므로 floor을 사용한다.
*/
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];  // .length : 배열의 길이 구하기
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;