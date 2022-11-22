const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; //update가능하도록 const -> let

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
  const li = event.target.parentElement; //target : 이벤트가 일어난 대상
  li.remove();  
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;

  toDoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) { // <=> savedToDos !== null
  const parsedToDos = JSON.parse(savedToDos); // "[a,b,c]" -> [a,b,c] 문자형이 활용가능한 배열로 변화
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo); 
}