import React from 'react';
import clsx from 'clsx';
import './Button.css';

export function Button({
    text,
    auxClass = '',
}) {
    return (
        <div
            className={clsx(['Button', auxClass])}
        >
            {text}
        </div>
    );
}
