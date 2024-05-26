import { Card } from "../models/Card.js";
import { Memory } from "../models/Memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    #memory;
    constructor()
    {
        super();
        this.#memory = new Memory();
    }

    get getMemory()
    {
        return this.#memory;

    }
    newGame()
    {
        this.#memory.newGame(10);
        this.notify();
        this.saveGame();

    }
    saveGame()
    {
        const myDataAsString = JSON.stringify(this.#memory.toData());
        sessionStorage.setItem("GameSave",myDataAsString);
        console.log(this.#memory.toData());
    }
    loadGame()
    {
      const GameSave = sessionStorage.getItem("GameSave");
      if(GameSave != null){
        this.#memory.FromData(GameSave)
        
        return true;
    }
      else return false;
    }
    start()
    {
        if(this.loadGame() == false)
        {
            this.newGame();
        }
        else
        {
            this.notify();

        }


    }
}