let currentAge = document.getElementById("age").value; 
let currentWorkshop = document.getElementById("workshop").value;

// Provjerava je li odabrana dob
function ageSelect() {
    currentAge = document.getElementById("age").value;
    approval(currentAge, currentWorkshop);
}

// Provjerava je li odabrana radionica
function workshopSelect() {
    currentWorkshop = document.getElementById("workshop").value;
    approval(currentAge, currentWorkshop);
}

// Provjerava vrijede li uvjeti za radionicu kreativnog pisanja
function approval() {
    if ((currentAge=="jaslice" || currentAge=="vrtić" || currentAge=="1sk") && (currentWorkshop=="pisanje")) {
        alert("Djeca koja ne pohađaju drugi ili viši razred ne mogu pohađati radionicu kreativnog pisanja.");
        document.getElementById("workshop").selectedIndex = "-1";
    }
}

// Provjerava moze li prihvatiti prijavu
function applyClick() {
    if (currentAge==" " || currentWorkshop==" " || document.getElementById("name").value=="" || document.getElementById("surname").value=="" || document.getElementById("nameCh").value=="" || document.getElementById("surnameCh").value=="" || document.getElementById("e-mailApply").value==""){
        alert("Molimo Vas da ispunite sva polja.");   
    }
    else {
        window.location.href="afterApplication.html";
    }
}