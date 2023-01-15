import './Collection.css';
import ListCollection from '../ListCollection/ListCollection.js';
import Filtre from '../Filtre/Filtre.js';
import React, { useEffect, useReducer, useContext } from 'react';
import { myAppContext } from '../store/appContext';

function Collection() {

  const context = useContext(myAppContext)


  
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

  

  return (
    <>
      <div className='laList'>
        <Filtre />
        <ListCollection />
      </div>

    </>
  );
}

export default Collection;
