import UserInfo from "./components/UserInfo.tsx";
import AdminInfo from "./components/AdminInfo.tsx";
const App = () => {
    const user = {
        id:1,
        name:'Joe',
        email:'joe@gmail.com',
    };
    const admin = {
        id:1,
        name:'Jenna',
        email:'jenna@gmail.com',
        role:'admin',
        lastLogin: new Date(),
    };
    return (
        <div>
            <UserInfo user={user}  />
            <AdminInfo admin={admin}/>
        </div>
    )
}
export default App
