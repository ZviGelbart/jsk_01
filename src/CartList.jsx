import SumCart from "./sumCart"
import CartItem from "./CartItem"

export default function cartList() {
  return (
    <div>
        <p>cart</p>
        <CartItem/>
        <SumCart/>
    </div>
  )
}
