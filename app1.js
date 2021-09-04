/* add new task */      //worked successfully

function addTask(e) {
    const newTask = document.createElement('li')
    newTask.className = 'list-group-item d-flex align-items-center'
    const taskName = document.getElementById('task').value
    newTask.innerText = taskName
    // newTask.appendChild(document.createTextNode('تسک جدید'))
    const deleteSign = document.createElement('i')
    deleteSign.className = 'fas fa-times text-danger mr-auto delete-item'
    newTask.appendChild(deleteSign)
    document.querySelector('ul.list-group').appendChild(newTask)

    e.preventDefault()
}

document.querySelector('.btn-primary').addEventListener('click', addTask)

/* rmove task */        //worked successfully

function removeTask(e) {
    const ul = document.querySelector('ul.list-group')
    const li = document.querySelector('li')
    ul.removeChild(li)

    e.preventDefault()
}

document.querySelector('.btn-dark').addEventListener('click', removeTask)

/* delete one item */       //not worked successfully

// function deleteItem() {
//     const taskItem = document.querySelectorAll('li')
//     const ul = document.querySelector('ul.list-group')
//     let dM = document.querySelector('ul i')
//     ul.removeChild(taskItem)
// }

// const deleteSign = document.querySelector('i')
// deleteSign.className = 'list-group-item d-flex align-items-center'

// deleteSign.addEventListener('click', deleteItem)