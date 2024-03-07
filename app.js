var ChemMarks = document.querySelector ("#Chem-marks")
var PhyMarks = document.querySelector ("#Phy-marks")
var MathsMarks = document.querySelector ("#Maths-marks")
var ComMarks = document.querySelector ("#Com-marks")
var studentTotal =document.querySelector("#total-marks")
var Percentage =document.querySelector("#percentage")
var grade =document.querySelector("#grade")

function calculatePercentage() {
    console.log(ChemMarks.value);
    console.log(PhyMarks.value);
    console.log(MathsMarks.value);
    console.log(ComMarks.value);





    var totalmarks = 400
    var obtainedmarks = +ChemMarks.value + +PhyMarks.value + +MathsMarks.value + +ComMarks.value;
    console.log("obtainedmarks ===>" , obtainedmarks);
    studentTotal.innerHTML = obtainedmarks


    var studentpercentage = obtainedmarks / totalmarks * 100
    Percentage.innerHTML = studentpercentage



    if(studentpercentage > 90){
        grade.innerHTML = "A+"
    }else if(studentpercentage > 70){
        grade.innerHTML = "A"
    }else if(studentpercentage > 60){
        grade.innerHTML = "B"
    }else{
        grade.innerHTML = 'fail'
    }



}