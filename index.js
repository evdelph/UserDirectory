
const form = document.querySelector('form#userForm')
const users = document.querySelector('#users')
const button2 = document.querySelector("#button2")

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  users.appendChild(renderList())

  form.reset()
  form.userName.focus()
}

function renderColor(color){
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

function renderListItem(label, value){
    const listItem = document.createElement('li')
    listItem.textContent = `${label}: `
    try{
        listItem.appendChild(value)
    } catch(e) {
        listItem.textContent += value
    }
    return listItem
}

function renderList(){
    const list = document.createElement('ul')
    userName = form.userName.value
    age = form.age.value

    const nameItem = renderListItem('Name' , userName)
    const ageItem = renderListItem('Age', age)
    const favoriteColor = renderColor(form.favoriteColor.value)
    const colorItem = renderListItem('Favorite Color', favoriteColor)
    colorItem.appendChild(favoriteColor)

    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    list

    return list
  
}

function refreshPage(){
    location.reload()
}

form.addEventListener('submit', handleSubmit)
button2.addEventListener('click',refreshPage)

