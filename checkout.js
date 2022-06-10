function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("! You have unfilled blocks");
      return false;
    }
  }