import User from "./User";
import {useEffect , useState} from "react";

// export default function App() {
//
//     let [users, setUsers] = useState([]);
//     let [user, setUser] = useState([]);
//
//     useEffect(()=> {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json())
//             .then(value => {
//                 setUsers(value);
//             })
//     })
//
//     const chosenUser = (item) => {
//         setUser(item)
//     }
//
//   return (
//     <div>
//         <h2>List of Users</h2>
//         {users.map((user, index )=> <User
//             key={index}
//             item={user}
//             choose={chosenUser}
//         />)}
//         {
//             user && <div>
//                 <h4>User details</h4>
//                 Email -{user.email}
//                Username - {user.username}
//                 Website -{user.website}
//             </div>
//         }
//
//     </div>
//   );
// }

// SPACEX task (task 2)
export default function App() {

    let [launch, setLaunch] = useState([]);

    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setLaunch(value);
            })
    })

    return (
        <div>
                {launch.filter(launch => launch.launch_year !== "2020").map(filteredLaunch => (
                    <li>
                        {filteredLaunch.launch_year} { }
                        {filteredLaunch.mission_name} {  }
                        <img src={filteredLaunch.links.mission_patch_small}/>
                    </li>
                ))}
        </div>
    );
}