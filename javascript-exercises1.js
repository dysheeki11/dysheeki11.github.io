
/*--------------------------TIP CALCULATOR-------------------------------- */
function calculateTotal(){
    const num1 = Number(document.getElementById("billAmount").value);
    const num2 = Number(document.getElementById("tipPercent").value)/100;

    const num1num2 = num1 * num2 
    const equationtip = num1num2 + num1


    console.log(num1, num2, num1num2, equationtip)
    document.getElementById("totalBillAmount").innerText = `$${equationtip.toFixed(2)}`
}
tipCalcBtn.addEventListener("click", function(){ 
    document.getElementById("tipCalculator").style.display= "flex";
    document.getElementById("projectsDiv").style.display = "none";
});
closeBtn.addEventListener("click", function(){
    document.getElementById("tipCalculator").style.display= "none";
    document.getElementById("projectsDiv").style.display = "flex";
});


/*----------------------TEMPERATURE CONVERTER----------------------------- */
function celtoFah () {
    let temp1 = Number(document.getElementById("temp1").value.trim());
    let equationtemp = (9/5) * temp1 + 32;
    if (isNaN(equationtemp)) {equationtemp = ''}
    document.getElementById("temp2").value = equationtemp;
    console.log(temp1,equationtemp)
}

function celtoKel () {
    temp1 = Number(document.getElementById("temp1").value.trim());
    let equationtemp = temp1 + 273.15;
    if (isNaN(equationtemp)) {equationtemp = ''}
    document.getElementById("temp3").value = equationtemp;
}


function fahtoCel () {
    temp2 = Number(document.getElementById("temp2").value.trim());
    let equationtemp = (temp2 - 32) * 5/9;
    if (isNaN(equationtemp)) {equationtemp = ''}
    document.getElementById("temp1").value = equationtemp;
}
function fahtoKel () {
    temp2 = Number(document.getElementById("temp2").value.trim());
    let equationtemp = (temp2 - 32) * 5/9 + 273.15;
    if (isNaN(equationtemp)) {equationtemp = ''}
    document.getElementById("temp3").value = equationtemp;
}

function keltoCel () {
    let temp3 = Number(document.getElementById("temp3").value.trim());
    let equationtemp = temp3 - 273.15;
    if (isNaN(equationtemp)) {equationtemp = ''}
    document.getElementById("temp1").value = equationtemp;
}
function keltoFah () {
    let temp3 = Number(document.getElementById("temp3").value.trim());
    let equationtemp = (temp3 - 273.15) * 9/5 + 32;
    if (isNaN(equationtemp)) {equationtemp = ''}
    document.getElementById("temp2").value = equationtemp;
}

temp1.addEventListener("input", function() {celtoFah(), celtoKel();
});

temp2.addEventListener("input", function () {fahtoCel(), fahtoKel();
});

temp3.addEventListener("input", function () {keltoCel(), keltoFah();
});

tempConBtn.addEventListener("click", function(){
    document.getElementById("tempConverter").style.display = "flex";
    document.getElementById("projectsDiv").style.display = "none";
});
closeTempBtn.addEventListener("click", function(){
    document.getElementById("tempConverter").style.display = "none";
    document.getElementById("projectsDiv").style.display = "flex";
});



/*----------------------SLIDER------------------------------------- */

let sliderInterval;
function startSlide()
    {let idx = 0;
    const sliders = [
        document.getElementById("sliderContent1"),
        document.getElementById("sliderContent2"),
        document.getElementById("sliderContent3"),
    ];

    function slideTestimonial(){
        sliders.forEach(testimonialContainer => testimonialContainer.classList.remove("active"));
        sliders[idx].classList.add("active");

            idx++;
            if (idx === sliders.length) { idx = 0};

        console.log(sliders[idx]);
}

slideTestimonial();
clearInterval(sliderInterval);
sliderInterval =  setInterval(slideTestimonial, 5000); 
};

sliderBtn.addEventListener("click",function(){
    document.getElementById("testimonialSlider").style.display = "flex";
    document.getElementById("projectsDiv").style.display = "none";
    startSlide();
});
closeSlideBtn.addEventListener("click",function(){
    document.getElementById("testimonialSlider").style.display = "none";
    document.getElementById("projectsDiv").style.display = "flex";
});


/*-----------------------AGE CALCULATOR-------------------------- */





calcAgeBtn.addEventListener("click", function(){
    const userDateInput = document.getElementById("inputDate").value
    const [useryear, usermonth, userday] = userDateInput.split("-").map(Number);

    const today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();

    let yourYear = currentYear - useryear;
    let yourMonth = currentMonth - usermonth;
    let yourDay = currentDay - userday;
    let daysInPrevMonth = new Date(currentYear, currentMonth - 1,0).getDate();

    if (yourDay < 0 ) {yourDay += daysInPrevMonth; yourMonth --;}; 
    if (yourMonth < 0 ) { yourMonth += 12; yourYear--;}


    console.log(yourYear, yourMonth, yourDay)
    document.getElementById("yourAge").innerText = 
    `You are ${yourYear} years, ${yourMonth} months and ${yourDay} days old!!!`
});
yourAgeHere.addEventListener("click", function(){
    document.getElementById("ageCalculator").style.display = "flex";
    document.getElementById("projectsDiv").style.display = "none";
});

/*------------------------------Buttons-----------------------------------*/ 







/*------------------------------------------------------- */