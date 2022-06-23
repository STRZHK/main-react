import User from "./User";
import {useEffect , useState} from "react";

export default function App() {

    let [users, setUsers] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    })
  return (
    <div>
        <h2>List of Users</h2>
        {users.map(user =><User item={user}/>)}
    </div>
  );
}