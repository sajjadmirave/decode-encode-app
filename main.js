// convert to encode
let convertToEnCode = () => {
  // **
  let enValue = document.getElementById("getText").value;
  let enCodeString = window.btoa(enValue);
  // document.getElementById("show-encode").innerHTML = enCodeString;
  navigator.clipboard.writeText(enCodeString);
};

// convert to decode
let convertToDeCode = () => {
  let deValue = document.getElementById("getText").value;
  let deCodeString = window.atob(deValue);
  // document.getElementById("show-decode").innerHTML = deCodeString;
  navigator.clipboard.writeText(deCodeString);
};
