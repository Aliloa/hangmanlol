import React from 'react';
import "./langue.css";

export const Langue = () => {
    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            console.log('FRANCAIS');
            localStorage.setItem('langue', 'fr-FR');
        } else {
            console.log('ANGLAIS^^');
            localStorage.setItem('langue', 'en-GB');
        }
        window.location.reload();
    };

    return (
        <div>
        <label className="switch">
        <input type="checkbox" onChange={handleCheckboxChange} checked={localStorage.getItem('langue') === 'fr-FR'} />
        <div className="slider">
            <span>ENG</span>
            <span>FR</span>
        </div>
    </label>
    </div>
    );
};
