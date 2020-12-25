// Selector
const addInput = document.querySelector(".add"),
  btnAdd = document.querySelector(".btnAdd"),
  todoBlock = document.querySelector(".todoBlock"),
  err = document.querySelector(".err");

function keyPress(){
  document.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
      if(e.charCode == undefined){
        err.innerText = "Значение пустой заполните сначала";
      }
      createElem()
    }else{
     
    }
  })
  btnAdd.addEventListener('click', createElem)
}
keyPress()
todoBlock.addEventListener("click", deletItem);

function createElem(e) {
  err.innerText = "";
  if (addInput.value != "" ) {
    // CreateElement
    let todoList = document.createElement("div");
    todoList.classList.add("list");
    let todoText = document.createElement("h3");
    todoText.innerText = addInput.value;
    todoList.appendChild(todoText);
    // todo Button
    let succses = document.createElement("button");
    succses.innerHTML = `<i class="fas fa-check-square"></i>`;
    succses.classList.add("succses");
    todoList.appendChild(succses);
    // Todo remove Button
    let remove = document.createElement("button");
    remove.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    remove.classList.add("remove");
    todoList.appendChild(remove);
    todoBlock.appendChild(todoList);
    addInput.value = "";
  } else {
    if (addInput.value != "") {
      err.innerText = "";
    } else {
      err.style.transition = "linear 0.3s";
      err.innerText = "Значение пустой заполните сначала";
    }
  }
}

function deletItem(e) {
  let item = e.target;
  if (item.classList[0] === "remove") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
        todo.remove();
    })
    
  }

  if (item.classList[0] === "succses") {
    const todo = item.parentElement;
    todo.classList.toggle("line");
  }
}
