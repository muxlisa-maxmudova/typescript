type Temp = {
    temperature: number
}
const Weather = ({temperature}:Temp) => {
    if(temperature < 15){
            return <h1>Outside is cold!</h1>
        }else if(temperature > 15 && temperature < 25){
            return <h1>Sunny and warm 🌞</h1>
        } else if(temperature> 25) {
            return <h1>Outside is cold!</h1>
        }

    return(
        <div>
            <h1>Weather</h1>
        </div>
    )
}
export default Weather
