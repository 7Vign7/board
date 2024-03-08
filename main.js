let notesArr = []

function getAddBtn(text){
    let buttonAdd = document.createElement("button")
    buttonAdd.classList.add("btn")
    buttonAdd.textContent= text
    return buttonAdd
}

function getCard(card, index){

    let cardElement = document.createElement("li")
    let cardImg = document.createElement("img")
    let cardTitle = document.createElement("h2")
    let cardDesc = document.createElement("p")
    let cardBtn = document.createElement("div")
    let cardImportantBtn = document.createElement("button")
    let cardRemoveBtn = document.createElement("button")

    cardElement.classList.add("card")

    if (card.done === true){
        cardImportantBtn.textContent = "Не важное"
        cardElement.classList.add("card__coll")
    }

    cardImg.classList.add("card__img")
    cardTitle.classList.add("card__title")
    cardDesc.classList.add("card__desc")
    cardBtn.classList.add("card__box_btn")
    cardImportantBtn.classList.add("card__import")
    cardRemoveBtn.classList.add("card__remove")

    cardTitle.textContent = card.title
    cardImg.src = card.img
    cardDesc.textContent = card.desc

    cardImportantBtn.textContent ="Важное"
    cardRemoveBtn.textContent ="Удалить"

    cardRemoveBtn.onclick = function (){
        notesArr.splice(index, 1)
        render(notesArr)
    }
    cardImportantBtn.onclick = function (){
        if(cardElement.classList.contains("card__coll")===false){
            cardImportantBtn.textContent = "Не важное"
            cardElement.classList.add("card__coll")
            card.done = true
        }
        else{
            cardImportantBtn.textContent = "Важное"
            cardElement.classList.remove("card__coll")
            card.done = false
        }
    }

    cardBtn.append(cardImportantBtn, cardRemoveBtn)
    cardElement.append(cardImg, cardTitle, cardDesc, cardBtn)

    return cardElement
}

function getList(){
    let ul = document.createElement("ul")
    ul.classList.add("list")
    return ul
}

let list = getList()

let addBtn = getAddBtn("Добавить новую замтку ")


addBtn.onclick = function (){
    let titleValue = prompt("Введите название заметки")
    let imgValue = prompt("Введите путь заметки")
    let descValue = prompt("Введите описание заметки")

    let newNoteObj ={
        title: titleValue,
        img: imgValue,
        desc: descValue,
        done: false
    }

    notesArr.push(newNoteObj)

    render(notesArr)
}

function render(arrNotes){
    list.innerHTML=""
    for(let i = 0; i<arrNotes.length; i++){
        let newCard = getCard(arrNotes[i], i)
        list.append(newCard)
    }
}

render(notesArr)

document.body.append(addBtn, list)
