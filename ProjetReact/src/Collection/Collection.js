import './Collection.css';
import ListCollection from '../ListCollection/ListCollection.js';
import React, { useEffect, useReducer, useContext } from 'react';
import { myAppContext } from '../store/appContext';

function Collection() {

  const context = useContext(myAppContext)


  const myReducerFiltreActive = (state, action) => {
    switch (action.type) {
      case 'filtre':
        if (action.payload === 1) {
          return { nom: true, edition: false }
        }
        else {
          return { nom: false, edition: true }
        }


      default:
        return state
    }
  }

  const [filtreActive, setFiltreActive] = useReducer(myReducerFiltreActive, { nom: true, edition: false })


  useEffect(() => {
    fetch("https://localhost:7152/api/Collections/CollectionUtilisateur?idUtilisateur=1")
      .then((result) => {
        result.json().then((resp) => {
          context.setTableauCollection({ type: "all", payload: resp });
        }).catch(function (error) {
          console.log("error : ", error);
        })
      })
  }, [])

  const FilterBooks = (event) => {

    if (event.target.value === "") {
      context.setTableauCollection({ type: "all", payload: context.tableauCollection.collection });
    }
    else {
      if (filtreActive.nom === true) {
        const resultsName = context.tableauCollection.collection.filter(book => {
          const bk = book.nom.toLowerCase();
          return bk.startsWith(event.target.value.toLowerCase());
        })
        const val = context.tableauCollection.collection
        context.setTableauCollection({ type: "filtrerNameEdition", payload: { first: resultsName, seconde: val } });
      }
      else {
        const resultsEdition = context.tableauCollection.collection.filter(book => {
          const bk = book.edition.toLowerCase();
          return bk.startsWith(event.target.value.toLowerCase());
        })
        const val = context.tableauCollection.collection
        context.setTableauCollection({ type: "filtrerNameEdition", payload: { first: resultsEdition, seconde: val } });
      }
    }
  }

  const changeFilter = (val) => {
    setFiltreActive({ type: "filtre", payload: val })
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
        <ListCollection />
      </div>

    </>
  );
}

export default Collection;
