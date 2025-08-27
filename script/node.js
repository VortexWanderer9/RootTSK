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
const task = document.getElementById('taskInput');
addTask.addEventListener('click', () => {
   let taskValue = task.value;
    const tasks = ` <div class="card display">
                    <div class="one display"><input type="checkbox">
                        <div class="text">${task.value} </div></div>
                    <div class="two">
                         <div class="remove">
                            <img src="image/trash.svg" width="30" alt="">
                         </div>
                    </div>
                </div>`;

    console.log(taskValue);
    

        });

        document.querySelector('.button').addEventListener('click', function() {
            console.log("hello");
        });