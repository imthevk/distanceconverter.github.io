const unitConvert = document.getElementById("meter");
const cmeterConvert = document.getElementById("centimeter");
const mmeterConvert = document.getElementById("millimeter");
unitConvert.addEventListener("input", meterToCentimeter);
cmeterConvert.addEventListener("input", cmeterTommeter);
mmeterConvert.addEventListener("input", mmeterToCentimeter);
function meterToCentimeter() {
  kmeter = unitConvert.value;
  let cmeter = kmeter * 100;
  let mmeter = kmeter * 1000;
  cmeterConvert.value = cmeter;
  mmeterConvert.value = mmeter;
  //   console.log(cmeter);
  //   console.log(cmeterConvert.value);
}
function cmeterTommeter() {
  cmeter = cmeterConvert.value;
  let kmeter = cmeter / 100;
  let mmeter = cmeter * 10;
  unitConvert.value = kmeter;
  mmeterConvert.value = mmeter;
}
function mmeterToCentimeter() {
  mmeter = mmeterConvert.value;
  let kmeter = mmeter / 1000;
  let cmeter = mmeter / 10;
  unitConvert.value = kmeter;
  cmeterConvert.value = cmeter;
}
