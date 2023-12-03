function addTodo() {
    let input = document.getElementById('todo-input');
    let todoText = input.value.trim();
    if (todoText) {
        let list = document.getElementById('todo-list');
        let listItem = document.createElement('li');

        listItem.innerHTML = `
            <input type="checkbox" id="toggle">
            <span>${todoText}</span>
            <button class="delete-btn" onclick="deleteTodo(this)">X</button>
        `;

        list.appendChild(listItem);
        input.value = '';
    }
}

function deleteTodo(element) {
    element.parentElement.remove();
}
