
function Fruit(props) {
  
  const handleMinus = () => {
    if (props.quantity != 0) {
      
      props.onQuantityChange(props.quantity - 1)
      
    }
  };
  return (
    <div>
      <h1 id="fontH1"> {props.name} </h1>
      {/* <img src={props.img} alt="" /> */}
      <h2>{props.emoji}</h2>
      <h4> {props.price}$</h4>
      <h5>{props.color}</h5>
      <span>
        <button
          onClick={() => {
            props.onQuantityChange(props.quantity + 1);
          }}
        >
          +
        </button>




        <span>{props.quantity}</span>
        {props.quantity > 0 && <button onClick={handleMinus}>-</button>}
      </span>
    </div>
  );
}

export default Fruit;
