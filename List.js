// list your home js


// Toggle Agents / Landlord
const agentBtn = document.getElementById("agentBtn");
const landlordBtn = document.getElementById("landlordBtn");

agentBtn.addEventListener("click", () => {
  agentBtn.classList.add("act");
  landlordBtn.classList.remove("act");
});

landlordBtn.addEventListener("click", () => {
  landlordBtn.classList.add("act");
  agentBtn.classList.remove("act");
});

// Form Submission
document.getElementById("propertyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Property submitted successfully!");
});
