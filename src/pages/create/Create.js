import { useEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

// Styles
import './Create.css'


export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const navigate = useNavigate()

  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
  }

  const handleDelete = (i) => { 
    setIngredients(
      ingredients.filter(a => a !== i)
    )
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  // redirect user when data is not null
  useEffect(() => {
    if(data) {
        // Redirecionar usuário
      navigate("/")
    }
  }, [data, navigate])
  
  return (
    <div className="create">
        <h2 className="page-title">Add a New Recipe</h2>
        
        <form onSubmit={handleSubmit}>
          <label>
            <span>Recipe title:</span>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>

          <label>
            <span>Recipe ingredients: </span>
            <div className="ingredients">
              <input
                type="text"
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                ref={ingredientInput}
              />
              <button onClick={handleAdd} className="btn">add</button>
            </div>
          </label>

          <div className="ingredient-list">Current ingredients:
              {ingredients.map(i =>
              // <p className="ingredient" key={i}> {i} x </p>
              <p className="ingredient" key={i}> {i} <button className='ing-btn' onClick={() => handleDelete(i)}>x</button></p>
              )} 
          </div>
          

          <label>
            <span>Recipe method:</span>
            <textarea 
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
          </label>
          <label>
            <span>Cooking time (minutes):</span>
            <input
              type="number"
              onChange={(e) => setCookingTime(e.target.value)}
              value={cookingTime}
              required
            />
          </label>
          
          <div className="sub-div">
            <button>submit</button>
          </div>
        </form>
    </div>
  )
}
