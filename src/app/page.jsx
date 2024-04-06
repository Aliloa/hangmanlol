"use client";

import React from "react";
import { useState, useEffect } from 'react';

import { Mot } from "@/components/mot/Mot";
import { Dessin } from "@/components/dessin/Dessin"
import { Lettres } from "@/components/lettres/Lettres";


const Home = () => {
    const [incorrectGuessCount, setIncorrectGuessCount] = useState(0);
    const [bonneLettre, setbonneLettre] = useState();
    console.log(incorrectGuessCount);
    console.log('lettre passé:' + bonneLettre)

    return (
        <div>
            <Dessin incorrectGuessCount={incorrectGuessCount} />
            <Mot bonneLettre={bonneLettre} />
            <Lettres setIncorrectGuessCount={setIncorrectGuessCount} setbonneLettre={setbonneLettre} />
        </div>
    );
};

export default Home;