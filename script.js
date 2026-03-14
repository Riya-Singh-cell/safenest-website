let mediaRecorder;
let recordedChunks = [];
let timer;
let seconds = 10;

let currentLat = null;
let currentLon = null;

/* Activate Safety Mode */

function activateSafety(){

seconds = 10; // reset timer

startRecording();
getLocation();
startTimer();

}

/* Start hidden video recording */

async function startRecording(){

try{

const stream = await navigator.mediaDevices.getUserMedia({
video:true,
audio:true
});

mediaRecorder = new MediaRecorder(stream);

mediaRecorder.ondataavailable = function(event){
if(event.data.size > 0){
recordedChunks.push(event.data);
}
};

mediaRecorder.start();

console.log("Recording started");

}catch(error){

console.error(error);
alert("Camera permission denied");

}

}

/* Stop recording and save video */
function uploadVideo(blob){

const reader = new FileReader();

reader.readAsDataURL(blob);

reader.onloadend = function(){

const base64data = reader.result.split(',')[1];

fetch("https://script.google.com/macros/s/AKfycbwVjmpptRRMwn0R8lVvPuglLQkaUVBIJFiH2NyhopgI9J32Aa2yjPgBWmFkkAtPmw0/exec",{

method:"POST",

headers:{
"Content-Type":"application/x-www-form-urlencoded"
},

body:"file="+base64data

})
.then(res=>res.json())
.then(data=>{

console.log("Video saved to Drive:",data.url);

})
.catch(err=>console.error(err));

};

}
function stopRecording(){

if(!mediaRecorder) return;

mediaRecorder.stop();

mediaRecorder.onstop = function(){

const blob = new Blob(recordedChunks,{type:"video/webm"});

uploadVideo(blob);   // upload to Google Drive
recordedChunks = [];
};

}

/* Get GPS location */

function getLocation(){

const locationText = document.getElementById("location");

locationText.innerHTML = "Detecting location...";

navigator.geolocation.getCurrentPosition(

function(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

currentLat = lat;
currentLon = lon;

/* Reverse geocoding */

fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)

.then(response => response.json())

.then(data => {

let address = data.address;

let city = address.city || address.town || address.village || "Unknown";
let area = address.suburb || address.neighbourhood || "Unknown";
let state = address.state || "Unknown";

locationText.innerHTML =
"City: " + city +
"<br>Area: " + area +
"<br>State: " + state +
"<br><br><b>Latitude:</b> " + lat +
"<br><b>Longitude:</b> " + lon +
"<br><br><a target='_blank' href='https://maps.google.com/?q=" +
lat + "," + lon +
"'>Open in Google Maps</a>";

});

},

function(error){

locationText.innerHTML = "Location permission denied";

}

);

}

/* SOS Timer */

function startTimer(){

clearInterval(timer);

timer = setInterval(function(){

seconds--;

document.getElementById("timer").innerHTML =
"SOS activates in " + seconds + " seconds";

if(seconds <= 0){

clearInterval(timer);

stopRecording();   // save evidence video
sendSOS();         // send alert

}

},1000);

}

/* Cancel SOS */

function cancelSOS(){

clearInterval(timer);

document.getElementById("timer").innerHTML =
"SOS Cancelled";

stopRecording();

}

/* Send SOS */

function sendSOS(){

let phoneNumber = "917796220083";

let locationLink = "Location unavailable";

if(currentLat && currentLon){
locationLink = "https://maps.google.com/?q=" + currentLat + "," + currentLon;
}

let message =
"🚨 SOS ALERT! I need help.\n\n" +
"My Location:\n" + locationLink;

/* SMS */

let smsURL =
"sms:" + phoneNumber +
"?body=" + encodeURIComponent(message);

/* WhatsApp */

let whatsappURL =
"https://wa.me/" + phoneNumber +
"?text=" + encodeURIComponent(message);

/* open SMS */

window.location.href = smsURL;

/* open WhatsApp */

setTimeout(function(){
window.open(whatsappURL);
},2000);

/* police call */

setTimeout(function(){
window.location.href = "tel:100";
},4000);

}