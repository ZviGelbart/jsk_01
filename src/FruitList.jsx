// import { useState } from "react";
import Fruit from "./Fruit.jsx";

function FruitList(props) {


  return (
    <div>
    <div className="fruitList">
      {props.fruit
      .map((f) => (
        <Fruit
          key={f.id}
          name={f.name}
          price={f.price}
          img={f.img}
          color={f.color}
          emoji={f.emoji}
          count={f.count}
          onCountChange={(count) => {
            f.count = count
            props.updateFruitList(props.fruit)
          }}
        />
      ))}
      </div>
    </div>
  );
}

export default FruitList;
