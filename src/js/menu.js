import html from "../html/menu.html";

const menuLoad = () => {
  document.getElementById("content").insertAdjacentHTML("beforeend", html);
};

export { menuLoad };
