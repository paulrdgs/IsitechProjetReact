

### Créer / Lnacer une app

``` react
npx create-react-app my-app 
cd my-app
npm start
```

### Hooks
#### useState
useState permet de mettre à jour une variable. Elle prend en parametre une valeur initial pour la variable, elle a en suite une fontion pour modifier cette valeur.

```js

import { useState } from 'react';

  

const [maVar, setMaVar] = useState(0)

  

const onClickHandler = () => {

  setMaVar((oldVar) => {

    return oldVar + 1

  })

}

```
#### useReducer
useReducer est similaire a useState, il sert pour les valeurs plus grandes, tableau et object complexes ...

```js

const myReducer = (state, action) => {

        switch (action.type) {

            case 'MODFIY_TEST_STRING':

                console.log('je suis entré dans MODFIY_TEST_STRING')

                return {...state, test: action.payload}

            default:

                console.log('je suis pas entré dans un case')

                return state

        }

    }

  

    const [state, dispatch] = useReducer(myReducer, {test: 'myString'})

  

    const myHandler = () => {

        dispatch({type: 'MODFIY_TEST_STRING', payload: 'New Value'})

    }

```

En react.js, tous les éléments sont des fonctions JS qui retourne du JSx (Version étandu de HTML)