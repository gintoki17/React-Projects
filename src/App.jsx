import React from 'react'
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.css';
export default function App() {
  const [quotesData,setQuotesData]=React.useState({})

const fetchNewQuote=()=>{
  fetch("https://api.quotable.io/random")
  .then(res=>res.json())
  .then(data=>setQuotesData(data))
}

  React.useEffect(()=>{fetchNewQuote()},[]) 

  return (
    <div className='quote-box' id="quote-box">
      <section className='main'>
        <blockquote id="text" className='text'>{quotesData.content}</blockquote>
        <span id="author">{quotesData.author}</span>
        </section>
        <section className='footer'>
        <a href="twitter.com/intent/tweet" target="_top" id='tweet-quote' className='btn btn-outline-primary'>twitter</a>
            <button id="new-quote" onClick={fetchNewQuote} className='btn btn-outline-primary'>New Qoute</button>
          
        </section>
    </div>
  )
}
