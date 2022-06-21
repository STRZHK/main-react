export default function Character(props){
    console.log(props);
    let {name, desc, picture} = props;

    return(

        <div>
            <h2>{name}</h2>
            <p>{desc}</p>
            <img src={picture} alt="bart"/>
        </div>
    )
}