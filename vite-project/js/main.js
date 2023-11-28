import "../styles/style.css";
import { domselectors } from "./selectors";
import { sillybladees } from "./array";

const store = function(sillybladees) {
    domselectors.cards.insertAdjacentHTML("beforeend",
    ` <div class="card" id="card">
      <img src="${sillybladees.img}" alt="img for ${sillybladees.title}." class="card-img">
      <h4 class="card-title">${sillybladees.title}</h4>
      <h4 class="card-type">${sillybladees.type}</h4>
      <h5 class="card-desc">${sillybladees.imgdesc}</h5>
      <h5 class="card-dabloons">${sillybladees.dabloons}</h5>
      <h6 class="card-kieranrating">$${sillybladees.kieranrating}</h6>
      </div>
      `)
};
console.log(sillybladees);
sillybladees.forEach((card)=>store(card));

const array = function () {
  sillybladees.map((cards) => ({
    title: cards.title,
    type: cards.type,
    imgdesc: cards.imgdesc,
    dabloons: cards.dabloons,
    kieranrating: cards.kieranrating,
  }))
}

document.querySelector(".themebtn").addEventListener("click", function () {
  if(document.body.classList.contains("darkmode")) {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
  } else {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
  }
})




/* let buttons = document.querySelectorAll(".typebtn")
buttons.forEach((btn)=> btn.addEventListener("click",
function() {
  let filter = btn.textContent
  let
})) */

 document.querySelector(".typebtn").addEventListener("click", function () {
  if(document.body.classList.contains("ITEMS")) {
    document.body.classList.add("STRUCTURES");
    document.body.classList.remove("ITEMS");
  } else {
    document.body.classList.add("ITEMS");
    document.body.classList.remove("STRUCTURES");
  }
}) 