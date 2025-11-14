function showEmail() {
  document.getElementById("email-link").innerHTML =
    "sc134 [at] illinois [dot] edu"    
}

function toggleVis(id) {
  var e = document.getElementById(id)
  if (e.style.display == "none") {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
}
