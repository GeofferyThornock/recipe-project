import React from "react";
import "./App.css";

function Recipe({
    name,
    cuisine,
    photo,
    ingredients,
    preparation,
    btn,
    index,
}) {
    return (
        <tr>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td>
                <img alt="food item" src={photo} />
            </td>
            <td className="content_td">
                <p>{ingredients}</p>
            </td>
            <td className="content_td">
                <p>{preparation}</p>
            </td>
            <td>
                <button name="delete" onClick={() => btn(index)}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default Recipe;
