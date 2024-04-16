import React from 'react';

const TextArea = ({ placeholder, value, onChange, disabled }) => {
    return (
        <textarea
            className='resize-none 
                    w-2/3 h-40 p-2
                    border-2 border-gray-300
                    rounded-lg shadow-md
                    focus:outline-none focus:ring-2 focus:ring-blue-300'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
};

export default TextArea;
