/*for the input text part in action.html*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if(scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name1 = document.getElementById("name1").value;
  var reasons = document.getElementById("reasons").value;
  var name2 = document.getElementById("name2").value;

  displayScript.innerHTML = "Dear " + name1 + ", I'm writing to you to inform you of the global crisis we are in. The Earth continues to heat up because of human activity. A few reasons I care are: " + reasons + ". Please consider taking action to help aid our planet. Some ways you can help is through your support of the Green New Deal - a proposition aimed to replace fossil fuel energy with renewable ones - or through acknowledging and publicly addressing climate change to spread awareness. Thank you for your time. Regards, " + name2;
}

/*Generating facts part in about.html*/

var factList = [
"The ocean's surface temperatures have increased by 0.6 deg. F in 53 years. If the ocean becomes too hot, sensitive animals that can't survive in hotter climates will die out. 337 zettajoules of heat have been added since 1955.",/*0*/ "Greenland lost 279 billion tons of ice per YEAR in a range of 26 years and Antartica lost 148 billion tons of ice per year. The loss of ice not only causes sea levels to rise, but also contributes to climate change as they become part of the ocean and their dark color absorbs more heat.",/*1*/ "The rate of rising sea levels is accelerating every year, with the last two decades' rates being double the rate of the last century's. The global sea level rose 8 inches in the last century and 4 inches since January of 1993.",/*2*/ "The acidity of the surface of the ocean has risen by 30% due to absorbing more anthropogenic (man-made) carbon dioxide emissions. In recent decades, 7.2 to 10.8 billion tons have been absorbed per year.",/*3*/ "The global temperature has risen by 1.01 deg. C since 1880.",/*4*/ "The arctic sea extent (or how big the land mass is) has decreased by 13 percent PER DECADE since 1979.",/*5*/ "It's predicted that the global sea level will rise by 1 foot to 8 feet by 2100.",/*6*/ "Droughts, hurricanes and heatwaves are predicted to become more intense while cold waves will be less intense and less frequent.",/*7*/ "By 2050, Western states' land that's been consumed by wildfires is predicted to increase by 2 to 6 times, and wildfires are projected ot increase by 30% in rainy regions." ];/*8*/

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if(factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
