import Character from "./character";
import React, { useEffect,useState } from "react";


export default function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
                console.log(value);
            })
    },[])

    return (
        <div>

            {
                users.map(value => <Character key={value.id}
                item={value.name}
                status={value.status}/>)
            }

        </div>
    );
}

