const transactions:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000]
let credit=0;
let totalcredit=0
let debit=0
let totaldebit=0
let suspicious=0

for(let t of transactions)
{
    if(t>0) 
    /*  if(50000>0) condition is true
count=1
    totalcredit=0+50000=50000
    if(-2000>0)codition is false
    if(3000>0)condition is true
    count=2
    totalcredit=50000+3000=53000
    if(-15000>0)condition is fase
    if(if-200>0)condition is false
    if(-300>0)condition is false
    if(4000>0)condition is true
    totalcredit=53000+4000=57000

    
    
    */
    {
credit++
totalcredit=totalcredit+t;
    }
    else{
        debit++;
        totaldebit=totaldebit+t;
    }
    if(Math.abs(t)>10000)
    {
        console.log("suspicious:",t);
        suspicious++;
    }
}

let finalbalance=totalcredit+totaldebit;


console.log("Finalbalance:",finalbalance);
console.log("Credits:" ,credit);
console.log("Debits:",debit);
console.log("Totalcreditamount:",totalcredit);
console.log("TotalDebit:",totaldebit);
console.log("Suspicious:",suspicious);