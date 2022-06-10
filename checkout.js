function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("! All fields are required");
      return false;
    }
  }