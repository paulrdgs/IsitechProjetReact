import './ListCollection.css';
import Livre from './../Livre/Livre.js';
import { useState, useEffect, useContext } from 'react';
import { myAppContext } from './../store/appContext';

function ListCollection() {

  const context = useContext(myAppContext)

  const [NbTomeCollection, setNbTomeCollection] = useState(null)

  
  

  useEffect(() => {
    fetch("https://localhost:7152/api/Collections/AllLivresByUser?idUtilisateur=1")
      .then((result) => {
        result.json().then((resp) => {
          setNbTomeCollection(resp);
        }).catch(function (error) {
          console.log("error : ", error);
        })
      })
  }, [])

  return (
    <>
      <div className="nbTome">Vous avez {NbTomeCollection} Tomes</div>
      {
        context.tableauCollection.collectionFiltre.map((element, index) => (
          <Livre index={index} />
        ))
      }
    </>
  );
}

export default ListCollection;