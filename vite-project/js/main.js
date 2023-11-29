import "../styles/style.css";
import { domselectors } from "./selectors";
import { sillybladees } from "./array";

//makes cards
const store = function(sillybladees) {
    domselectors.cards.insertAdjacentHTML("beforeend",
    ` <div class="card" id="allcards">
      <img src="${sillybladees.img}" alt="img for ${sillybladees.title}." class="card-img">
      <h4 class="card-title">${sillybladees.title}</h4>
      <h4 class="card-type">${sillybladees.type}</h4>
      <h5 class="card-desc">${sillybladees.imgdesc}</h5>
      <h5 class="card-dabloons">${sillybladees.dabloons}</h5>
      <h6 class="card-kieranrating">$${sillybladees.kieranrating}</h6>
      </div>
      `)
};
//I think i need to add these to get the more then 2 buttons
/* const array = function () {
  sillybladees.map((cards) => ({
    title: cards.title,
    type: cards.type,
    imgdesc: cards.imgdesc,
    dabloons: cards.dabloons,
    kieranrating: cards.kieranrating,
  }))
}; */

//clear function
function clearee() {
  domselectors.cards.innerHTML = "";
}

sillybladees.forEach((card) => {
  store(card);
});
//when the button is pressed, it keeps cards with item value, and removes the rest 
domselectors.item.addEventListener("click", function () {
  const itemees = sillybladees.filter((itemtrue) => itemtrue.type === "item");
  clearee();
  itemees.forEach((itemtrue) => {
    store(itemtrue);
  });
});

domselectors.structure.addEventListener("click", function () {
  const structurees = sillybladees.filter((structuretrue) => structuretrue.type === "structure");
  clearee();
  structurees.forEach((structuretrue) => {
    store(structuretrue);
  });
});
//buttons that arent working asking in class
/* domselectors.goodrate.addEventListener("click", function () {
  const agoodratee = sillybladees.filter((goodratetrue) => goodratetrue.kieranrating === "goodrate");
  clearee();
  agoodratee.forEach((goodratetrue) => {
    store(goodratetrue);
  });
}); */

/* domselectors.badrate.addEventListener("click", function () {
  const badratee = sillybladees.filter((badratetrue) => badratetrue.kieranrating === "bad");
  clearee();
  badratee.forEach((badratetrue) => {
    store(badratetrue);
  });
});
 */
/* domselectors.expensive.addEventListener("click", function () {
  const expensivee = sillybladees.filter((tooexpensivetrue) => tooexpensivetrue.dabloons === "expensive");
  clearee();
  expensivee.forEach((tooexpensivetrue) => {
    store(tooexpensivetrue);
  });
}); */


//darklightmode
document.querySelector("#looks").addEventListener("click", function () {
  if (document.body.classList.contains("darkmode")) {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
  } else {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
  }
});

