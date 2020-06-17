const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction){
    user.transactions.push(transaction)

    if(transaction.type === 'credit'){
        user.balance = user.balance + transaction.value
    }else{
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type){
    let higherTransiction
    let higherValue = 0

    for(let transiction of user.transactions){
        if(transiction.value > higherValue && transiction.type == type){
            higherTransiction = transiction
            higherValue = transiction.value
        }
    }
    return higherTransiction
}

function getAverageTransactionValue(){
    let sum = 0
    for(let transaction of user.transactions){
        sum += transaction.value
    }
    return sum/user.transactions.length
}
function getTransactionsCount(){
    let count={
        credit:0,
        debit:0
    }
    for(let transaction of user.transactions){
        if(transaction.type === 'credit'){
            count.credit++
        }else{
            count.debit++
        }
    }
    return count
}




createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 90 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); 

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }
