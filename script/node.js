let taskInput = document.getElementById('taskInput');
let button = document.querySelector('.button');
let addTask = document.querySelector('.active');

taskInput.addEventListener('input', () => {
    if (taskInput.value.trim().length > 0) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
});
// for task add on card
        document.querySelector('.button').addEventListener('click', function() {
            console.log("hello");
        });