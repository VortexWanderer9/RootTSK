let taskInput = document.getElementById('taskInput');
let button = document.querySelector('.button');
let addTask = document.querySelector('.active');
import {taskCode, completedTasks } from './taskCont.js';

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
                checkEmpty()
                checkComplete(completedTasks.length)
                taskInput.value = '';
                 const remove = div.querySelector('.remove')
                 remove.addEventListener('click', (e) =>{
                    e.preventDefault()
                    div.remove()
                    checkEmpty()
                 });
                 const comp = div.querySelector('#complete')
                 comp.addEventListener('change', () => {
                    if(comp.checked){
                        div.classList.add('completed');
                        if (!completedTasks.includes(comp)) {
                            completedTasks.push(comp);
                        }
                    } else {
                        div.classList.remove('completed');
                        const idx = completedTasks.indexOf(comp);
                        if (idx !== -1) {
                            completedTasks.splice(idx, 1);
                        }
                        console.log(idx);
                        
                    }
                    checkComplete(completedTasks.length)
                    checkEmpty()
                 })
        });
    let active;
     function checkEmpty(){
        const isThere = document.querySelectorAll('.card')
        const defaults = document.querySelector('.default')
       active = isThere.length
        if(isThere.length > 0){
            defaults.style.display = "none";
        }else{
            defaults.style.display = "";
        }
     }
     
     function checkComplete(complete) {
        const checkCompleteEle = document.querySelector('.checkComplete')
        if(!checkCompleteEle){
            return;
        }
        document.querySelector('.completeNum').innerHTML = complete
        checkCompleteEle.innerHTML = `Clear ${complete} completed task`
                document.querySelector('#activeTask').innerHTML = active - complete
        if (completedTasks.length == 0) {
            checkCompleteEle.style.display = 'none'
        }else{
            checkCompleteEle.style.display = ''
        }
     }
    