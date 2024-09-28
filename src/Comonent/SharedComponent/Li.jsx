import React from 'react';

export default function Li({ item, className }) {
    return (
        <li className={`${className}-li`}>
            {item}
        </li>
    );
}
