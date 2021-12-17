import customerImage from "../../assets/sam-hyde.jpg"
export {CustomerTab}

class CustomerTab{
    
    constructor(div){
        this.div = div
    }

    init(){
        this.creator()
        this.elementNamer()
        this.elementEditor()
        this.itemAppender()
        this.div.appendChild(this.createCustomerCard)
    }

    creator(){
        this.createCustomerCard = document.createElement("div")
        this.createCustomerImage = document.createElement("img");
        this.createCustomerText = document.createElement("p")
        
    }

    elementNamer(){
        this.createCustomerCard.className = "customer-card"
        this.createCustomerImage.className = "customer-image";
        this.createCustomerText.className = "customer-text"
    }

    elementEditor(){
        this.createCustomerImage.src = customerImage;
        this.createCustomerText.innerHTML = `"What inspires me is teaching african refugees how to program JavaScript"`
    }

    itemAppender(){
        this.createCustomerCard.appendChild(this.createCustomerImage);
        this.createCustomerCard.appendChild(this.createCustomerText);
    }

}