import { useState } from 'react'
import ShowHide from "./components/ShowHide";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h2>Reset Password</h2>
        <ShowHide/>
      </div>
    </>
  )
}

export default App
