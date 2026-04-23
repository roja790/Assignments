let employeeDetails = [{ name: "AliceJohnson", base: 75000, exp: 5.1, Rating: 4.2 },
{ name: "Bob Smith", base: 68000, exp: 3.2, Rating: 3.8 },
{ name: "CorolDavis", base: 82000, exp: 7.1, Rating: 4.5 },
{ name: "David Brown", base: 90000, exp: 10.2, Rating: 2.5 },
{ name: " EVA Green", base: 60000, exp: 2.4, rating: 3.5 }];

/*
Function gethike(emp:any)-->calls single function at once
example:AliceJohnson if(5.1>=4)condition is true
bonous=1500
percent=15
if(5.1>=5)
reward=5000

hike=(75000*15/100)+1500+5000= 17750
let hikepercent=(17750/75000)*100;=26.66
Any calls the second  employeee

*/
function gethike(emp: any) {
    let percent = 0;
    let bonous = 0;
    if (emp.Rating >= 4) {
        bonous = 1500;
        percent = 15
    }
    else if (emp.Rating >= 3 && emp.Rating < 4) {
        bonous = 1200;
        percent = 10;

    }
    else {
        bonous = 300;
        percent = 3.0;
    }
    let reward = 0;
    if (emp.exp >= 5) {
        reward = 5000;
    }
    let hike = (emp.base * percent / 100) + bonous + reward;
    let hikepercent = (hike / emp.base) * 100;
    return hikepercent;


}
for (let emp of employeeDetails) {
    let result = gethike(emp);
    console.log(emp.name + "==>" + result + "%")
}
