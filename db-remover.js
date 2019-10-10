// In db-remover.js
import { AppDB } from "./db-init.js";

let userSelections = [];

// Checkbox change listener
export default function(changeEvent) {
    // The ID of the checkbox is also the key of the record in Firebase
    const whichKey = changeEvent.target.id;
    if (changeEvent.target.checked) {
      userSelections.push(whichKey);
    } else {
      userSelections = userSelections.filter((s) => s != whichKey);
    }
}

const theDelButton = document.querySelector("#remove");

theDelButton.addEventListener('click', (event) => {
    console.log(userSelections);
  userSelections.forEach((victimKey) => {
    AppDB.ref('budget').child(victimKey).remove();
  })
});