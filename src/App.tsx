import UserStatus from "./ConditionalRendering/taskeTwo/UserStatus.tsx";
import Weather from "./ConditionalRendering/Weather.tsx";
import Password from "./ConditionalRendering/Password.tsx";

const App = () => {
    return (
        <div>
            <Password isValid={true}/>
            <UserStatus loggedIn={true} isAdmin={false} />
           <h1>Today is:</h1> <Weather temperature={16}/>

        </div>
    )
}
export default App
