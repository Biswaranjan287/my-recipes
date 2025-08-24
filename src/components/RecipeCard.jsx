import { Link } from "react-router-dom"

const RecipeCard = (props) => {

    const { id, image, title, chef, description } = props.recipe

    return (
        <Link
            to={`/recipes/detail/${id}`}
            className="duration-150 hover:scale-102 bg-stone-300 text-stone-950 mr-6 mb-3 block w-[20vw] rounded overflow-hidden shadow-xl/30 p-1">
            <img className="object-cover w-full h-[30vh] rounded" src={image} alt="" />
            <h1 className="p-2 mt-2 text-3xl  font-bold">{title}</h1>
            <small className="px-2 text-2xl text-red-500 font-medium">{chef}</small>
            <p className="px-2 pb-3">{description.slice(0, 100)}...<small className="text-blue-600 font-normal">more</small></p>
        </Link>

    )
}

export default RecipeCard