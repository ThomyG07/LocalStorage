import { Card } from "../models/Card.js";
export class Memory
{
    #cards;
    #selectedCard
    constructor()
    {

        this.#cards = [];
        this.#selectedCard=null;
    
    }
    get getCardsNumber()
    {

        return this.#cards.length;
    }
    newGame(pairsNumber)
    {
        let card_value = 0x1F90C;
        for (let i = 1; i < pairsNumber*2+1; i++) 
        {
            let newcard = new Card(card_value);
            //this.#cards.push(newcard);
            const rnd = Math.floor(Math.random() * (pairsNumber + 1));
            this.#cards.splice(rnd,0,newcard)
            if(i%2==0) { card_value++;}
           
        }
        

    }
     getCard(index)
    {
        return this.#cards[index];


    }

    toData()
    {
        const tableauObjets = [];
        this.#cards.forEach(card => {
            tableauObjets.push(card.toData())
            
        });
        const DataMemorie =
        {
            "cards": tableauObjets,
 
        }
        return DataMemorie;



    }
    FromData(data)
    {
        const mydataOject = JSON.parse(data);
        var taille = Object.keys(mydataOject.cards).length;
        
        this.#cards = [];
        for(let i = 0; i< taille; i++ )
        {
            let newcard = new Card(mydataOject.cards[i].value);
            if(mydataOject.cards[i].faceHidden == true) newcard.show();
            else newcard.hide;
            this.#cards.push(newcard);

        }

    }
    showCard(id)
    {
        if(this.#cards[id].faceHiden == true )
        {
            this.#cards[id].faceHiden == false;

            if(this.#selectedCard == null)
            {
                this.#selectedCard = this.#cards[id];


            }
            else 
            {
                if(this.#selectedCard.value == this.#cards.value)
                {
                    this.#selectedCard = null


                }
                else
                {
                    setTimeout(1000);
                    this.#cards[id].faceHiden == true;
                    this.#selectedCard.faceHiden == true;


                }


            }

        }
        if(this.#cards.filter(card => card.faceHiden == false).length == this.#cards.length) this.newGame();



    }




}