let total = 0
let coin = 0;
const machine = () => {
    while(total<50){
        let coinInserted = Number(prompt(`Insert ${50-coin} coin`))
        if(coinInserted===5 || coinInserted===10 || coinInserted===25){
            coin+=coinInserted
            total+=coinInserted
        }else(total+=0)
        if(total===50){
            alert('Amount due: 0')
        }else if(total>50){
            alert(`Change owed: ${total-50} coin`)
        }
    }
}
machine()
console.log(total)


