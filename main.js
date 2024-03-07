function getCard(){
    let card = {
        title: "Название" ,
        img: "https://sun9-7.userapi.com/impg/Udczrbie-PEE1DY2hip8afa6XsBEpTYWvHQDoQ/y8T8sUXWs_4.jpg?size=744x749&quality=95&sign=96ef2cf8dd1b0c8abb34e7c38abb3ca9&type=album",
        desc: "Описание карточки"
    }

    let cardElement = document.createElement("div")
    let cardImg = document.createElement("img")
    let cardTitle = document.createElement("h2")
    let cardDesc = document.createElement("p")
    let cardImportantBtn = document.createElement("button")
    let cardRemoveBtn = document.createElement("button")

    cardElement.classList.add("card")
    cardImg.classList.add("card__img")
    cardTitle.classList.add("card__title")
    cardDesc.classList.add("card__desc")
    cardImportantBtn.classList.add("card__import")
    cardRemoveBtn.classList.add("card__remove")

    cardTitle.textContent = card.title
    cardImg.src = card.img
    cardDesc.textContent = card.desc

    cardImportantBtn.textContent ="Важное"
    cardRemoveBtn.textContent ="Удалить"

    cardElement.append(cardImg, cardTitle, cardDesc, cardImportantBtn, cardRemoveBtn)

    document.body.append(cardElement)
}

