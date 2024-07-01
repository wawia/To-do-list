import './styles/main.css'

document.querySelector('#homeButton').addEventListener('click', ()=>{
    document.querySelector('.home').style.display = "flex";
    document.querySelector('.work').style.display = "none";
})

document.querySelector('#workButton').addEventListener('click', ()=>{
    document.querySelector('.work').style.display = "flex";
    document.querySelector('.home').style.display = "none";
})

const inputPull = (index) => {
    document.querySelector('.input').style.display = 'flex'
    if(index == 'addHome'){
        document.querySelector(`#entryHouse`).style.display = 'block'
        document.querySelector(`#entryWork`).style.display = 'none'
    } else {
        document.querySelector(`#entryHouse`).style.display = 'none'
        document.querySelector(`#entryWork`).style.display = 'block'
    }
}

document.querySelector('.addHome').addEventListener('click', () => inputPull('addHome'))
document.querySelector('.addWork').addEventListener('click', () => inputPull('addWork'))

const createDate = () => {
    const date = new Date()
    const monthConverter = {
        0:'JAN',
        1:'FEB',
        2:'MAR',
        3:'APR',
        4:'MAY',
        5:'JUN',
        6:'JUL',
        7:'AUG',
        8:'SEP',
        9:'OCT',
        10:'NOV',
        11:'DEC'
    }
    let month = monthConverter[date.getMonth()]
    let day = date.getDate()
    let year = date.getFullYear()
    let hour = date.getHours()
    if(hour<10){
        hour = '0' + hour
    }

    let minute = date.getMinutes()
    if(minute<10){
        minute = '0' + minute
    }
    return `${month} ${day}, ${year} ${hour}:${minute}`
}


const fromDataToObj = (task, description, taskPlace) => {

    let newDiv = document.createElement('div')
    newDiv.className = 'container'
    let taskName = document.createElement('h1')
    taskName.innerText = task
    let desc = document.createElement('h2')
    desc.innerText = `quick description: ${description}`
    let date = document.createElement('h3')
    date.innerText = `Created on: ${createDate()}`

    const deleteButton = document.createElement('button')
    deleteButton.innerText = '🗑️'

    deleteButton.addEventListener('click', ()=>{
        newDiv.remove()
    })

    newDiv.append(taskName,  date, desc, deleteButton)

    if(taskPlace == 'house'){
        document.querySelector('.homeMain').appendChild(newDiv)
    } else {
        document.querySelector('.workMain').appendChild(newDiv)
    }
}


const enterData = (place) => {

    fromDataToObj(document.querySelector('#task').value, document.querySelector('#description').value, place)

    document.querySelector('#task').value = ''
    document.querySelector('#description').value = ''
    document.querySelector('.input').style.display = 'none'
}

document.querySelector('#entryHouse').addEventListener('click', ()=> enterData('house'))
document.querySelector('#entryWork').addEventListener('click', ()=> enterData('work'))
