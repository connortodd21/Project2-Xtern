//const formEntry = document.querySelector('form#entryText')

function testFunction(){
    document.body.style.backgroundColor = 'yellow';
}

function submitButtonHandler(ev){
    ev.preventDefault()
    const src = ev.target
    const newItem = src.itemName.value

    const table = document.getElementById('table')
    const row = table.insertRow(0)
    const cell1 = row.insertCell(0)
    cell1.innerHTML = newItem
    const cell2 = row.insertCell(1)
    cell2.innerHTML =`<button type="button", id="removeButton">Remove</button>`
    const cell3 = row.insertCell(2)
    cell3.innerHTML = `<button type="button", id="promoteButton">Promote</button>`

    // const row = document.createElement('tr')
    // const cell = document.createElement('td')
    // const cellText = document.createTextNode(newItem)
    // cell.appendChild(cellText)
    // row.appendChild(cell)
    // table.appendChild(row)
    
    

}

//formEntry.addEventListener('button', test)