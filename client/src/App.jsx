import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("This should change")

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"
    const fetchData = async () => { 
      try {
        const response = await fetch(`${API_URL}/api/home`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        setText(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
   
}, []);

  return (
    <>
      <h1>{text}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
