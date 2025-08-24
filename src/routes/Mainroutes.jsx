import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'
import SingleRecipe from "../pages/SingleRecipe";
import Pagenotfound from '../pages/Pagenotfound'
import Fav from '../pages/Fav'


const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/detail/:id" element={<SingleRecipe />} />
      <Route path="/create-recipes" element={<Create />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorites" element={<Fav />} />
      <Route path="/*" element={<Pagenotfound />} />
    </Routes>
  )
}

export default Mainroutes