import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg';
import "./App.css";
import FruitList from "./FruitList";
import Menu from "./Menu.jsx";
import CartList from './cartList.jsx';
// import Api  from "./Api";





function App() {
  const [fruit, setFruit] = useState([])
  const [filtered, setFiltered] = useState([])
useEffect(()=>{
  fetch("https://jbh-mockserver.onrender.com/fruits")
  .then(f=>f.json())
  .then(d=>{
    const arrWithCount = d.map(i => ({...i, count: 0 }))
    setFruit(arrWithCount)
    setFiltered(arrWithCount)
  }
)},[])


let colors = []
fruit.forEach(f=> {
  if(!colors.includes(f.color)){
    {colors.push(f.color)}
  }
});



const handleColor = (color)=>{
  
  setFiltered(fruit.filter(c=>color? c.color == color :true))
}


const handleSearch = (text)=>{
  setFiltered(fruit.filter(f=>f.name.includes(text)))
}
  return (
    <div id= "Container">
      <Menu colors={colors} handleColor={handleColor} handleSearch={handleSearch}  />
      <FruitList
        fruit={filtered}
        updateFruitList={(newList) => setFruit(newList)}
      />
      <CartList/>
      
      {/* <Api/> */}
    </div>
  );
}

export default App;
