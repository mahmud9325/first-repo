const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const taskInputValue = taskInput.value.trim();

    if(taskInputValue !== ""){
      const taskListul = document.getElementById('taskListul');
      const li = document.createElement('li');
      li.innerHTML = '<input type="checkbox" > ' + taskInputValue + '<button     onclick="deleteTask(this)">Delete</button>';
      taskListul.appendChild(li);
 
    taskInput.value = "";

    }else{
        alert('Please add a Task.');
    }
}

const deleteTask = (btn) => {
    const li = btn.parentNode;
    li.parentNode.removeChild(li);   
}

const deleteTaskChecked = () => {
    const taskListul = document.getElementById('taskListul');
    const checkboxs = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxs.forEach(checkbox => {
        const li = checkbox.parentNode;
        li.parentNode.removeChild(li);

    })
}