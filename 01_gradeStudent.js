let marks = 80;

let grade = "";

if(marks>=90 && marks<=100){
    grade = "A";
}
else if(marks>=70){
    grade = "B";
}
else if(marks>=50){
    grade = "C";
}
else{
    grade = "F";
}

console.log(`Grade of the student is ${grade}`);