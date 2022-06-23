import {useEffect, useState} from "react";
import Rocket from "./Rocket"

export default function App() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
                console.log(value);
            })
    })
}