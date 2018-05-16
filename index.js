
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
  const favoriteColor = form.favoriteColor.value
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

function renderListItem(item){
    const listItem = document.createElement('li')
    listItem.textContent = item
    return listItem
}

function renderList(){
    const list = document.createElement('ul')
    userName = form.userName.value
    age = form.age.value

    const nameItem = renderListItem(`Name: ${userName}`)
    const ageItem = renderListItem(`Age: ${age}`)
    const favoriteColor = form.favoriteColor.value
    const colorItem = renderListItem('Favorite Color: ')
    colorItem.appendChild(renderColor(favoriteColor))

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

