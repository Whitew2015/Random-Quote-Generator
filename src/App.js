import './App.css';
import { useState, useEffect } from 'react';

function App() {
  
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
  }, []);

  
  return (
    <div>
      <h2>{quote}</h2>
      <small>-{author}-</small>
    </div>
  );
}

export default App;
