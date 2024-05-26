export class Card
{
    #value;
    #faceHidden;
    constructor(value)
    {

        this.#value = value;
        this.#faceHidden = true;
    
    }
    get value()
    {

        return this.#value;
    }
    get faceHiden(){return this.#faceHidden;}
    show(){this.#faceHidden == true}
    hide(){this.#faceHidden == false}

    toData()
    {

        const DataCard =
        {
            value: this.#value,
            faceHidden: this.#faceHidden
 
        }
        return DataCard;
    }



}