import UserInfo from "./components/UserInfo.tsx";
import AdminInfo from "./components/AdminInfo.tsx";
import {AdminInfoList, Info} from "./types.ts";
const App = () => {
    const user : Info = {
        id:1,
        name:'Joe',
        email:'joe@gmail.com',
    };
    const admin : AdminInfoList = {
        // we have to indicate the
        // types importing from types
        id:1,
        name:'Jenna',
        email:'jenna@gmail.com',
        role:'admin',
        lastLogin: new Date(),
    };
    return (
        <div>
            <UserInfo user={user}/>
            <AdminInfo admin={admin}/>
        </div>
    )
}
export default App
