
function BMI(weight = 80, height = 1.8) {
    let reslut = weight / (height * height)
return reslut;
}

console.log(BMI(80, 1.8))

function Status(BodyMass) {
if (BodyMass < 18.5) {

    return 'لديك نقص بالوزن';

}else

if(BodyMass >= 18.5 && BodyMass < 25) {

return "وزنك صحي";

}else 

if (BodyMass >= 25) {

    return "لديك زياده في الوزن";
}

}

function calculate() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmi_value = BMI(weight, height)
    let desc = Status(bmi_value)
    let box = document.getElementById("result");
    box.innerText = bmi_value + " == " + desc
}

console.log(BMI())