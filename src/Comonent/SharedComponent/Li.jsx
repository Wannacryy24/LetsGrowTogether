import React from 'react';

export default function Li({ item, className , onClick}) {
    return (
        <li className={`${className}-li`} onClick={onClick}>
            {item}
        </li>
    );
}
