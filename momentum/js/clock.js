const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

//setInterval(function,기다리는 시간)
setInterval(sayHello,5000);
