import React, { createContext, useReducer, useContext } from "react";

export const myAppContext = createContext({
    tableauCollection: {
        collection: [],
        collectionFiltre: []
    },
    setTableauCollection: (action) => {}
})


export const MyAppContextProvider = ({children}) => {

    const myReducerTableauCollection = (state, action) => {
        switch(action.type)
        {
          case 'all':
            return {collection: action.payload, collectionFiltre: action.payload}
    
          case 'filtrerNameEdition':
            return {collection: action.payload.seconde, collectionFiltre: action.payload.first}
    
          default:
            return state
        }
        
      }
    
      const [tableauCollection, setTableauCollection] = useReducer(myReducerTableauCollection, {collection: [], collectionFiltre: []});


    return (
        <myAppContext.Provider value={{
            tableauCollection: tableauCollection,
            setTableauCollection: setTableauCollection,
        }}>
            {children}
        </myAppContext.Provider>
    )
}
