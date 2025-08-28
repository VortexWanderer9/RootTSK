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
            if(task.trim() === ''){
                alert('please write down task')
                return;
            }
                const taskContent = ` 
                <div class="one display"><input type="checkbox" id="complete">
                <div class="text">${task}</div></div>
                <div class="two">
                <div class="remove">
                <img src="image/trash.svg" width="30" alt="">
                </div>
                </div>`
                const div = document.createElement('div')
                div.classList.add('card')
                div.classList.add('display')
                div.innerHTML = taskContent;
                document.querySelector('.cards').appendChild(div)
                taskInput.value = '';
                 const remove = div.querySelector('.remove')
                 remove.addEventListener('click', (e) =>{
                    e.preventDefault()
                    div.remove()
                 });

                 const 

        });
