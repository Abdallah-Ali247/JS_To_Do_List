


// add event load on window
window.addEventListener('load', (event) => {
    const inputTask = document.getElementById('task');       // access input field
    const tableData = document.querySelector('table');       // access table
    const myButton = document.getElementById('myButton');    // access add button

    // add event click on button for adding a new task
    myButton.addEventListener('click', (event) => {
        // call addNewTask fun then pass it input field & table
        addNewTask(inputTask, tableData);
    });

    // add event click on table using delegation for checkboxes & delete icons
    tableData.addEventListener('click', (event) => {
        // if user click the checkbox
        if (event.target.classList.contains('task-checkbox')) {
            isDone(event.target);                                  // Call isDone when a checkbox is clicked
        } else if (event.target.classList.contains('icon')) {      // if user click the delete icon
            removTask(event.target);                               // Call removTask when delete icon is clicked
        }
    });
});
