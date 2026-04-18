function EmployeeDetails(customername:String, Creditscore: number,
    income:number,isemploye: boolean, DebtToIncomeRatio:number): any
{
 if(Creditscore>=750)
 {
    console.log(`Approve the loan for ${customername}`)
 }
      else if(Creditscore>=650 &&  Creditscore<=750)
    {
         if(income>=50000)
         {
              if(isemploye==true)
              {
                if(DebtToIncomeRatio<=0.4)
                {
                    console.log(`${customername} has DTI ratio less than 40% please approve the loan`);
                }
                else
                {
                    console.log(`${customername} has DTI ratio greater than 40% please decline the loan`)
                }
              }
              else{
                console.log(`${customername} is unemployed the loan is dennied`)
              }
         }
         else{

            console.log(`${customername}loan is not considered for the income less than 50000`)
         }


 }
 else
 {
    console.log(`${Creditscore}the customer must aleast have ${income} to consider the loan`)
   
       
}
}
//function call

EmployeeDetails("john Doe",720,55000,true,0.3);


