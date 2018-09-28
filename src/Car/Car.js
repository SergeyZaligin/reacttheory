import React from 'react';

/**
 * Простой компонент без стейта
 */

export default props => (
    <div>
        <h3>Car: { props.name }</h3>
        <strong>Year: { props.year }</strong>  
    </div>
);