// Dark mode 
function myFunction() {
  const checkBox = document.getElementById("toggle-36");
  checkBox.checked
    ? dark() : light();
};
function light() {
  const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
addCSS(".bg-main-500{background-color: #148F77 !important;}"),
addCSS(".bg-gray-500{background-color: #424242 !important;}")
};
function dark() {
  const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
addCSS(".bg-main-500{background-color: #424242 !important;}"),
addCSS(".bg-gray-500{background-color: #148F77 !important;}")
};

