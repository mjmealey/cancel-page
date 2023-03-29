const cancelReason = document.getElementById("cancelReason");
const optionalMessage = document.getElementById("optionalMessage");
const cancelMembership = document.getElementById("cancelMembership");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  if (e.target.id === "submit") {
    let user = prompt("Would you like to submit the form? y for yes n for no");
    if (user === "y") {
      window.location.href = "https://mjmealey.github.io/farewell/";
    } else {
      user === null;
    }
  }
});

