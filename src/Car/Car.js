import React from "react";

/**
 * Простой компонент без стейта
 */

export default props => (
  <div
    style={{
      border: "1px solid #ccc",
      marginBottom: "10px",
      padding: "10px",
      display: "block"
    }}
  >
    <h3>Car: {props.name}</h3>
    <strong>Year: {props.year}</strong>
    <input type="text" onChange={props.onChangeName} value={props.name} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
);
