import { Observer } from "../patterns/observer.js";

export class ViewMemory extends Observer
{
    #controllerMemory;

    constructor(controllerMemory)
    {
        super();

        this.#controllerMemory = controllerMemory;
        this.#controllerMemory.addObserver(this);
    }

    notify()
    {
        this.displayCards();
        
    }
    displayCard(newcard)
    {
        const cards = document.querySelector(".cards");
        const card = document.createElement("div");
        card.classList.add("card");
        if(newcard.faceHiden == true)card.classList.add("hidden"); 
        else card.classList.remove("hidden");
        
        cards.appendChild(card);
        const myint = newcard.value; 
        const caractere = "&#x"+ myint.toString(16);
        card.innerHTML =  caractere;
        //card.addEventListener("click",  () => this.#controllerMemory.createCard(this.#controllerMemory))
    }
    displayCards()
    {
        let memory = this.#controllerMemory.getMemory;
        const maxcards = memory.getCardsNumber;
        for (let i = 0; i < maxcards; i++) 
        {
            this.displayCard(memory.getCard(i));

        }
    }
}