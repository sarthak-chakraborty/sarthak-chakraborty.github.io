function showEmail() {
  document.getElementById("email-link").innerHTML =
    "danfu [at] stanford [dot] edu"    
}

function toggleVis(id) {
  var e = document.getElementById(id)
  if (e.style.display == "none") {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
}
