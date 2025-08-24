import { useForm } from 'react-hook-form'
import {nanoid} from 'nanoid'
import { useContext } from 'react'
import {recipecontext} from '../context/RecipeContext'
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate()

  const {data, setdata} = useContext(recipecontext)
  
  const { register, handleSubmit, reset } = useForm()

  const submitHandler = (recipe) => {
    recipe.id = nanoid()
    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata)
    localStorage.setItem("recipes", JSON.stringify(copydata))
    toast.success("new recipe added")
    reset()
    navigate("/recipes")
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}
    className='flex flex-col gap-y-3 w-1/2 mx-auto text-stone-950 text-xl font-normal rounded-2xl bg-stone-300 p-4' 
    >
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
        

      <button className='block mt-5 bg-blue-500 text-white px-4 py-2 font-medium rounded'>Save Recipes</button>
    </form>
  )
}

export default Create;