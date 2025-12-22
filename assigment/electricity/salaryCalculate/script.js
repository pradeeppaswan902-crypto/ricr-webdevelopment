function CalculateSalary() {
  const salary = Number(document.getElementById("Salary").value);
 

  if (salary <= 0 || isNaN(salary)) {
    alert("Please enter valid salary");
    return;
  }

  const hra = salary * 20 / 100;
  const da = salary * 10 / 100;
  const GrossSalary = salary + hra + da;

  document.getElementById("Basic").innerText = `${salary.toFixed(0)}`
  document.getElementById("Hra").innerText =`${hra.toFixed(0)}`
  document.getElementById("Da").innerText = `${da.toFixed(0)}`
  document.getElementById("Gross").innerText =  `${GrossSalary.toFixed(0)}`
  document.getElementById("salaryTable").style.display =  "block"

}

function Reset() {
 
  document.getElementById("Salary").value = "";
  document.getElementById("Basic").value = "";
  document.getElementById("Hra").value = "";
  document.getElementById("Da").value ="";
  document.getElementById("Gross").value = "";
  document.getElementById("salaryTable").style.display = "none"

}


/*

let storeData = [];
let editIndex = null;

function saveData() {
  const input = document.getElementById("inputbox");
  const value = input.value.trim();
  if (value === "") return;

  if (editIndex === null) {
    // SAVE
    storeData.push(value);
  } else {
    // EDIT
    storeData[editIndex] = value;
    editIndex = null;
  }

  input.value = "";
  showData();
}

function showData() {
  const list = document.getElementById("datacollection");
  list.innerHTML = "";

  storeData.forEach((item, index) => {
    list.innerHTML += `
      <li>
        ${item}
        <button onclick="editData(${index})">Edit</button>
        <button onclick="deleteData(${index})">Delete</button>
      </li>
    `;
  });
}

function editData(index) {
  const input = document.getElementById("inputbox");
  input.value = storeData[index];
  editIndex = index;
}

function deleteData(index) {
  storeData.splice(index, 1);
  showData();
}
*/