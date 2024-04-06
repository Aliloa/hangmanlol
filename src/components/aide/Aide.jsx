import React from 'react';
import "./aide.css";

export const Aide = () => {

    const fermer = () => {
        const popupAide = document.querySelector('.popup-aide');
        popupAide.style.display = 'none';
    };

    const ouvrir = () => {
        const popupAide = document.querySelector('.popup-aide');
        popupAide.style.display = 'flex';
    };
        
        if(localStorage.langue === "fr-FR") {
            return (
                <div>
                    <div className='indice'>
                    <button onClick={() => ouvrir()}><img src="indice.png" alt="indice" /></button>
                    </div>
                <div className='popup-aide'>
                    <div className='contenu'>
                    <p>Bienvenue au jeu du Pendu!</p>
                <p>Indice: le mot est un plat.</p>
                <p>Comment jouer :</p>
                <ul>
                    <li>Un mot est choisi au hasard.</li>
                    <li>Vous devez deviner les lettres du mot.</li>
                    <li>Vous avez 7 chances.</li>
                </ul>
                <p>Project by <a href="https://github.com/Aliloa" target="_blank">Aliloa</a>.</p>
                <button onClick={() => fermer()}>Fermer</button>
                    </div>
                </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className='indice'>
                    <button onClick={() => ouvrir()}><img src="indice.png" alt="indice" /></button>
                    </div>
                <div className='popup-aide'>
                    <div className='contenu'>
                    <p>Welcome to the Hangman game!</p>
                <p>Hint: the word is a character from Greek mythology.</p>
                <p>How to play:</p>
                <ul>
                    <li>A word is chosen randomly.</li>
                    <li>You have to guess the letters of the word.</li>
                    <li>You have 7 chances.</li>
                </ul>
                <p>Project by <a href="https://github.com/Aliloa" target="_blank">Aliloa</a>.</p>
                <button onClick={() => fermer()}>Close</button>
                    </div>
                </div>
            </div>
            );
        }
};
