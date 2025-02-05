import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("This should change")

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await fetch("https://server-pink-chi-86.vercel.app/api/home", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
 
          }
      });
    
        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers.get("content-type"));

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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='test'>{text}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
