// constant variable's values used in website page  
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("btn");
const tweetme = document.getElementById("tweetme");
let realData ="";
let quotesdata ="";

//for posting on twitter platform 
const tweetNow = () =>{ 
    let tweetpost = `https://twitter.com/intent/tweet?text=${quotesdata.text} ${quotesdata.author}`;
    window.open(tweetpost);
};
// for getting new quotes on the page
const getnewQuotes =()=>{
    let rnum = Math.floor(Math.random()*20);
    quotesdata =realData[rnum];
    quotes.innerText =`${quotesdata.text}`;
    quotesdata.author = null 
        ? (author.innerText= "unknown" )
        : (author.innerText= `${quotesdata.author}`);
};
//function for get quotes from the API
const getQuotes = async () =>{
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api)
        realData = await data.json();
        getnewQuotes();
    } catch(error){}
};
// call function for tweet and changing the current quotes  
tweetme.addEventListener("click", tweetNow);
newQuotes.addEventListener("click", getnewQuotes);
getQuotes(); 