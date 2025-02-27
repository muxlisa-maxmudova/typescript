type Person = {
    name: string,
    age: number
}
const Person = (props: Person) => {
    return (
        <div>
           <h2>Story</h2>
            <p>She had a daughter {props.name} and she
                was only {props.age} years old.
                Full story is on <a href='#' style={{textDecoration:'none',
                    color:'darkblue'}}>
                     this page</a>.</p>
        </div>
    )
}
export default Person
