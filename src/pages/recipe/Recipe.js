import { useParams, useNavigate } from "react-router-dom" 
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from "react"

// Styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { error, isPending, data: recipe } = useFetch(url)
  const navigate = useNavigate()

  useEffect(() => {
    if(error) {
        // Redirecionar usuário
    setTimeout(() => navigate("/"), 2000) 
    }
  }, [error, navigate])
  
  return (
    <div className="recipe">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading recipe...</p>}
        {/* usar parentesis quando quiser retornar uma template mais complexa */}
        {recipe && (
          <>
            <h2 className="page-title">{recipe.title}</h2>
            <p>Cooking time: {recipe.cookingTime}</p>
            <ul>
              {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
            <p className="method">{recipe.method}</p>
          </>
        )}
    </div>
  )
}
