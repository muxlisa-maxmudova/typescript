export let computerChoice=''
 export const choice = (random:number) => {
    if(random>0 && random<0.3) {
        computerChoice = 'paper'
    } else if (random > 0.3 && random<0.6){
        computerChoice = 'rock'
    }else{
        computerChoice = 'scissors'
    }
}