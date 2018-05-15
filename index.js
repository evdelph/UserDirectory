
const form = document.querySelector('form#userForm')
const users = document.querySelector('#users')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  users.appendChild(renderList())

  form.reset()
  form.userName.focus()
}

function renderColor(){
  const colorDiv = document.createElement('div')
  const favoriteColor = form.favoriteColor.value
  colorDiv.style.backgroundColor = favoriteColor
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

    debugger
    const nameItem = renderListItem(`Name: ${userName}`)
    debugger
    const ageItem = renderListItem(`Age: ${age}`)
    const colorItem = renderListItem('Favorite Color: ')
    colorItem.appendChild(renderColor())

    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    list

    return list
  
}

form.addEventListener('submit', handleSubmit)