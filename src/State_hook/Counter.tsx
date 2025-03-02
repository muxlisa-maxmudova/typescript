import {useState} from "react";
const Counter = () => {
    const [count, setCount] = useState<number>(0);//<number> here is type
    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={()=>{setCount(prevState => prevState+1)}}>Increase</button>
            <button onClick={()=>{setCount(prevState => prevState-1)}}>Decrease</button>
        </div>
    )
}
export default Counter
