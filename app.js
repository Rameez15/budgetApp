const totalBudget = document.getElementById("enter-value3");
const expenses = document.getElementById("enter-value1");
const catogory = document.getElementById("enter-value");
const date = document.getElementById("enter-value2");
let remBudget = document.getElementById("d2");
const dltBtn = document.getElementById("icn");
let budget = document.getElementById("d1");
let cel1 = document.getElementById("cel1");
let cel2 = document.getElementById("cel2");
let cel3 = document.getElementById("cel3");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const p3 = document.getElementById("p3");
let table = document.getElementById("p5");
let shBtn = document.getElementById("hidebtn");
let swp = document.getElementById("swp");
let conLarge = 0;
let list = [];

let generator = () => Math.floor(Math.random() * 10000);

const totalCal = (kmt) => {
  kmt.preventDefault();
  let tBudget = document.getElementById("enter-value3").value;

  if (tBudget === "") {
    alert("enter correct value");
  } else {
    conLarge = tBudget;
    budget.innerHTML = `${tBudget}`;
    totalBudget.value = "";
  }
};
b1.addEventListener("click", totalCal);

let listFunc = (till) => {
  till.preventDefault();
  if (
    expenses.value.trim() === "" &&
    catogory.value.trim() === "" &&
    date.value === ""
  ) {
    alert("enter value");
  } else {
    if (budget.value === 0) {
      alert("set your budget first");
    } else {
      const idgnrt = {
        id: generator(),
        type: catogory.value,
        price: +expenses.value,
        date: date.value,
      };
      list.push(idgnrt);
      let apendingTable = () => {
        let row = table.insertRow(-1);
        let cel1 = row.insertCell(0);
        let cel2 = row.insertCell(1);
        let cel3 = row.insertCell(2);
        cel1.innerHTML = idgnrt.type;
        cel2.innerHTML = idgnrt.price;
        cel3.innerHTML = idgnrt.date;
        p3.style.visibility = "visible";
      };
      shBtn.addEventListener("click", apendingTable);

      catogory.value = "";
      expenses.value = "";
      date.value = "";
    }
  }
};
b2.addEventListener("click", listFunc);

const calculateCost = () => {
  let sumList = list.map((item) => item.price);
  let numOfArr = list.length;
  if (numOfArr === 1) {
    return sumList;
  } else {
    let filter = sumList.reduce((val, ind) => {
      return val + ind;
    }, 0);
    return filter;
  }
};

const remaining = () => {
  remBudget.innerHTML = conLarge - calculateCost();
};
b2.addEventListener("click", remaining);

let delList = () => {
  p3.style.visibility = "hidden";
  conLarge = "";
  list = "";
  table.innerHTML = "";
  p3.innerHTML = "";
  budget.innerText = 0;
  remBudget.innerText = 0;
};

dltBtn.addEventListener("click", delList);
