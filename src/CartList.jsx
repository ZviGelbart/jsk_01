import Fruit from './Fruit'

export default function cartList(props) {
  return (
    <div>cartList
    <div>
     {props.Fruit.map((f) => (<Fruit
     key={f.id}
     name= {f.name}
     emoji={f.emoji}
     quantity={f.quantity}
     onQuantityChange ={(newQuantity)=>{
      const newItem ={...f, quantity:newQuantity}
      props.onFruitUpdate(newItem)
     }}
     />))}
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}
