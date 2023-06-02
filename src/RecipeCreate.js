import React, { useState } from "react";
import "./App.css";

function RecipeCreate({ create }) {
    const initialFormData = {
        name: "",
        cuisine: "",
        photo: "",
        ingredients: "",
        preparation: "",
    };

    const [formData, newFormData] = useState(initialFormData);

    // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
    // TODO: Add the required input and textarea form elements.
    // TODO: Add the required submit and change handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        create(formData);

        newFormData(initialFormData);
    };

    const handleChange = ({ target }) => {
        newFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <form name="create" onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                id="cuisine"
                                type="text"
                                name="cuisine"
                                placeholder="Cuisine"
                                value={formData.cuisine}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                id="photo"
                                type="url"
                                name="photo"
                                placeholder="URL"
                                value={formData.photo}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <textarea
                                id="ingredients"
                                name="ingredients"
                                placeholder="Ingredients"
                                value={formData.ingredients}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <textarea
                                id="preparation"
                                name="preparation"
                                placeholder="Preparation"
                                value={formData.preparation}
                                onChange={handleChange}
                            />
                        </td>

                        <td>
                            <button type="submit">Create</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default RecipeCreate;
