
function Search(props){
    return(
        <div>
            <input type="search" onInput={(event) => props.handleSearch(event.target.value)} />
        </div>
    )
}
export default Search