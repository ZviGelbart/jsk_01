import { useState } from "react"

function Fruit(props){
  const [count, setCount] = useState(0)
  const handleMinus = ()=>{
    if(count!=0){setCount(count - 1)}
  }
    return (
        <div>

          <h1 id="fontH1">  {props.name} </h1>
            <img src={props.img} alt="" />
            <h4> {props.price}$</h4>
            <h5>{props.color}</h5>
              <span>
                <button onClick={()=>{setCount(count + 1)}}>+</button>
               <span>{count}</span>
                {count > 0 && <button onClick={handleMinus}>-</button>}
              
                </span>
            </div>
    )

}

export default Fruit