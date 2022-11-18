const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string 변수명은 대문자로 설정이 원칙, string이 두번이상 반복될 경우 변수화
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault(); //기본동작 방지, 여기서 기본동작은 새로고침
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() { // 중복되는 부분 함수화 리팩토링
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if ( savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}


