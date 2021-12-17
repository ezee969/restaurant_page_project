import {HtmlStructure} from "./html creation/htmlStructure.js"
import "./style.css";

(function(){

    class MainPage{

       init(){
        this.cacheDom()
        this.htmlStructureCreation()
        this.bindEvents()
       }

       cacheDom(){
        this.mainContentDiv = document.querySelector("#content")
       }

       htmlStructureCreation(){
        this.htmlStructure = new HtmlStructure(this.mainContentDiv);
        this.htmlStructure.init();
       }

       bindEvents(){
        this.htmlStructure.createCustomerButton.onclick = (function(){
            restaurantPage.customerButOnClick()
        })
        this.htmlStructure.createMenuButton.onclick = (function(){
            restaurantPage.menuButOnClick()
        })
        this.htmlStructure.createContactButton.onclick = (function(){
            restaurantPage.contactButOnClick()
        })
       }

       customerButOnClick(){
            this.buttonColorTransition(this.htmlStructure.createCustomerButton)
            this.eraseBodyCont()
            this.htmlStructure.CustomerTab.init();
       }

       menuButOnClick(){
            this.buttonColorTransition(this.htmlStructure.createMenuButton)
            this.eraseBodyCont()
            this.htmlStructure.MenuTab.init()
       }

       contactButOnClick(){
            this.buttonColorTransition(this.htmlStructure.createContactButton)
            this.eraseBodyCont()
            this.htmlStructure.ContactTab.init()
       }

       eraseBodyCont(){
        while (this.htmlStructure.createBodyCont.firstChild) {
            this.htmlStructure.createBodyCont.removeChild(this.htmlStructure.createBodyCont.firstChild);
        };
       }

       buttonColorTransition(button){
            this.htmlStructure.buttons.forEach(e => e.classList.add("unclicked-but"))
            button.classList.remove("unclicked-but")
       }
   } 

   let restaurantPage = new MainPage();
   restaurantPage.init();
})()