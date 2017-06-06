const formEntry = document.querySelector('form#entryText')

function submitButtonHandler(ev){
    ev.preventDefault()
    const src = ev.target
    const newItem = src.itemName.value

}

formEntry.addEventListener('submit', submitButtonHandler)