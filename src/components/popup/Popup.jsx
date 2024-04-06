import React from 'react';
import "./popup.css";

export const Popup = ({ incorrectGuessCount, victoire }) => {

    const newGame = () => {
        window.location.reload();
    };

    if (incorrectGuessCount === 7) {
        if(localStorage.langue === "fr-FR") {
        return (
            <div className='popup'>
                <div className='perdu'>
                    <p>Oh non! Vous avez perdu</p>
                    <img src="loser.png" alt="" />
                    <button onClick={() => newGame()}>Essayer de nouveau</button>
                </div>
            </div>
        );
        } else {
            return (
                <div className='popup'>
                    <div className='perdu'>
                        <p>Oh non! You lost</p>
                        <img src="loser.png" alt="" />
                        <button onClick={() => newGame()}>Try again</button>
                    </div>
                </div>
            );
        }
    } else if(victoire === true){
        if(localStorage.langue === "fr-FR") {
            return (
                <div className='popup'>
                    <div className='gagne'>
                        <p>Wow! Bien joué!!</p>
                        <img src="win.png" alt="" />
                        <button onClick={() => newGame()}>Jouer encore</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='popup'>
                    <div className='gagne'>
                        <p>Wow! GG!!</p>
                        <img src="win.png" alt="" />
                        <button onClick={() => newGame()}>Play again</button>
                    </div>
                </div>
            );
        }
    } else {
        return null;
    }
};
