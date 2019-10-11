function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value
    updateConversion(); 
    if(weight > 0 && height > 0){	
    var finalBmi = weight/(height/100*height/100)
    document.bmiForm.bmi.value = finalBmi
    if(finalBmi < 18.5){
    document.bmiForm.meaning.value = "That you are too thin."
    }
    if(finalBmi > 18.5 && finalBmi < 25){
    document.bmiForm.meaning.value = "That you are healthy."
    }
    if(finalBmi > 25){
    document.bmiForm.meaning.value = "That you have overweight."
    }
    }
    else{
    alert("Please Fill in everything correctly")
    }
    document.querySelector('#times').innerHTML = 1;
    }

    document.querySelector('#calculate').addEventListener('click', calculate);



let conversions = parseInt(localStorage.setItem('conversions', '0'));
if (isNaN(conversions)){
    conversions = 0;
    console.log("in if statement");
    localStorage.setItem('conversions', conversions);
}


function updateConversion() {
    conversions = parseInt(conversions) + 1;
    console.log(conversions);
    localStorage.setItem('conversions', conversions);
    document.querySelector('#times').innerHTML = conversions;
}