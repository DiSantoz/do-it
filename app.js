const addForm = document.querySelector(".add");

const list = document.querySelector(".todos");

// generate template for user's list item
const generateTemplate = (todo) => {
  const html = `<li
    class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += html;
};

// add user's item to list upon submitting
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //   grab user value from form input field
  const todo = addForm.add.value.trim();

  //   checks that item has value of atleast '1 char'
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});
