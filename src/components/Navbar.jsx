import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex p-2 sticky top-0 z-99 items-center justify-center rounded-2xl bg-stone-900 font-medium gap-x-15 text-xl mb-10 ">
      <NavLink className={(e) => e.isActive ? "text-stone-400" : ""} to={"/"}>Home</NavLink>
      <NavLink className={(e) => e.isActive ? "text-stone-400" : ""} to={"/recipes"}>Recipes</NavLink>
      <NavLink className={(e) => e.isActive ? "text-stone-400" : ""} to={"/about"}>About</NavLink>
      <NavLink className={(e) => e.isActive ? "text-stone-400" : ""} to={"/create-recipes"}>Create Recipes</NavLink>
      <NavLink className={(e) => e.isActive ? "text-stone-400" : ""} to={"/favorites"}>Favorites</NavLink>
    </div>
  )
}

export default Navbar