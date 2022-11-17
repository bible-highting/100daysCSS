const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event) {
  event.preventDefault(); //기본동작 방지, 여기서 기본동작은 새로고침
  const username = loginInput.value;
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);