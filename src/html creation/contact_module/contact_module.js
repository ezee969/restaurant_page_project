export {ContactTab}

class ContactTab{

    constructor(div){
        this.div = div
    }

    init(){
        this.creator()
        this.elementNamer()
        this.elementEditor()
        this.itemAppender()
        this.div.appendChild(this.createContactCont)
    }

    creator(){
        this.createContactCont = document.createElement("div")
        this.createContactInfo = document.createElement("p")
    }

    elementNamer(){
        this.createContactCont.className = "contact-cont"
        this.createContactInfo.className = "contact-info-p"
    }

    elementEditor(){
        this.createContactInfo.innerHTML = "Sin celular por el momento, nos lo robaron. Sepa disculpar"
    }

    itemAppender(){
        this.createContactCont.appendChild(this.createContactInfo)
    }
}