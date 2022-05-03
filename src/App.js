import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useState, useEffect } from "react";

function App() {
  const [comment, setInfo] = useState([]);
  useEffect(() => {
    fetch("/userreviews").then(res => response.json()).then(info => setInfo(data));
  }, []);
  return (
    <div className="App">
      {comment.map(rev => (
        <div>
          {rev.rating}
          {rev.Song}
          {rev.artist}
          {rev.artist}
        </div>
      ))}
    </div>
  );
  //{comment}
}

export default App;
