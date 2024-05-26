﻿# LocalStorage
## Des Cartes
Lors du lancement du programme:

![image](https://github.com/ThomyG07/LocalStorage/assets/93085354/656ab058-5c0f-45fd-af6f-d29f1752204f)

Après un click:

![image](https://github.com/ThomyG07/LocalStorage/assets/93085354/899fd43f-d280-434e-8eb7-4aa48059d0c3)
![image](https://github.com/ThomyG07/LocalStorage/assets/93085354/fa2b47c4-7670-4afd-910c-df3e15ecef04)


Fonction pour créer une carte :
```js
card.addEventListener("click",  () => this.#controllerMemory.createCard(this.#controllerMemory))
```
### Application 

Cartes regroupées par pair:

![image](https://github.com/ThomyG07/LocalStorage/assets/93085354/5772bea1-674a-48d3-9679-fa1963146178)

## Un peu d'aléatoire

Carte dans un ordre aléatoire :

![image](https://github.com/ThomyG07/LocalStorage/assets/93085354/99a7aea9-ecdc-4e42-bf2c-5cf75b7a1074)

Fonction qui permet de mettre les cartes dans un ordre aléatoire:
```js
let card_value = 0x1F90C;
        for (let i = 1; i < pairsNumber*2+1; i++) 
        {
            let newcard = new Card(card_value);
            const rnd = Math.floor(Math.random() * (pairsNumber + 1));
            this.#cards.splice(rnd,0,newcard)
            if(i%2==0) { card_value++;}
           
        }
```
## Enregistrement 
### Controller
![image](https://github.com/ThomyG07/LocalStorage/assets/93085354/5611a70b-7659-4180-9f4b-a98883717e8a)

fonction toData() de la classe Card :
```js
toData()
    {

        const DataCard =
        {
            value: this.#value,
            //faceHidden: this.#faceHidden
 
        }
        return DataCard;
    }

```

fonction toData() de la classe Memory :
```js
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

```


## Chargement 

### Memory 


