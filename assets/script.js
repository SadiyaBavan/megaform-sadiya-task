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

// Table Body
const myid = document.getElementById("myid");


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
    if(!add_id.value){
        add_span.style.display = 'block';
        add_id.style.border = "1px solid #EB5757";
    }
    else{
        add_span.style.display = 'none';
        add_id.style.border = "1px solid black";
    }

    // CheckBox
    const checkedElements = document.querySelectorAll("input[name='sport']:checked");
    const checkSpan = document.getElementById("checkSpan");
    if (checkedElements.length > 0) {
        checkSpan.style.display = 'none';
    }
    else {
        checkSpan.style.display = 'block';
    }

    // Radio
    const checkedElementsRadio = document.querySelectorAll("input[name='radio']:checked");
    const radioSpan = document.getElementById("radioSpan");
    if (checkedElementsRadio.length  > 0) {
        radioSpan.style.display = 'none';
    }
    else{
        radioSpan.style.display = 'block';
    }

    // Country
    const myCountry = document.getElementById("myCountry");
    const mySelect = document.getElementById("mySelect");

    if(!myCountry.value) {
        mySelect.style.display = 'block';

    }
    else{
        mySelect.style.display = 'none';

    }

    if (nameid.value &&
        em_id.value &&
        passid.value.length > 4 &&
        passid.value.length < 12 &&
        add_id.value &&
        checkedElements.length != 0 &&
        genderElements.length != 0 &&
        selectid.value
    ) {
        const formData = {
            name: nameid.value,
            email:em_id.value,
            password: passid.value,
            address: add_id.value,
            country: myCountry.value,
        };
        addData(formData);
        resetSave();
    
}
}

function addData(formData){
    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const addressTd = document.createElement("td");
    const passwordTd = document.createElement("td");
    const genderTd = document.createElement("td");
    const countryTd = document.createElement("td");
    const checkTd = document.createElement("td");

    nameTd.innerHTML = formData.name;
    emailTd.innerHTML = formData.email;
    passwordTd.innerHTML = formData.password;
    countryTd.innerHTML = formData.country;
    addressTd.innerHTML = formData.address;

    tr.append(
        nameTd,
        emailTd,
        addressTd,
        passwordTd,
        genderTd,
        countryTd,
        checkTd,
    );

    myid.appendChild(tr); 

}
//  reset
function resetSave() {
    nameid.value = "";
    em_id.value = "";
    add_id.value = "";
    passid.value = "";
    myCountry.value = "";
}



// Reset
function resetOn() {
    document.getElementById('myform').reset();
}
