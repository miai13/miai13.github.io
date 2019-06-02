let slider = {
    firstPic: "https://media.defense.gov/2011/Aug/04/2000231895/780/780/0/110804-F-MA715-023.JPG",
    secondPic: "https://cdn.pixabay.com/photo/2018/10/29/23/58/children-reading-3782456_960_720.jpg",
    thirdPic: "https://c.pxhere.com/photos/27/31/kids_girl_pencil_drawing_notebook_study_vdvoem_friends-837883.jpg!d",
    firstText: "Vaše dijete je oduvijek imalo dara za izvedbu raznih recitacija, pjesama, igrokaza, za ples ili pjevanje? Ako ste opotvrdno odgovorili na ovo pitanje vrijeme je da ga/ju prijavite na našu radionicu glume gdje će uz vodstvo stručnjaka dotjerati svoje talente.",
    secondText: "Ako vaše dijete voli čitati i želite da usavrši tu tehniku prijavite ga/ju na našu radionicu izražajnog čitanja gdje će uz vodstvo stručnjaka dotjerati svoj talent.",
    thirdText: "Radionica kreativnog pisanja za djecu namjenjena je onima koji uživaju u pričanju priča, koji svojim šaljivim prepričavanjima uveseljavaju, iznenađuju i zabavljaju svoju okolinu. Ako je i vaše dijete takvo prijavite ga na radionicu na kojoj će raditi na različitim stilovima pisanja primjerenim njegovoj dobi. Na ovu radionicu mogu se prijaviti djeca koja pohađaju drugi, treći i četvrti razred osnovne škole."
}

let currentPic = document.getElementById("hjPic");
let currentText = document.getElementById("hjTextDiv");
let currentLink = document.getElementsByClassName("slideLink");

// Tunkcija za lijevi botun za slajd
function functionLeft() {
    
    if (currentPic.src == slider.firstPic) {
        currentPic.src = slider.thirdPic;
        currentText.innerHTML = slider.thirdText;
        for (let i=0; i<currentLink.length; i++) {
            currentLink[i].href = "croatianWriting.html"; 
        }
                      
    }
    else if (currentPic.src == slider.secondPic) {
        currentPic.src = slider.firstPic;
        currentText.innerHTML = slider.firstText; 
        for (let i=0; i<currentLink.length; i++) {
            currentLink[i].href = "croatianActing.html"; 
        }               
    }
    else {
        currentPic.src = slider.secondPic;
        currentText.innerHTML = slider.secondText;
        for (let i=0; i<currentLink.length; i++) {
            currentLink[i].href = "croatianReading.html"; 
        }                
    }
}

// Funkcija za desni botun za slajd
function functionRight() {
    if (currentPic.src == slider.firstPic) {
        currentPic.src = slider.secondPic;
        currentText.innerHTML = slider.secondText;
        for (let i=0; i<currentLink.length; i++) {
            currentLink[i].href = "croatianReading.html"; 
        }
    }
    else if (currentPic.src == slider.secondPic) {
        currentPic.src = slider.thirdPic;
        currentText.innerHTML = slider.thirdText;
        for (let i=0; i<currentLink.length; i++) {
            currentLink[i].href = "croatianWriting.html"; 
        }
    }
    else {
        currentPic.src = slider.firstPic;
        currentText.innerHTML = slider.firstText;
        for (let i=0; i<currentLink.length; i++) {
            currentLink[i].href = "croatianActing.html"; 
        }
    }
}

// Sticky efekt za navBar
window.onscroll = () => stickyFunc()
let navBar = document.getElementById("navBar");
let sticky = navBar.offsetTop;

function stickyFunc() {
    if (window.pageYOffset >= sticky){
        navBar.classList.add("sticky");
    }
    else {
        navBar.classList.remove("sticky");
    }
}

function applyFunc() {
    let inputName = document.getElementById("apply");
    let inputMail = document.getElementById("e-mail");  
    if ((inputName.value!="") && (inputMail.value!="")) {
      alert(`Gospodine/gospođo ${inputName.value} uspješno ste prijavljeni na naš newsletter. U e-mailu kojeg  smo Vam upravo poslali nalazi se kod za popust.`);
    }
    else {
      alert("Molimo Vas da ispunite sva polja za prijavu.")
    }
}