import Character from "./character";
import React, { useEffect,useState } from "react";


export default function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then((value) => {
                setItems(value);
                console.log(value);
            })
    },[])

    return (
        <div>
            {
                items.map(value => <Character id={value.id} name ={value.name} status={value.status}/>)
            }
        </div>
    );
}

