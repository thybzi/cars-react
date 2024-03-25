import React from 'react';
import './Button.css';

export function Button({
    text,
    auxClass = '',
}) {
    return (
        <div
            className={'Button ' + auxClass}
        >
            {text}
        </div>
    );
}
