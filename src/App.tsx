import Button from "./components/Button.tsx";
const App = () => {
    return (
        <div>
            <Button label={'click me'} onClick={() => {
                console.log('Hello world')}} disabled={false}/>
        </div>
    )
}
export default App
