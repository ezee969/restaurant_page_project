export {HtmlStructure}
import { CustomerTab } from "./customer_experience_tab/customer_experience_module"
import { MenuTab } from "./menu_module/menu_module"
import { ContactTab } from "./contact_module/contact_module"
import bgImg from "../assets/banner-bg.jpg"
import bgImg2 from "../assets/page-bg.jpg"


// let htmlStructure = function(div){
    class HtmlStructure{
        
        constructor(div){
            this.div = div
        }

        init(){
            this.creator()
            this.elementNamer()
            this.backgroundSetter()
            this.innerHtmlSetter()
            this.itemAppender()
            this.div.appendChild(this.createHeaderCont)
            this.div.appendChild(this.createButtonCont)
            this.div.appendChild(this.createBodyCont)
            this.CustomerTab.init()
        }

        creator(){
            this.createHeaderCont = document.createElement("div");
            this.createBodyCont = document.createElement("div");
            this.createButtonCont = document.createElement("div");
            this.createTitle = document.createElement("h1");
            this.createCustomerButton = document.createElement("button")
            this.createMenuButton = document.createElement("button")
            this.createContactButton = document.createElement("button")
            this.buttons = [this.createCustomerButton,this.createMenuButton,this.createContactButton]
            this.CustomerTab = new CustomerTab(this.createBodyCont)
            this.MenuTab = new MenuTab(this.createBodyCont)
            this.ContactTab = new ContactTab(this.createBodyCont)
        }

        elementNamer(){
            this.createHeaderCont.className = "header-cont";
            this.createBodyCont.className = "body-cont";
            this.createTitle.className = "page-title";
            this.createButtonCont.className = "button-cont"
            this.createCustomerButton.className = "customer-but"
            this.createMenuButton.className = "menu-but"
            this.createMenuButton.className = "unclicked-but"
            this.createContactButton.className = "contact-but"
            this.createContactButton.className = "unclicked-but"
        }

        backgroundSetter(){
            this.createBodyCont.style.backgroundImage = `url(${bgImg2})`;
            this.createHeaderCont.style.backgroundImage = `url(${bgImg})`;
        }

        innerHtmlSetter(){
        this.createCustomerButton.innerHTML = "Customers experiences"
        this.createMenuButton.innerHTML = "Tea menu"
        this.createContactButton.innerHTML = "Contact us"
        this.createTitle.innerHTML = "Si tengo que laburar de diseñador grafico me cago de hambre";
        }

        itemAppender(){
        this.createHeaderCont.appendChild(this.createTitle);
        this.createButtonCont.appendChild(this.createCustomerButton)
        this.createButtonCont.appendChild(this.createMenuButton)
        this.createButtonCont.appendChild(this.createContactButton)
        }

}
// }

