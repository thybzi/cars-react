import React from 'react';
import clsx from 'clsx';
import './Icon.css';

export function Icon({
    name,
    auxClass = '',
}) {
    return (
        <div
            className={clsx([
                'Icon',
                `Icon_${name}`,
                auxClass,
            ])}
        />
    );
}
