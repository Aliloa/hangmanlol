import React, { useState } from 'react';
import "./lettres.css";

export const Lettres = ({ setIncorrectGuessCount, setbonneLettre }) => {
    const [disabledButtons, setDisabledButtons] = useState([]);

    const handleClick = (letter) => {
        event.preventDefault();
        var mot = localStorage.getItem('mot');
        console.log(mot);
        if (mot.includes(letter)) {
            console.log(`La lettre ${letter} est correcte !`);
            setbonneLettre(letter);
        } else {
            console.log(`La lettre ${letter} n'est pas correcte !`);
            setIncorrectGuessCount(prevCount => prevCount + 1); // Nombre de tentatives
        }
        setDisabledButtons(prevDisabledButtons => [...prevDisabledButtons, letter]); // Désactive bouton
    };

    const renderAlphabetButtons = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-';
        return alphabet.split('').map(letter => (
            <button key={letter} onClick={() => handleClick(letter)} disabled={disabledButtons.includes(letter)}>
                {letter}
            </button>
        ));
    };

    return (
        <div className='container-lettres'>
            <form>
                    {renderAlphabetButtons()}
            </form>
        </div>
    );
};
