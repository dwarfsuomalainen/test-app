function Recipe({recipe}) {
  return (
    <div>
        <p className={recipe.vege ? 'vege':''}>{recipe.name}</p>
    </div>
  )
}

export default Recipe
