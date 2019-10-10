import { AppDB } from "./db-init.js";
import "./db-remover.js";
import selectionHandler from "./db-remover.js";

const whichOneIsGone = function(snapshot) {
  const whichKey = snapshot.key;
  // This would be the key of the deleted record in Firebase
  let table = document.querySelector("#TableBody");
  let row = document.querySelector("#ROW-" + whichKey);
  table.removeChild(row);
};

AppDB.ref('budget').on("child_removed", whichOneIsGone);


const showIndividualRecord = function(snapshot) {
    const expenseRecord = snapshot.val();
    //alert(`RECORD Key:${snapshot.key} ${expenseRecord.description}`);
    let table = document.querySelector("#TableBody");
        let row = document.createElement("tr");
        let date = document.createElement("td");
        let des = document.createElement("td");
        let cat = document.createElement("td");
        let amt = document.createElement("td");
        let checkbox = document.createElement("td");
        let inputbox = document.createElement("input");
        row.setAttribute('id', "ROW-" + snapshot.key);
        inputbox.setAttribute('id', snapshot.key);
        inputbox.setAttribute('type', 'checkbox');
        table.append(row);
        row.append(date);
        row.append(des);
        row.append(cat);
        row.append(amt);
        row.append(checkbox); 
        date.append(document.createTextNode(expenseRecord.date)); 
        cat.append(document.createTextNode(expenseRecord.category)); 
        amt.append(document.createTextNode(expenseRecord.amount));
        des.append(document.createTextNode(expenseRecord.description));
        checkbox.append(inputbox);
        inputbox.addEventListener('change', selectionHandler);
        //keyr.append(document.createTextNode(snapshot.key));
  };
  
  const showSummary = function(snapshot) {
    const data = snapshot.val();
    //alert(`SUMMARY: key is ${snapshot.key}`);
    try{
      let table = document.querySelector("#TableBody");
      let tot = document.querySelectorAll(".total");
      table.removeChild(tot[0]);
    }
    catch{}
    let total = 0;
    for (let key in data) {
        const expenseItem = data[key];
        //console.log("Item is", expenseItem);
        total += expenseItem.amount;
    }
    let TOTAL = total.toFixed(2);
    let table = document.querySelector("#TableBody");
    let row = document.createElement("tr");
    let blank = document.createElement("td");
    let blank2 = document.createElement("td");
    let blank3 = document.createElement("td");
    let tot = document.createElement("td");
    let tots = document.createElement("td");
    row.classList.add("total");
    tot.classList.add("RightAlign");
    
    table.append(row);
    row.append(blank);
    row.append(blank2);
    row.append(tot);
    row.append(tots);
    row.append(blank3);
    tot.append(document.createTextNode("Total:"));
    tots.append(document.createTextNode(TOTAL));
    };
  
  // Attach two different listeners to the "budget" node
  // value listener and child_added listener
  AppDB.ref("budget").on("value", showSummary);
  AppDB.ref("budget").on("child_added", showIndividualRecord);