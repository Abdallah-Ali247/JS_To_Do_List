



// Function to add a new task
// taks (input field , table , fun counts tasks)
const addNewTask = (inputTask, tableData, countTask=updateTaskCount) => { 
    if (!inputTask.value.trim()) {                               // input validation , not empty
        alert('Please enter a valid task.');
        return;
    }

    // create a new row
    const tr = document.createElement('tr'); 
    // get length of all rows 
    const idCounter = tableData.querySelectorAll('tr').length; 

    // add data to current row
    tr.innerHTML = `
        <td><input type="checkbox" class="task-checkbox" /></td>
        <td>${inputTask.value.trim()}</td>
        <td><i class="fa-solid fa-trash-can icon"></i></td>
    `;

    // add row to the table
    tableData.appendChild(tr);
    inputTask.value = ''; // Clear the input field
    countTask();    // call the fun counts tasks
};

// Function to mark tasks as done  
// taks (target checkbos)
const isDone = (checkbox) => {
    // access second (td) of closest row 
    const taskName = checkbox.closest('tr').querySelector('td:nth-child(2)');
    // if checkbox is checked
    if (checkbox.checked) {
        taskName.style.textDecoration = 'line-through'; // make  line through task name
        taskName.style.color = '#808080';               // change its color
    } else { // if checkbox not checked
        taskName.style.textDecoration = 'none';         // remove the line through
        taskName.style.color = '#7c4c5a';               // reset the color
    }
};

// Function to remove a task
// taks (target icon , fn count tasks)
const removTask = (deleteIcon, countTask=updateTaskCount) => {
    // ask user to confirm delete
    if(confirm("!!!! Are You Sure: !!!!")){
        // access colsest row
        const row = deleteIcon.closest('tr');
        row.remove(); // Remove the task row
        countTask(); // Update the task count
    }
};

// function count tasks 
const updateTaskCount = () => {
    // get counts of all rows - header
    const tasks = document.querySelectorAll('table tr').length - 1;
    // access (p) to display count in it
    const nTasks = document.getElementById('nTasks');
    // write number of tasks to (p)
    nTasks.innerHTML = `You Have ${tasks} Tasks.`;
};
