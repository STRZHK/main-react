export default function Character(props){
    let {item: {id, name, status, species, gender, image}} = props;

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