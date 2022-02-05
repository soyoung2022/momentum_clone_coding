const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = 'todos';
let toDos = [];

function handleButtonClicked(event){
    const removedLi = event.target.parentElement;    // event.target = clicked button --> event.target.parentElement = 클릭된 버튼의 부모 li
    const removedLiId = removedLi.id;       // .Id가 아니라 .id인 이유 --> li는 html element이므로 id가 속성임
    removedLi.remove();         // 화면에서 목록 지우기
    toDos = toDos.filter((toDo) => toDo.Id !== parseInt(removedLiId));  // localStorage에 저장된 것 X 버튼 누르면 지우기
    saveToDos();
}

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.Id;      // html element li에 아이디를 부여하기
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌" ;
    button.addEventListener("click", handleButtonClicked);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";       // 화면에 todo 적는 것 비워주기
    const newToDoObj = {
        text: newToDo,
        Id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);   // => (arrow function)
}