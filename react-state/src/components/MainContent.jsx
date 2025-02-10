import React from "react"
import { useState } from "react"

function MainContent(){
    const [ingredients, setIngredients] = useState([])
    
    const ingredientsListItems= ingredients.map((ing) => (
        <li key={ingredients}>{ing}</li>
    ))

    function addIngredient(formData){
        const newIngredient =  formData.get("ingredient")
        setIngredients(prev => [...prev,newIngredient])
    }

    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-lable="Add ingredient"
                    name="ingredient"
                />
                <button> Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}

export default MainContent