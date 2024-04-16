import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ name, onClick, navigate, redirect = false, disable }) => {
    const navigateTo = useNavigate();
    return (
        <button
            className='w-64 
                p-2 border-2
                flex items-center
                justify-center
                rounded-xl
                hover:border-blue-400'
            onClick={redirect ? () => navigateTo(navigate) : onClick}
            disabled={disable}
        >
            {name}
        </button>
    );
};

export default Button;
