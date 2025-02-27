import {AdminInfoList} from "../types.ts";

type AdminInfo = {
    admin: AdminInfoList
 }
const AdminInfo = ({admin}:AdminInfo) => {
    return (
        <div>
            <h1>Admin</h1>
            <p>{admin.id}</p>
            <p>{admin.name}</p>
            <p>{admin.email}</p>
            <p>{admin.role}</p>
            <p>{admin.lastLogin.toLocaleString()}</p>
        </div>
    )
}
export default AdminInfo
