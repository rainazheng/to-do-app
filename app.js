function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  //access new to do, put it in the array, and clear the field
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    const addToDoForm = document.getElementById('addToDoForm');

    //empty text check
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;
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
      let delButton = document.createElement('button');
      delButton.textContent = "delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(delButton);

      //event listener for delButton
      delButton.addEventListener('click', () => {
        function deleteToDos(item) {
          return item.id !== toDo.id;
        }

        toDos = toDos.filter(deleteToDos);

        rendertheUI();
      });
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
