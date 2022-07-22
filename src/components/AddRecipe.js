import { useState } from "react"

function AddRecipe({ onAdd }) {
    const[text, setText] = useState('')
    const[vege, setVege] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({name: text, vege})
        
        setText("")
        setVege(false)

    }
  
    return (
    <div>
        <form onSubmit={onSubmit}>
            <label>Recipe</label>
            <textarea placeholder="Add recipe" onChange={(e) => setText(e.target.value)} value={text}></textarea>
            <label for="vege"><input id="vege" name="vege" type="checkbox" 
            onChange={(e) => setVege(e.currentTarget.checked)} checked = {vege} /> <span>Vegetarian</span> </label>
            <input type="submit" value="Add recipe"></input>
        </form>
    </div>
  )
}

export default AddRecipe
