document.querySelector('form').addEventListener('submit', function(e) {
    const newTask = document.createElement('li')
    newTask.className = 'list-group-item d-flex align-items-center'
    const taskName = document.getElementById('task').value
    newTask.innerText = taskName
    const deleteMark = document.createElement('i')
    deleteMark.className = 'fas fa-times text-danger mr-auto delete-item'
    newTask.appendChild(deleteMark)
    document.querySelector('ul').appendChild(newTask)

    e.preventDefault()
})