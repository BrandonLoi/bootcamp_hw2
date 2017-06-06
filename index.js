const inputForm = document.querySelector('form#inputForm')
inputForm.addEventListener('submit', HandleSubmit)

function HandleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const targetList = document.querySelector('#list')
  const item = createItem(f.inputBox.value)
  targetList.insertBefore(item,document.querySelector('li'))
}

function createItem(name) {
  const item = document.createElement('li')
  item.innerHTML = name
  return item
}
