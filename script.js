const btn = document.getElementById("toogler");
const btn_icon =  document.getElementById("toogler-icon");
const contain = document.getElementById("contain");
const wind = document.getElementById("wind")
btn.onclick = function() {
	if(contain.getAttribute("data-theme")!="dark"){
		contain.setAttribute("data-theme","dark");
		btn_icon.setAttribute("class","fas fa-solid fa-sun");
		wind.setAttribute("style","color: orange;")
      }
	else{
		contain.setAttribute("data-theme","");
		wind.setAttribute("style","color: #0f345fe3;")
		btn_icon.setAttribute("class","fas fa-solid fa-moon");
      }
}