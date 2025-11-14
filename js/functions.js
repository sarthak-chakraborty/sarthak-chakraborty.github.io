function showEmail() {
  document.getElementById("email-link").innerHTML =
    "sc134 [at] illinois [dot] edu"    
}

// function toggleVis(id) {
//   var e = document.getElementById(id)
//   if (e.style.display == "none") {
//     e.style.display = "block";
//   } else {
//     e.style.display = "none";
//   }
// }


function toggleVis(news_id, link_id) {
  var e = document.getElementById(news_id)
  var link = document.getElementById(link_id)
  if (e.style.display == "none") {
    e.style.display = "block";
    link.innerHTML = "show less";
  } else {
    e.style.display = "none";
    link.innerHTML = "show more";
  }
}