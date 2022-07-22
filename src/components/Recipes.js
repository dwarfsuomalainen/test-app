import Recipe from "./Recipe"

const Recipes = ({recipes}) => {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe)=>(
          <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

export default Recipes
