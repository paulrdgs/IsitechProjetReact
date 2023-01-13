import './css/Collection.css';
import ListCollection from './ListCollection/ListCollection.js';
import React, { useEffect, useState, useReducer } from 'react';

function Collection() {

  const [allBooks, setAllBooks] = useState([])


  const myReducerBooks = (state, action) => {
    switch(action.type)
    {
      case 'all':
        return action.payload

      case 'filtrerName':
        const resultsName = allBooks.filter(book => {
          const bk = book.nom.toLowerCase();
          return bk.startsWith(action.payload.toLowerCase());
        })
        return resultsName

      case 'filtrerEdition':
        const resultsEdition = allBooks.filter(book => {
          const bk = book.edition.toLowerCase();
          return bk.startsWith(action.payload.toLowerCase());
        })
        return resultsEdition

      default:
        return state
    }
    
  }

  const [collection, setBooks] = useReducer(myReducerBooks, []);

  
  const myReducerFiltreActive = (state, action) => {
    switch(action.type)
    {
      case 'filtre':
        if(action.payload == 1)
        {
          return {nom: true, edition :false}
        }
        else
        {
          return {nom: false, edition :true} 
        }
        

      default:
        return state
    }
  }

  const [filtreActive, setFiltreActive] = useReducer(myReducerFiltreActive, {nom: true, edition :false})
  

  useEffect(() => {
    fetch("https://localhost:7152/api/Collections/CollectionUtilisateur?idUtilisateur=1")
      .then((result) => {
        result.json().then((resp) => {
          setAllBooks(resp);
          setBooks({type: "all",payload: resp});
          console.log(resp);
        }).catch(function (error) {
          console.log("error : ", error);
        })
      })
  }, [])

  const FilterBooks = (event) => {
    
    if (event.target.value == "") {
      setBooks({type: "all",payload: allBooks});
    }
    else {
      if(filtreActive.nom == true)
      {
        setBooks({type: "filtrerName",payload: event.target.value});
      }
      else
      {
        setBooks({type: "filtrerEdition",payload: event.target.value});
      }      
    }
  }

  const changeFilter = (val) => {
    setFiltreActive({type: "filtre", payload: val})
  }

  return (
    <>
      <div className='laList'>
        <div className='Filter'>
          <input placeholder="Rechercher dans sa collection" onChange={FilterBooks} />
          <div className='filtre'>
            <div onClick={() => changeFilter(1)} className={filtreActive.nom ? 'actif' : undefined}>Nom</div>
            <div onClick={() => changeFilter(2)} className={filtreActive.edition ? 'actif' : undefined}>Edition</div>
          </div>
        </div>
        <ListCollection collection={collection} />
      </div>

    </>
  );
}

export default Collection;
