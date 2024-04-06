"use client";
import { useEffect, useState } from "react";
import "./mot.css";
import Link from "next/link";

const API = "https://node-hangman-api-production.up.railway.app/";

export const Mot = ({bonneLettre, setVictoire}) => {
    const [displayedWord, setDisplayedWord] = useState(null);

    const sendRequest = async () => {
        try {

            const requestBody = new URLSearchParams();

            const langue = localStorage.getItem('langue');
            if (langue) {
                requestBody.append('locale', langue);
            }
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: requestBody
            };

            const res = await fetch(API, requestOptions);
            const data = await res.json();
            var word = data.word.toUpperCase();
            localStorage.setItem('mot', word);
            setDisplayedWord('_'.repeat(word.length).split('').join('')); // Ajoute des espaces entre les underscores
        } catch (error) {
            console.error('Erreur lors de la requête :', error);
        }
    };

    // Appelle la fonction sendRequest lorsque le composant est monté
    useEffect(() => {
        sendRequest();
    }, []);

    useEffect(() => {
        if (bonneLettre && displayedWord) {
            const wordInStorage = localStorage.getItem('mot');
            const wordArray = wordInStorage.split('');
            const newDisplayedWord = displayedWord.split('').map((char, index) => {
                if (wordArray[index] === bonneLettre) {
                    return bonneLettre;
                }
                return char;
            }).join('');
            setDisplayedWord(newDisplayedWord);
            if (newDisplayedWord === wordInStorage) {
                setVictoire(true);
            }
        }
    }, [bonneLettre, displayedWord]);

    return (
        <div className="container">
            {displayedWord ? (
                <p className="mot"><strong>{displayedWord}</strong></p>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};