import React, { createContext, useReducer } from "react";

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
    
        //   case 'filtrerName':
        //     const resultsName = allBooks.filter(book => {
        //       const bk = book.nom.toLowerCase();
        //       return bk.startsWith(action.payload.toLowerCase());
        //     })
        //     return resultsName
    
        //   case 'filtrerEdition':
        //     const resultsEdition = allBooks.filter(book => {
        //       const bk = book.edition.toLowerCase();
        //       return bk.startsWith(action.payload.toLowerCase());
        //     })
        //     return resultsEdition
    
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
