const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); //기본동작 방지, 여기서 기본동작은 새로고침
  const username = loginInput.value;
  console.log(username);
}

function handleLinkClick (event) {
  event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

