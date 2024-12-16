// name
const nameid = document.getElementById('nameId');
const span = document.getElementById('nameSpan');

// Email
const em_id = document.getElementById('emailId');
const em_span = document.getElementById('emailSpan');

// Password
const passid = document.getElementById('passId');
const passSpan = document.getElementById('passSpan');

// Address
const add_id = document.getElementById('addId');
const add_span = document.getElementById('addSpan');


function saveClick() {
     
    // Name
    if(!nameid.value){
        span.style.display = 'block';
        nameid.style.border = "1px solid #EB5757";
    }
    else{
        span.style.display = 'none';
        nameid.style.border = "1px solid black";
    }

    //   Email
    if(!em_id.value){
        em_span.style.display = 'block';
        em_id.style.border = "1px solid #EB5757";
    }
    else{
        em_span.style.display = 'none';
        em_id.style.border = "1px solid black";
    }

    // password
     if(passid.value.length < 4 || passid.value.length > 12 ){
         passSpan.style.display = 'block';
         passid.style.border = "1px solid #EB5757";
     }
     else{
         passSpan.style.display = 'none';
         passid.style.border = "1px solid black";
     }


    //  Address
    if(!pass_id.value){
        pass_span.style.display = 'block';
        pass_id.style.border = "1px solid #EB5757";
    }
    else{
        pass_span.style.display = 'none';
        pass_id.style.border = "1px solid black";
    }

    // CheckBox
    const checkedElements = docement.querySelectorAll("input[name='sport']:checked");
    const cricketSpan = document.getElementById("cricketSpan");
    if(checkedElements.length > 0) {
        cricketSpan.style.display = 'none';
    }
    else{
        cricketSpan.style.display = 'block';
    }
    
}


// Reset
function resetOn() {
    document.getElementById('myform').reset();
}
