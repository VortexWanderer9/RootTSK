let taskInput = document.getElementById('taskInput');
let button = document.querySelector('.button');
let addTask = document.querySelector('.active');
import {taskCode } from './taskCont.js';

taskInput.addEventListener('input', () => {
    if (taskInput.value.trim().length > 0) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
});
// for task add on card
        document.querySelector('.button').addEventListener('click', () => {
            let task = taskInput.value;
            const taskContent = ` <div class="card display">
                    <div class="one display"><input type="checkbox" id="taskInput">
                        <div class="text">${task}</div></div>
                    <div class="two">
                         <div class="remove">
                            <img src="image/trash.svg" width="30" alt="">
                         </div>
                    </div>
                </div>`
            taskInput.value = "";
                taskCode.push(taskContent);
                renderTasks()
        });

        function renderTasks() {
            document.querySelector('.cards').innerHTML = '';
            taskCode.forEach(task => {
                document.querySelector('.cards').insertAdjacentHTML('beforeend', task);
            });
        }