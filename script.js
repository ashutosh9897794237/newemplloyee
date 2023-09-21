const form = document.getElementById("form");

const tbody = document.getElementById("tbody");

const employees  = [];

  function addEmpolyee(employee){

    for(let i=0; i<employees.length; i++){
      let e = employees [i];
     if(e.email === employee.email) {
      alert("email already exist");
      return ;
     }  else if(e.empId === employee.empId) {
      alert("Employee Id already exist");
      return ;
     }
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${employee.name}</td> 
    <td>${employee.email}</td>
    <td>${employee.empId}</td>
    <td>${employee.company}</td>
    <td>${employee.designation}</td>
    <td> 
    //<button onclick="deleteEmployee(this)" data-empId="${employee.empId}"> Delete </button>  </td>
    `;
    tbody.appendChild(tr);
    employees.push(employee);
}



form.addEventListener("submit", (event) => { 
  event.preventDefault();
  let empolyee = {
    name: event.target.name.value,
    email: event.target.email.value,
    empId: event.target.empId.value,
    company: event.target.company.value,
    designation: event.target.designation.value,
  };
  
 addEmpolyee(empolyee);
});