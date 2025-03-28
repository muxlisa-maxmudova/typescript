import {useState} from "react";
const Objects = () => {
    const [friends, setFriends] = useState<{name:string}>({name: 'Mukhlisa'})
    const[toggle, setToggle] = useState<boolean>(false)
    const change:() => void = () => {
        setToggle(!toggle)
        setFriends( !toggle ? { name: 'Kaya'}: {...friends, name:'Mukhlisa'})
    }
    return (
        <div>
            {friends.name}
            <button onClick={change}>change</button>
        </div>
    )
}
export default Objects
