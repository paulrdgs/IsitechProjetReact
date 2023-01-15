import React from 'react';
import './Connexion.css';

function Connexion() {





    return (
        <>
            <div className='connect'>
                <div className='block'>
                    <div className='form'>
                        <label>Nom</label><br></br>
                        <input />
                    </div>

                    <div className='form'>
                        <label>Prénom</label><br></br>
                        <input />
                    </div>

                    <div className='button'>Se connecter</div>
                </div>
            </div>
        </>
    );
}

export default Connexion;
