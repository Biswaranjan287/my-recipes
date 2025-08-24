import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { recipecontext } from "../context/RecipeContext";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
    const { data, setdata } = useContext(recipecontext)
    const navigate = useNavigate()
    const params = useParams()
    const recipe = data.find((recipe) => params.id == recipe.id)
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            image: recipe?.image,
            title: recipe?.title,
            chef: recipe?.chef,
            description: recipe?.description,
            ingredients: recipe?.ingredients,
            instructions: recipe?.instructions,
            category: recipe?.category
        }
    })

    const updateHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id)
        const copydata = [...data]
        copydata[index] = { ...copydata[index], ...recipe }
        setdata(copydata)
        localStorage.setItem("recipes", JSON.stringify(copydata))
        toast.success('Recipe updated successfully')
    }


    const DeleteHandler = () => {
        const filterdata = data.filter((r) => r.id != params.id)
        setdata(filterdata)
        localStorage.setItem("recipes", JSON.stringify(filterdata))
        toast.success('Recipe deleted successfully')
        navigate('/recipes')
    }


    const [favorite, setfavorite] = useState(
        JSON.parse(localStorage.getItem("favorite")) || []
    )

    const FavHandler = () => {
        let copyfav = [...favorite]
        setfavorite(copyfav)
        copyfav.push(recipe)
        localStorage.setItem("favorite", JSON.stringify(copyfav))
    }

    const UnFavHandler = () => {
        const filteredFav = favorite.filter((f) => f.id != recipe?.id)
        setfavorite(filteredFav)
        localStorage.setItem("favorite", JSON.stringify(filteredFav))
    }

        
    useEffect(() => {
        console.log("singlerecipe mounted")

        return () => {
            console.log("singlerecipe unmounted")
        }
    }, [])

    return recipe ? <div className='w-full flex'>
        <div className='relative left w-1/2 p-2'>
            {favorite.find((f) => f.id == recipe?.id) ? (
                <i
                    onClick={UnFavHandler}
                    className="absolute right-[5%] text-red-500 text-3xl ri-heart-fill"
                ></i>) : (
                <i
                    onClick={FavHandler}
                    className="absolute right-[5%] text-3xl ri-heart-line"
                ></i>)}

            <h1 className='text-3xl font-black'>{recipe.title}</h1>
            <img className='h-[20vh]' src={recipe.image} alt="" />
            <h1>{recipe.chef}</h1>
            <p>{recipe.description}</p>
        </div>

        <form className='w-1/2 p-2' onSubmit={handleSubmit(updateHandler)}>
            <input
                className='block border-b outline-none p-1'
                {...register('image')}
                type="url"
                placeholder="enter image url here"
            />

            <small className='text-red-500'>Error message</small>
            <input
                className='block border-b outline-none p-1'
                {...register('title')}
                type="text"
                placeholder="Recipe Title" />
            <small className='text-red-500'>Error message</small>

            <input
                className='block border-b outline-none p-1'
                {...register('chef')}
                type="text"
                placeholder="Chef Name" />

            <textarea
                className='block border-b outline-none p-1'
                {...register('description')}

                placeholder="//start from here" />
            <small className='text-red-500'>Error message</small>

            <textarea
                className='block border-b outline-none p-1'
                {...register('ingredients')}
                placeholder="//write ingredients separate by comma" />
            <small className='text-red-500'>Error message</small>

            <textarea
                className='block border-b outline-none p-1'
                {...register('instructions')}

                placeholder="//write instructions separate by comma" />
            <small className='text-red-500'>Error message</small>

            <select
                className='block border-b outline-none p-1'
                {...register('category')}
            >
                <option className='text-black' value="Breakfast">Breakfast</option>
                <option className='text-black' value="Lunch">Lunch</option>
                <option className='text-black' value="Supper">Supper</option>
                <option className='text-black' value="Dinner">Dinner</option>
            </select>


            <button className='block mt-5 bg-blue-500 text-white px-4 py-2 font-medium rounded'>Update Recipes</button>
            <button onClick={DeleteHandler} className='block mt-5 bg-red-500 text-white px-4 py-2 font-medium rounded'>Delete Recipes</button>
        </form>

    </div> : "Loading..."

}

export default SingleRecipe