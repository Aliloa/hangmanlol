import React from 'react';

export const Dessin = ({ incorrectGuessCount }) => {
    return (
        <div>
            <h2>Sélectionnez une lettre :</h2>
            <form>
                <div>
                    Erreur number {incorrectGuessCount}
                </div>
            </form>
        </div>
    );
};
