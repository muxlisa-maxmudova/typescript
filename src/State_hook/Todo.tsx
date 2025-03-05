import {FormEvent, useState} from "react";
type TodoType = {
    name: string;
    date: string;
    id: number;
}
const Todo = () => {
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [todo, setTodo] = useState<TodoType[]>([{
        name:'',
        date:'',
        id:0
    }])
    const showTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTodo([...todo, { name:name.trim(), date:date.trim(), id:Math.random()}])
    }
    const deleteTodo = (id:number) => {
      setTodo(todo.filter((item)=>
          item.id !== id
      ))
    }
    return (
        <div>
            <h1>Todo</h1>
            <form onSubmit={showTodo}>
                <input
                type={'text'}
                placeholder='task...'
                onChange={(e)=>{setName(e.target.value)}}/>
                <input
                type={'date'}
                placeholder='deadline'
                onChange={(e)=>{setDate(e.target.value)}}/>
                <button type={'submit'}>add</button>
            </form>
            {todo.map((todo, index)=>(
                <ol key={Math.random()}>
                    <div style={{ display: todo.name==='' && todo.date==='' && todo.id===0? 'none': 'inline'}}>
                        {index}){todo.name}  {todo.date}
                        <button style={{marginLeft:'5px'}}  onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                </ol>
            ))}
        </div>
    )
}
export default Todo
