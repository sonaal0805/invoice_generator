const washcarEl = document.getElementById('washcar-el')
const mowlawnEl = document.getElementById('mowlawn-el')
const pullweedsEl = document.getElementById('pullweeds-el')
const tableEl = document.getElementById("top-table")
const totalEl = document.getElementById('dollar-total')
const sendEl = document.getElementById('send')
const removeEl = document.querySelector('.remove-btn')


let items = []
let amounts = []


function addItem(id){
    const content = document.getElementById(id).textContent
    // const task = innerHtml.textContent() 
    const splitContent = content.split(":")
    if (!items.includes(splitContent[0])) {
        items.push(splitContent[0])
        value = parseInt(splitContent[1].replace('$',''))
        amounts.push(value)
        console.log(items, amounts)
    }

    let total = 0
    for (let i = 0; i < amounts.length; i++){
        total+=amounts[i]
    }
    totalEl.textContent = '$'+total
  
    renderItems()
}

function removeItem(id){


    let index = items.indexOf(id) 
    console.log('index: ', index)
    items.splice(index, 1)
    amounts.splice(index, 1)

    let total = 0
    for (let i = 0; i < amounts.length; i++){
        total+=amounts[i]
    }
    totalEl.textContent = '$'+total
  
    renderItems()
    console.log(items, amounts)
}

let html = ``

function renderItems(){
    html = `<tr>
    <th>TASK</th>
    <th class = "remove-col"></th>
    <th class = "amount"> TOTAL</th>
    </tr>

    <tr class= "psuedo-row">
    <td></td>
    <td></td>
    <td class = "amount"></td>
    </tr>   
    `
  
    if(items.length > 0){
        for(let i = 0; i<items.length;i++){
     
            html += `
       
            <tr>
                <td>${items[i]}</td>
                <td><button id = "${items[i]}" class = "remove-btn" onClick = removeItem(id)>Remove</button></td>
                <td class = "amount"><span class = "dollar">$</span>${amounts[i]}</td>
            </tr>
            `
        
        }

    }
    tableEl.innerHTML = html


}
sendEl.addEventListener('click', function(){
    document.location.reload(true)
})

