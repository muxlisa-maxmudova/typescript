type DateType = {
    timeOfDay: number
}
const Greeting = (props:DateType) => {
    if(props.timeOfDay>7 && props.timeOfDay<12){
        return <h1>Good morning!</h1>
    }else if(props.timeOfDay>12 && props.timeOfDay<18){
        return <h1>Good afternoon!</h1>
    }else{
        return <h1>Good evening!</h1>
    }
}
export default Greeting
