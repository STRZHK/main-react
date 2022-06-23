// THAT IS FOR TASK 1
export default function User(props) {
    let {item, choose} = props;
    return (
        <div>
            {item.id}. {item.name} >>
            <button onClick={()=>{
                choose(item);
            }}>more details</button>
        </div>
    )
}