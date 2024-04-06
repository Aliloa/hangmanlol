import React from 'react';
import "./dessin.css";

export const Dessin = ({ incorrectGuessCount }) => {
    return (
        <div>
            <form>
                <div className='container'>
                    <img src={`${incorrectGuessCount}.png`} alt="" />
                </div>
            </form>
        </div>
    );
};
