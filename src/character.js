// export default function Character(props){
//     console.log(props);
//     let {name, desc, picture} = props;
//
//     return(
//
//         <div>
//             <h2>{name}</h2>
//             <p>{desc}</p>
//             <img src={picture} alt="bart"/>
//         </div>
//     )
// }


// SECOND TASK!!!
export default function Character(props){
    console.log(props);
    let {id, name, status, species, gender, image} = props;

    return(

        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <p>{gender}</p>
            <img src={image} alt=""/>
        </div>
    )
}