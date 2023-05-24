import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// Page components
import Navbar from './components/Navbar' 
import Home from './pages/home/Home'
import Create from './pages/create/Create' 
import Search from './pages/search/Search' 
import Recipe from './pages/recipe/Recipe'
 

// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />}/>
          {/* redireciona caso url inexistente e limpa url */}
          <Route path="*" element={<Navigate replace to="/" />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
