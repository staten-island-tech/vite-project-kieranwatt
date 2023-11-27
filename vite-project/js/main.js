import "../styles/style.css";
import { domselectors } from "./selectors";
import { sillybladees } from "./array";

/* const store = function(sillybladees) {
    domselectors.cards.insertAdjacentHTML("beforeend", 
    '<div class="card" id="card" ')
} */
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
