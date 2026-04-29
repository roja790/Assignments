function maxprofit(prices: any) {

    // let us declare minimum prices with the first number in an array  ie., 7
    let minprices = prices[0];
    //let us consider max profit=0
    let maxprofit = 0;
    //iterate by using the for loop
    for (let i = 1; i < prices.length; i++) {
        //using a condition and validate the prices[i]< min prices
        //if condition is true then store the pricees[i]= minprices
        //profit=prices[i]-minprices
        if (prices[i] < minprices) {
            minprices = prices[i];
        }
        let profit = prices[i] - minprices;

        //profit is greater than maxprofit then maxprofit=profit
        if (profit > maxprofit) {
            maxprofit = profit;
        }

        return maxprofit;
    }

}
let prices1 = [7, 1, 5, 3, 6, 4];
console.log("maximum profit :", maxprofit(prices1));
let prices2=[7,6,4,3,1]
console.log("no traacations done:" ,maxprofit(prices2));
/*
[7,1,5,3,6,4]=
consider from [1,2,3,4,5,6]
minprice=7
max price=0
------------------------------------------------------------------------
for(i=1;i<5) where condition is true
if(1<7)condition is true
minprice=1
profit=1-1=0
if(0>0)
maxprice=0 where max price=0 for the first iteration
-----------------------------------------------------------------------------------------------------------------
minprice=1
maxprice=0
for (i=2; 2<6)where condition is true
if(5<1)  condition is false
profit=5-1=4 
if(4>1)
maxprofit=4
-----------------------------------------------------------------------------------------------------------------------
minprice=1
maxprice=4
for(i=3;i<5) wherecondition is true
if(3<1) condition is false
profit=3-1=2
if(3>4)condition is false
maxprofit=4
--------------------------------------------------------------------------------------------------------------------------
minprce=1
maxprice=4
for(i=4;4<5) where  condition is true
if(6<1) condition is false
profit=6-1=5
if(5>4) condition is false
max profit=5
=========================================================================================================================================
minprice=1
maxprice=4
for(i=5; i<5) where condition is true
if(4<1)  condition is false
profit=4-1=3
if(4>5) condition is false
====================================================================================================================
let prices2=[7,6,4,3,1]
minprices=7
maxprice=0
for(i=1; 1<5)
if(7<7)//condition is false
profit=7-7=0
if(0>0)//condition is false
=========================================================================================================
minprices=7
maxprices=0
for(i=2; 2<5)
if(4<7)//condition is true
minprices=4
profit=4-7=-3
if(-3>0) condition is false 
maxprofit=0
====================================================================================================================================
minprices=4
maxprices=0
for(i=3;3<5)
if(3<6)
minprices=3
profit= 3-3=0
if(0>0)
maxprofitt=0
====================================================================================================================










*/