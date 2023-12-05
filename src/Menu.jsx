import Buttons from "./Buttons"
import Search from "./Search"


function Menu(props){
return (
    <div>
    <Buttons colors = {props.colors} handleColor={props.handleColor}/>
    <Search handleSearch = {props.handleSearch}/>
    </div>
)
}
export default Menu