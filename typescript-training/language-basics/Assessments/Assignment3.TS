//Create a string  and store the names of students
const studentname: String[] = ["Suresh", "Mashesh", "Naresh"]
//Create a Array and store the marks of student
const marks: number[] = [75, 80, 82]
let total = 0;
for (let i: number = 0; i <marks.length; i++) {
    /*
    i=0;i<2 condition=true
    finalmarks=75+10=85 and print Suresh 85
    i=1;
    finalmarks=80+10=90  and print Mahesh 90
    i=2
    final marks= 82+ 10=92 and print Naresh 92
    
    */
    //let totalmarks=0;
    let Finalmarks = marks[i]! + 10;
    console.log(studentname[i], Finalmarks);

    /*
    total=0
    total=0+85 where total=85
    total=85+90 where total=175
    total=175+92 where total =267
    
    
    */
    total = total + Finalmarks;
}
/*
averagee=267/3=89
*/
let average = total / marks.length;//
console.log("Averagemarks" ,":" + average);