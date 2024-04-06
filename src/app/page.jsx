"use client";

import React from "react";
import { useState, useEffect } from 'react';

import { Mot } from "@/components/mot/Mot";
import { Dessin } from "@/components/dessin/Dessin"
import { Lettres } from "@/components/lettres/Lettres";
import { Langue } from "@/components/langue/langue";
import { Popup } from "@/components/popup/Popup";
import { Aide } from "@/components/aide/Aide";


const Home = () => {
    const [incorrectGuessCount, setIncorrectGuessCount] = useState(0);
    const [bonneLettre, setbonneLettre] = useState();
    const [victoire, setVictoire] = useState(null);
    console.log(incorrectGuessCount);
    console.log('lettre passé:' + bonneLettre)

    return (
        <div>
            <Aide></Aide>
            <Popup incorrectGuessCount={incorrectGuessCount} victoire={victoire} />
            <Langue></Langue>
            <Dessin incorrectGuessCount={incorrectGuessCount} />
            <Mot setVictoire={setVictoire} bonneLettre={bonneLettre} />
            <Lettres setIncorrectGuessCount={setIncorrectGuessCount} setbonneLettre={setbonneLettre} />
        </div>
    );
};

export default Home;