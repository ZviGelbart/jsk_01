// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import FruitList from "./FruitList";

function App() {
  let id = "Container";

  return (
    <div id={id}>
      <FruitList />
    </div>
  );
}

export default App;
