// Dark mode
document.addEventListener("DOMContentLoaded", (_event) => {
  const htmlElement = document.documentElement;
  const switchElement = document.getElementById("toggle-36");
  const currentTheme = localStorage.getItem("bsTheme") || "dark";

  htmlElement.setAttribute("data-bs-theme", currentTheme);
  switchElement.checked = currentTheme === "dark";
  switchElement.addEventListener("change", function () {
    if (this.checked) {
      htmlElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("bsTheme", "dark");
    } else {
      htmlElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("bsTheme", "light");
    }
  });
});
function myFunction() {
  const modhtml = localStorage.getItem("bsTheme");
  console.log(modhtml);

  modhtml == "dark" ? light() : dark();
}
function light() {
  const addCSS = (css) =>
    (document.head.appendChild(document.createElement("style")).innerHTML =
      css);
  addCSS(
    ".bg-main-500{background-color: #148F77 !important;transition: all 0.1s ease-in-out !important ;}",
  ),
    addCSS(
      ".bg-gray-500{background-color: #424242 !important;transition: all 0.1s ease-in-out !important ;}",
    ),
    addCSS(
      ".menuList{a{div{&:hover{background-color:#424242 !important;&::before{box-shadow: inset 4px -6px 0 -1px #424242 !important;}&::after{box-shadow: inset -3px -7px 0 -1px #424242 !important}  }}}}} ",
    );
  hoverlight();
}
function dark() {
  const addCSS = (css) =>
    (document.head.appendChild(document.createElement("style")).innerHTML =
      css);
  addCSS(
    ".bg-main-500{background-color: #424242 !important;transition: all 0.1s ease-in-out !important ;}",
  ),
    addCSS(
      ".bg-gray-500{background-color: #148F77 !important;transition: all 0.1s ease-in-out !important ;}",
    ),
    addCSS(
      ".menuList{a{div{&:hover{background-color:#148F77 !important;&::before{box-shadow: inset 4px -6px 0 -1px #148f77 !important;}&::after{box-shadow: inset -3px -7px 0 -1px #148f77 !important}  }}}}} ",
    );

  hoverdark();
}
{
  function hoverdark() {
    document.addEventListener("DOMContentLoaded", () => {
      const spans = document.querySelectorAll("button.bg-main-500");
      for (let i = 0; i < spans.length; i++) {
        const span = spans[i];
        console.log(span);

        span.classList.remove("hoverdark");
        span.classList.add("hoverlight");
      }
    });
  }
  function hoverlight() {
    document.addEventListener("DOMContentLoaded", () => {
      const spans = document.querySelectorAll("button.bg-main-500");
      for (let i = 0; i < spans.length; i++) {
        const span = spans[i];
        console.log(span);
        span.classList.remove("hoverlight");
        span.classList.add("hoverdark");
      }
    });
  }

  if (localStorage.getItem("bsTheme") == "dark") {
    dark();
  } else {
    light();
  }
}

////////    dark mod light mod with local storage
