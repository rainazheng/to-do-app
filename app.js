function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  //access new to do, put it in the array, and clear the field
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    const addToDoForm = document.getElementById('addToDoForm');

    //empty text check
    if (!newToDoText.value) { return; }
    
    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI();
  }

  //renders the UI
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  //event listener when the user submits addToDoForm
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  //call to render the UI
  renderTheUI();

}


window.onload = function() {
  onReady();
};
