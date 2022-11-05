import React from 'react';
import { PacmanLoader } from "react-spinners";

const override = {
    position: 'absolute',
    top: '40%',
    left: '40%',
};

function Spinner() {
    return (
        <PacmanLoader
            className="spinner" color={'#626b69'} cssOverride={override} size={80} />
    )
}

export default Spinner;