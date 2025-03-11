import {useState} from "react";


const PaperRockScissors = () => {
     const [you, setYou] = useState<number>(0)
     const [computer, setComputer] = useState<number>(0)
    let computerChoice=''
    const choice = (random:number) => {
        if(random>0 && random<0.3) {
            computerChoice = 'paper'
        } else if (random > 0.3 && random<0.6){
            computerChoice = 'rock'
        }else{
            computerChoice = 'scissors'
        }

    }
    const comparison = (userChoice:string) => {
        choice(Math.random())
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                console.log('hello, you lost 😕')
                setComputer((prevState)=>prevState+1)
            }else if(computerChoice === 'rock') {
                console.log('hello, You won 😎')
                setYou((prevState)=>prevState+1)
            }else if(computerChoice === 'paper') {
                console.log('a Tie🤪')
                setComputer((prevState)=>prevState)
                setYou((prevState)=>prevState)
            }
        }else if(userChoice === 'rock') {
            if (computerChoice === 'rock') {
                console.log('a Tie🤪')
                setComputer((prevState)=>prevState)
                setYou((prevState)=>prevState)
            }else if(computerChoice === 'paper') {
                console.log('hello, you lost 😕')
                setComputer((prevState)=>prevState+1)
            }else if(computerChoice === 'scissors') {
                console.log('hello, You won')
                setYou((prevState)=>prevState+1)
            }
        }else if(userChoice === 'scissors') {
            if(computerChoice === 'rock') {
                console.log('hello, you lost 😕')
                setComputer((prevState)=>prevState+1)
            }else if(computerChoice === 'paper') {
                console.log('hello, You won')
                setYou((prevState)=>prevState+1)
            }else if(computerChoice === 'scissors') {
                console.log('a Tie🤪')
                setComputer((prevState)=>prevState)
                setYou((prevState)=>prevState)
            }
        }
    }
    const reset = () => {
         setComputer(0)
        setYou(0)
    }

    
    return (
        <div>
            <button onClick={() => comparison('paper')} style={{marginRight:'5px'}}>PAPER</button>
            <button onClick={() => comparison('rock')} style={{marginRight:'5px'}}>ROCK</button>
            <button onClick={() => comparison('scissors')} style={{marginBottom:'5px'}}>SCISSORS</button>
            <br/>
            <p>Score:</p>
            <span style={{marginTop:'30px'}}>You: {you}</span>
            <br/>
            <span>Computer: {computer}</span>
            <br/>
            <br/>
            <button onClick={reset}>RESET</button>

        </div>
    )
}
export default PaperRockScissors
