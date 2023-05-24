// import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// Styles
import './Home.css'

// Components
import RecipeList from '../../components/RecipeList'

export default function Home() {
  const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes')

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}
