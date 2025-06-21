import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const colors = [
    '#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D',
    '#6A4C93', '#00C49A', '#F65A83', '#FF8E00'
  ];

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState(colors[0]);

  const fetchQuote = () => {
    fetch("https://zenquotes.io/api/random") //fetching API 
      .then(res => res.json())
      .then(data => {
        setQuote(data[0].q);
        setAuthor(data[0].a);
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
      })
      .catch(err => {
        setQuote("Something went wrong.");
        setAuthor("Unknown");
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="quote-box">
        <h2 className="quote">"{quote}"</h2>
        <small className="author">- {author} -</small>
        <button
          className="new-quote-btn"
          onClick={fetchQuote}
          style={{ color: color }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;