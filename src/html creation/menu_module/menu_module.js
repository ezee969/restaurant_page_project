export {MenuTab}

class MenuTab{

    constructor(div){
        this.div = div
    }

    init(){
        this.creator()
        this.elementNamer()
        this.elementEditor()
        this.itemAppender()
        this.div.appendChild(this.menuCont)
    }

    creator(){
        this.menuCont = document.createElement("div")
        this.teas = document.createElement("ul")
        this.firstTea = document.createElement("li")
        this.secondTea = document.createElement("li")
        this.thirdTea = document.createElement("li")
        this.fourthTea = document.createElement("li")
        this.fifthTea = document.createElement("li")
    }

    elementNamer(){
        this.menuCont.className = "menu-cont"
        this.teas.className = "tea-list"
    }

    elementEditor(){
        this.firstTea.innerHTML = "Black tea   $3"
        this.secondTea.innerHTML = "Tea         $54"
        this.thirdTea.innerHTML = "Tea         $25"
        this.fourthTea.innerHTML = "Tea         $45"
        this.fifthTea.innerHTML = "Special tea $99"
    }

    itemAppender(){
        this.teas.appendChild(this.firstTea)
        this.teas.appendChild(this.secondTea)
        this.teas.appendChild(this.thirdTea)
        this.teas.appendChild(this.fourthTea)
        this.teas.appendChild(this.fifthTea)
        this.menuCont.appendChild(this.teas)
    }
}