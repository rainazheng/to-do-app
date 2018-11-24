function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the newToDoText
    let title = newToDoText.value;

    //create new li
    let newLi = document.createElement('li');

    //create new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //create delete button
    let delButton = document.createElement('button');
    delButton.textContent = "delete";
    delButton.className = "mdl-button mdl-js-button mdl-button--accent";

    //attach delete buton to li
    newLi.appendChild(delButton);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty input from text field
    newToDoText.value = '';

    delButton.addEventListener('click', () => {
      toDoList.removeChild(newLi);
      toDoList.removeChild(delButton);
    })
  });
}

window.onload = function() {
  onReady();
};
