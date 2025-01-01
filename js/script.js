const task = document.getElementById("task"); // get the task element
const lstContainer = document.getElementById("list-container"); // get the list container element

function addTask()
{
    if(task.value === '') //if value of task is equal to empty
    {
        alert('Please enter Something');
    }
    else
    {
        // add task 
        let li = document.createElement('li') //create li element and assigned to li variable
        li.innerHTML = task.value ; //assign value of task to li element
        lstContainer.appendChild(li) //append li element to lstContainer

        //  cross icon to delete task
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span) //append span to li element
    } 
    task.value = "" //AFTER add value of task in li task.value(input field ) will be empty
    saveData();
}

lstContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI') //if target element is li
    {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

//save data on localstorage

function saveData(){
    localStorage.setItem("data",lstContainer.innerHTML)
}

function showData(){
    lstContainer.innerHTML = localStorage.getItem("data");
}
showData();