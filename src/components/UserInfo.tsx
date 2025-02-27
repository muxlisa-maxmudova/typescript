import {Info} from "../types.ts";
type UserInfo = {
    user:Info
}
const UserInfo = ({user}:UserInfo) => {
    return (
        <div>
            <h1>UserInfo</h1>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}
export default UserInfo
