// Get the modal
var modal = document.getElementById('popup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function scheduleAppt()
{
  localStorage.setItem("apptLocation",document.getElementById("location").value);
  localStorage.setItem("apptDate",document.getElementById("date").value);
  localStorage.setItem("apptTime",document.getElementById("time").value);

  apptInfo();
}

function apptInfo() {
  document.getElementById("demo").innerHTML = localStorage.getItem("apptLocation");
  document.getElementById("apptDate").innerHTML = localStorage.getItem("apptDate");
  document.getElementById("apptTime").innerHTML = localStorage.getItem("apptTime");
}

var upcomingAppts = [];
localStorage.setItem("apptNum", 2);

//error when choosing date/time before location
function chooseLocation() {
  var location = document.forms["schedule2"]["location"].value;
  if (location == "") {
    alert("Error: You must first select a location for your appointment.");
    return false;
  }
}

//function to display vaccine brand when booking an appointment
function addVaccineBrand() {
  if (document.getElementById('pfizer').checked) {
    vaccine_brand = document.getElementById('pfizer').value;
  }
  else if (document.getElementById('moderna').checked) {
    vaccine_brand = document.getElementById('moderna').value;
  }
  else {
    vaccine_brand = document.getElementById('johnson').value;
  }
  console.log(vaccine_brand)
  document.getElementById('vaccinebrandresults').innerHTML = vaccine_brand;
}
