const inputForm = document.querySelector('form#inputForm')
inputForm.addEventListener('submit', HandleSubmit)

function HandleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const targetList = document.querySelector('#list')
  const item = document.createElement('li')
  item.innerHTML = f.inputBox.value
  targetList.appendChild(item)
}
