import './ListCollection.css';
import Livre from './../Livre/Livre.js';
import { useState, useEffect } from 'react';

function ListCollection(props) {

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
        props.collection.map((element, index) => (
          <Livre livre={element} index={index} />
        ))
      }
    </>
  );
}

export default ListCollection;