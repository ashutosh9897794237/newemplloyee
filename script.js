const form = document.getElementById("form");

const tbody = document.getElementById("tbody");

  function addEmpolyee(employee){
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${employee.name}</td> 
    <td>${employee.email}</td>
    <td>${employee.empId}</td>
    <td>${employee.company}</td>
    <td>${employee.designation}</td>
    `;
    tbody.appendChild(tr);
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