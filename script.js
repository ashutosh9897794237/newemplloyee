const form = document.getElementById("form");

form.addEventListener("submit", (Event) => { 
  Event.preventDefault();
  let empolyee = {
    name: Event.target.name.value,
    email: Event.target.email.value,
    empId: Event.target.empId.value,
    company: Event.target.company.value,
    designation: Event.target.designation.value,
  }
  console.log(empolyee);
});