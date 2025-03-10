import UserStatus from "./ConditionalRendering/taskeTwo/UserStatus.tsx";
import Weather from "./ConditionalRendering/Weather.tsx";
import Password from "./ConditionalRendering/Password.tsx";
import Greeting from "./ConditionalRendering/Greeting.tsx";

const App = () => {
    const d = new Date();
    return (
        <div>
            <Password isValid={true}/>
            <Greeting timeOfDay={d.getHours()}/>
            <UserStatus loggedIn={true} isAdmin={false} />
           <h1>Today is:</h1> <Weather temperature={16}/>


        </div>
    )
}
export default App
