//variable
let table_output = '';
let patientName = '';
let subInfo = '';
// var paitent_list = document.querySelector("#paitent_list");
let diagnosis_type = '';
let table = document.getElementById("patient_list");




//Read JSON file after the user select the student name in drop down list
document.getElementById('all_patients').addEventListener('click',function(patientName){
    var txt = "";

    patientName = patientName.target.value
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET","patients.json",true);
    xhr.send();

    xhr.onload = function(){
        if(this.status == 200 && this.readyState == 4){
            var patientData = JSON.parse(this.responseText);
            console.log(patientData)
            for (var x = 0; x < patientData.length; x++) {
                var t = document.getElementById('patient_list').insertRow(0);
                for(var y = 0; y < 5; y++) {
                    
                }
              }
              
        }
    }
});

document.getElementById('all_patients').addEventListener('click',function(patientName){

});
