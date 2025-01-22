// variables
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const prioritySelect = document.getElementById('priority-select');
const priorityOrder = { high: 1, medium: 2, low: 3 };


// do this later, too lazy
class Todo {
    constructor(text, done, priority, timestamp) {
        this.text = text;
        this.done = done;
        this.priority = priority;
        this.timestamp = timestamp;
    }

    // save = () => {
    //     // save to LocalStorage

    //     localStorage.setItem(this, JSON.stringify(this));
    // };
}

// LocalStorageからデータを読み込む
const loadTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        todo = new Todo(todo.text, todo.done, todo.priority, todo.timestamp);
        renderTodoItem(todo);
    });
};

// LocalStorageにデータを保存する
const saveTodos = () => {
    const todos = Array.from(document.querySelectorAll('.todo-item')).map(item => new Todo(
        item.querySelector('.todo-text').textContent.trim(),
        item.classList.contains('line-through'),
        item.dataset.priority,
        item.dataset.timestamp
    ));
    // json形式で保存
    localStorage.setItem('todos', JSON.stringify(todos));
};

// データを描画する
const renderTodoItem = (todo) => {
    console.log(todo);
    const div = document.createElement('div');
    div.className = `todo-item post-it p-4 flex flex-col justify-between`;
    div.dataset.priority = todo.priority;
    div.dataset.timestamp = todo.timestamp;

    // 優先度（順位？）によって背景色を変更
    if (todo.priority === 'low') {
        div.style.backgroundColor = '#dcedc8';
    } else if (todo.priority === 'medium') {
        div.style.backgroundColor = '#fff59d';
    } else if (todo.priority === 'high') {
        div.style.backgroundColor = '#ffccbc';
    }

    if (todo.done) {
        div.classList.add('line-through', 'text-gray-500');
    }

    // タスク内容
    const taskSpan = document.createElement('span');
    taskSpan.textContent = todo.text;
    taskSpan.className = 'todo-text cursor-pointer mb-2';
    taskSpan.addEventListener('click', () => {
        // visual bug: line goes black and then turns gray after about 0.2s. 仕方がないので...
        div.classList.toggle('line-through');
        div.classList.toggle('text-gray-500');
        todo.done = !todo.done;
        saveTodos();
    });

    // タイムスタンプ
    const timestampSpan = document.createElement('span');
    let formattedDate = new Date(Number(todo.timestamp)).toLocaleString();
    timestampSpan.textContent = formattedDate;
    timestampSpan.className = 'text-xs text-gray-500';

    // 削除ボタン/イベントリスナー
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.className = 'text-red-500 self-end hover:text-red-700';
    deleteBtn.addEventListener('click', () => {
        div.remove();
        saveTodos();
    });

    // div要素に子要素を追加
    div.appendChild(taskSpan);
    div.appendChild(timestampSpan);
    div.appendChild(deleteBtn);
    todoList.appendChild(div);
};

// タスクを追加する
const addTodo = () => {
    const text = todoInput.value.trim();
    let priority = prioritySelect.value;
    let timestamp = Date.now();
    if (text) {
        let todo = new Todo(text, false, priority, timestamp);
        renderTodoItem(todo);
        saveTodos();
        todoInput.value = '';
        // disable prioritySelect
        // prioritySelect.value = 'low';
    }
    sortTodos();
};

// タスクを優先度順（「順位」ってかもしれない。。。）に並べ替える
const sortTodos = () => {
    let items = Array.from(document.querySelectorAll('.todo-item')).map(item => new Todo(
        item.querySelector('.todo-text').textContent.trim(),
        item.classList.contains('line-through'),
        item.dataset.priority,
        item.dataset.timestamp
    ));
    items.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    todoList.innerHTML = '';
    items.forEach(todo => renderTodoItem(todo));
};

// イベントリスナー
addBtn.addEventListener('click', addTodo);
// フォームじゃないからEnterキーで提出もできる
todoInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

loadTodos();