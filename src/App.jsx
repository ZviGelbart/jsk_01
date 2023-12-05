import { useState , useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg';
import "./App.css";
import FruitList from "./FruitList";
import Menu from "./Menu.jsx"
import CartList from './cartList.jsx';
// import Api  from "./Api";



// const list = [
//   {
//     id: 1,
//     price: "1",
//     name: "Apple",
//     img: "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png",
//     color: "green",
//   },
//   {
//     id: 2,
//     price: "3",
//     name: "Banana",
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/640px-Banana-Single.jpg",
//     color: "yellow",
//   },
//   {
//     id: 3,
//     price: "1.5",
//     name: "Orange",
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/640px-Oranges_-_whole-halved-segment.jpg",
//     color: "orange",
//   },
//   {
//     id: 4,
//     price: "1.5",
//     name: "grapefruit",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNmWPlwdBuqXg5hAN7GVYR8Gk01-Fo_PERJEpfoDHjGkj7KQh_eZeoLTYxrYDqdJdyNM&usqp=CAU",
//     color: "orange",
//   },
//   {
//     id: 5,
//     price: "4",
//     name: "Lichi",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyr2VtFtIuo2j9Qecu0p7RKVgjywENp_8DsvKjCvrFSg&s",
//     color: "red"
//   },
//   {
//     id:6,
//     price: "8",
//     name: "Watermelon",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-z_k131FQu3iq0UT5-oCqFDbcgrRZ50f3dOtt681ueyeNJa3t5Wsq1LGHCVBzOuHOG78&usqp=CAU",
//     color: "green"
//   },
//   {
//     id: 7,
//     price: "9.5",
//     name: "grapes",
//     img: "https://www.taligrapes.co.il/wp-content/uploads/2021/02/artic_photo_1.jpg",
//     color: "purple"
//   },
//   {
//     id:8,
//     price: "11",
//     name: "strawberries",
//     img: "https://1stchoicefruitveg.com.au/cdn/shop/products/Strawberry-Transparent-Background.png?v=1537694322",
//     color: "red"
//   }
// ];



function App() {
  const [fruit, setFruit] = useState([])
  const [filterd, setFilterd] = useState([])
useEffect(()=>{
  fetch("https://jbh-mockserver.onrender.com/fruits")
  .then(f=>f.json())
  .then(d=>{setFruit(d)
setFilterd(d)}
)},[])


let colors = []
fruit.forEach(f=> {
  if(!colors.includes(f.color)){
    {colors.push(f.color)}
  }
});



const handleColor = (color)=>{
  
  setFilterd(fruit.filter(c=>color? c.color == color :true))
}


const handleSearch = (text)=>{
  setFilterd(fruit.filter(f=>f.name.includes(text)))
}
// if 
  return (
    <div id= "Container">
      <Menu colors={colors} handleColor={handleColor} handleSearch={handleSearch}  />
      <FruitList fruit={filterd} />
      <CartList/>
      
      {/* <Api/> */}
    </div>
  );
}

export default App;
