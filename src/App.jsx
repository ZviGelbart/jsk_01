import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg';
import "./App.css";
import FruitList from "./FruitList";
import Menu from "./Menu.jsx";
// import CartList from "./cartList.jsx";
// import Api  from "./Api";

function App() {
  const [fruit, setFruit] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch("https://jbh-mockserver.onrender.com/fruits")
      .then((d) => d.json())
      .then((data) => {
        data.forEach((f) => (f.quantity = 0))
        setFruit(data)
        setFiltered(data)
  })
}, []);
  
function updateCart(){
  let update = [...fruit.filter(f => f.quantity>0)]
  setCart((update))
}

function onFruitUpdate(fruts) {
  const fruitIndex = fruit.findIndex((f) => f.id === fruts.id)
  fruit[fruitIndex] = fruts
  setFruit(fruit)
  updateCart()
}



  let colors = [];
  fruit.forEach((f) => {
    if (!colors.includes(f.color)) {
      {
        colors.push(f.color);
      }
    }
  });

  const handleColor = (color) => {
    setFiltered(fruit.filter((c) => (color ? c.color == color : true)));
  };

  const handleSearch = (text) => {
    setFiltered(fruit.filter((f) => f.name.includes(text)));
  };
  return (
    <div id="Container">
      <Menu
        colors={colors}
        handleColor={handleColor}
        handleSearch={handleSearch}
      />
      <FruitList
        fruit={filtered}
        onFruitUpdate={onFruitUpdate}
      />
      
      <FruitList
      fruit={cart}
      onFruitUpdate={onFruitUpdate}
      updateCart={updateCart}
      />



    

      {/* <Api/> */}
    </div>
  );
}

export default App;
