const array = [5, 10, 25]
const pay = Number(prompt('Insert coin: '));
let total = 0
const freakOut = () => {
    for (let i = 0; i < array.length; i++) {
        if(pay===array[i]){
            if(pay === 25){
                total+=25
                alert('Add $25')
               let two =  +prompt('Insert coin: ')
                if(two < 25){
                   total += two
                    console.log(total)
                }else if(two === 25){
                    total += two
                    console.log(total)
                }
            }

        }
    }

}
freakOut()


