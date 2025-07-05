// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementsByTagName("app-root")[0].textContent =
//     "welcome to your life";
// });

let init = () => {
  document.getElementsByTagName("app-root")[0].textContent =
    "welcome to your life";
};
init();

let initfun = () => {
  console.log("hello world");
};

export default initfun;
