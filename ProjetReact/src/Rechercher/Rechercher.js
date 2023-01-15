import React, { useState, useEffect } from 'react';
import './Rechercher.css';
import Filtre from '../Filtre/Filtre.js';

function Rechercher() {

    const [listLivre, setListLivre] = useState([])




    useEffect(() => {
        fetch("https://localhost:7152/api/Livres/AllLivres")
            .then((result) => {
                result.json().then((resp) => {
                    setListLivre(resp);
                }).catch(function (error) {
                    console.log("error : ", error);
                })
            })
    }, [])

    return (
        <>
            <Filtre />
            <div className='listLivre'>
                {
                    listLivre.map((element, index) => (
                        <div className='livredispo'>{element.nom}</div>
                    ))
                }
            </div>
        </>
    );
}

export default Rechercher;
