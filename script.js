const weight = document.querySelector(".weight");
const heightft = document.querySelector(".height-f");
const heightIn = document.querySelector(".height-in");
const heightCm = document.querySelector(".height-cm");
const output = document.querySelector(".output");
const status2 = document.querySelector(".status");


function submit() {
    const foot = heightft.value * 0.3048;
    const inches = heightIn.value * 0.0255;

    const totalHeightSq = (foot + inches) * (foot + inches);
         
    const BMI = (weight.value / totalHeightSq).toFixed(2);
    output.textContent = BMI;
    checkBMIstatus(BMI)
}

function getOption() {
    selectElement = document.querySelector('#select1');
    select = selectElement.value;
    document.querySelector('.select').textContent = select;
}
function checkBMIstatus(BMI) {
    let status = ''
    if (BMI <= 18.4) status = "Underweight";
    else if (BMI >= 18.5 && BMI <= 24.9) status == "Normal"; 
    else if (BMI >= 24.9 && BMI <= 39.9) status = "Over Weight";
    else if (BMI <= 40) status = "Obses";
    else status = 'Invalid';
    // console.log(status)
    status2.textContent = `You are ${status}`;
}
// function keypress(non) {
//     return (event.charCode != 8 && event.charCode == 0 || (event.charCode >= 48 && event.charCode <= 57))
// }
