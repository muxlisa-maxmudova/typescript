import Password from "./ConditionalRendering/Password.tsx";
const App = () => {
    return (
        <div>
            <Password isValid={false}/>
        </div>
    )
}
export default App
