
const form = document.querySelector('form#userForm')
const users = document.querySelector('#users')
const button2 = document.querySelector("#button2")

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target

  const favoriteColor = renderColor(form.favoriteColor.value)
  const colorItem = renderListItem('Favorite Color', favoriteColor)
  const user = {
      'Name': form.userName.value,
      'Age': form.age.value,
      'Favorite Color': renderColor(form.favoriteColor.value),
  }

  users.appendChild(renderList(user))
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

function renderList(data){
    const list = document.createElement('ul')
    userName = form.userName.value
    age = form.age.value
   
    Object.keys(data).map(function(label){
      const item = renderListItem(label, data[label])
      list.appendChild(item)
    })
  
    return list
  
}

function refreshPage(){
    location.reload()
}

form.addEventListener('submit', handleSubmit)
button2.addEventListener('click',refreshPage)

