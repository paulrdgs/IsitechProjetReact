import './Livre.css';
import { useState, useEffect, useContext } from 'react';
import { myAppContext } from './../store/appContext';

function Livre(index) {

  const context = useContext(myAppContext)

  const [NbTomeParLivre, setNbTome] = useState(null)
  const [NbTomeParUserParLivre, setNbTomeParUserParLivre] = useState(null)
  const [imageTome, setImageTome] = useState([])

  



  const NbTomeByLivre = () => {
    fetch("https://localhost:7152/api/Tomes/NbSpecificTome?id=" + context.tableauCollection.collectionFiltre[index.index].id)
    .then((result) => {
      result.json().then((resp) => {
        setNbTome(resp);
      }).catch(function (error) {
        console.log("error : ", error);
      })
    })
  }

  const NbTomeByUserByLivre = () => {
    fetch("https://localhost:7152/api/Collections/AllLivresByUserByLivre?idUtilisateur=1&idLivre=" + context.tableauCollection.collectionFiltre[index.index].id)
    .then((result) => {
      result.json().then((resp) => {
        setNbTomeParUserParLivre(resp);
      }).catch(function (error) {
        console.log("error : ", error);
      })
    })
  }

  const ImageTome = () => {
    fetch("https://localhost:7152/api/Tomes/SpecificTome?id=" + context.tableauCollection.collectionFiltre[index.index].id)
    .then((result) => {
      result.json().then((resp) => {
        setImageTome(resp);
      }).catch(function (error) {
        console.log("error : ", error);
      })
    })
  }

  useEffect(() => {
    NbTomeByLivre()
    NbTomeByUserByLivre()
    ImageTome()
  })

  return (
    <>
      <div className='Livre'>
        <div className='h4'>{context.tableauCollection.collectionFiltre[index.index].nom}</div>
        <p>{NbTomeParUserParLivre} / {NbTomeParLivre} </p>
        <div className='image'>
          {
            imageTome.map((img) => (
              <img width="120" height="100%" src={img.image} key={img.id}/>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Livre;