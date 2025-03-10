import UserStatus from "./ConditionalRendering/taskeTwo/UserStatus.tsx";

const App = () => {
    return (
        <div>
            <UserStatus loggedIn={false} isAdmin={false} />
        </div>
    )
}
export default App
