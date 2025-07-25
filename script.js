function addTodo() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  if (task === '') return;

  const list = document.getElementById('todo-list');
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = task;
  span.onclick = () => {
    span.classList.toggle('done');
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.classList.add('edit-btn');
  editBtn.onclick = () => {
    const newTask = prompt('Edit task:', span.textContent);
    if (newTask !== null) {
      span.textContent = newTask;
    }
  };

  const delBtn = document.createElement('button');
  delBtn.textContent = '🗑️';
  delBtn.classList.add('delete-btn');
  delBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = '';
}
