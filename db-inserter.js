import { AppDB } from "./db-init.js";

const myHandler = function(event) {
    const date = document.getElementById("when").value;
    const cat= document.querySelector("#cati").value;
    const amountField = document.getElementById("amt");
    const amt =  parseFloat(amountField.value); // convert string to number
    const descrpField = document.getElementById("what");
    const descri = descrpField.value;

    AppDB.ref("budget")
        .push()
        .set({date: date, description: descri, category: cat, amount: amt})

}

const theButton = document.querySelector("#add");
theButton.addEventListener("click", myHandler);