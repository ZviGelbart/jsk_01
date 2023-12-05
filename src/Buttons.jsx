function Buttons(props) {
  return (
  <div>
    <button onClick={()=>props.handleColor()}>All</button>

    {props.colors.map(c =>  <button key={c} onClick={()=>props.handleColor(c)}>{c}</button>)}
  </div>
  )
}
export default Buttons