import './App.css';
import { useState, useEffect } from 'react';



function App() {
  
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  
  const quoteAPI = async () => {
    try {
      const res =  await fetch(`https://api.api-ninjas.com/v1/quotes`);
      const data = await res.json();
      console.log(data);
      let randomNum = Math.floor(Math.random() * data.length);
      setQuote(data[randomNum]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);
  
  return (
    <div className="App">
      <p>{quote.text}</p>
    </div>
  );
}

export default App;
