import {useState} from "react";
const Objects = () => {
    const [friends, setFriends] = useState<(string|number)[]>(['Jenna', 'Jessica', 2])
    const add : () => void = () =>{
        setFriends([...friends, 'Anna'])
    }
    return (
        <div>
            {friends.map((friend:string|number)=>(
                <li>{friend}</li>
            ))}
            <button onClick={add}>add</button>
        </div>
    )
}
export default Objects
