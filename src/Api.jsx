// import { useEffect ,useState} from "react";



// export default function Api() {
//     const [list, setList] = useState([])
//   useEffect(() => {
//     fetch("https://dummyjson.com/users")
//       .then((f) => f.json())
//       .then((data) => setList(data.users));
//   }, []);
//   return <div>
//     <ul>
//         {list.map(u => <li key={u.id}><b>first name: </b>{u.firstName} <b>last name: </b>{u.lastName}<br></br></li>)}
//     </ul>
//   </div>;
// }
