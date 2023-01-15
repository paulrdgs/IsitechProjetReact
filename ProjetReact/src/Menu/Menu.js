import './Menu.css';
import image from './../image/nuage.png';
import {useReducer} from 'react';
import { Link } from 'react-router-dom';



function Menu() {

    const myReducerChangeMenuActif = (state, action) => {
        switch(action.type)
        {
            case 'menu':
                if(action.payload == 1)
                {
                    return {connect: true, collection: false, recherche: false}
                }
                if(action.payload == 2)
                {
                    return {connect: false, collection: true, recherche: false} 
                }
                if(action.payload == 3)
                {
                    return {connect: false, collection: false, recherche: true} 
                }
            

            default:
                return state
        }
    }

    const [changeMenuActif, setChangeMenuActif] = useReducer(myReducerChangeMenuActif, {connect: true, collection: false, recherche: false})
    const notactif = "Sous_Menu";
    const actif = "Actif Sous_Menu";

    const changeMenu = (val) => {
        setChangeMenuActif({type: "menu", payload: val})
      }

    return (
        <div className='Menu'>
            <div className='Titre'><img width="45%" src={image}/>MangaAPI</div>
            <Link to="connect"><div onClick={() => changeMenu(1)} className={changeMenuActif.connect ? actif : notactif }><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z"/></svg>Se connecter</div></Link>
            <Link to="collect"><div onClick={() => changeMenu(2)} className={changeMenuActif.collection ? actif : notactif}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>Collection</div></Link>
            <Link to="search"><div onClick={() => changeMenu(3)} className={changeMenuActif.recherche ? actif : notactif}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>Rechercher</div></Link>
        </div>
    );

}

export default Menu;