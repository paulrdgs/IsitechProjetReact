import './Livre.css';
import { useState, useEffect } from 'react';

function Livre(props) {

    const [NbTomeParLivre, setNbTome] = useState(null)
    const [NbTomeParUserParLivre, setNbTomeParUserParLivre] = useState(null)

    
    useEffect(() => {
        fetch("https://localhost:7152/api/Tomes/NbSpecificTome?id="+props.livre.id)
          .then((result) => {
            result.json().then((resp) => {
                setNbTome(resp);
            }).catch(function (error) {
              console.log("error : ", error);
            })
          })
      }, [])

      useEffect(() => {
        fetch("https://localhost:7152/api/Collections/AllLivresByUserByLivre?idUtilisateur=1&idLivre="+props.livre.id)
          .then((result) => {
            result.json().then((resp) => {
                setNbTomeParUserParLivre(resp);
            }).catch(function (error) {
              console.log("error : ", error);
            })
          })
      }, [])

    return (
        <div className='Livre'>
            <div className='h4'>{props.livre.nom}</div>
            <p>{NbTomeParUserParLivre} / {NbTomeParLivre} </p>
        </div>
    );
}

export default Livre;