import './App.css';
import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';
import {useState} from "react"

function App() {
  const [recipes, setRecipes] = useState([{
    "id": 1,
    "name": "Pasta",
    "vege": true
  },
  {
    "id": 2,
    "name": "Pizza",
    "vege": false 
  }

])
 
const addRecipe = (recipe) => {
  const id = Math.floor(Math.random()*1000000 + 1000)
  const newRecipe = {id, ...recipe}
  setRecipes([...recipes, newRecipe])
}
  
  
  return (
    <div className="App">
      <Recipes recipes={recipes}/>
      <AddRecipe onAdd={addRecipe} />
    </div>
  );
}

export default App;
