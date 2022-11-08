import React from 'react'
import {useState} from "react"
import {Form, Label, Control, Button, Input } from 'antd';

function AddFoodForm(props) {

    const [nameInput, setNameInput] = useState()
    const [imageInput, setImageInput] = useState()
    const [caloriesInput, setCaloriesInput] = useState()
    const [servingsInput, setServingsInput] = useState()

    const addFood = (event) => {
        event.preventDefault()

        const foodToAdd = {
            name: nameInput,
            image: imageInput,
            calories: caloriesInput,
            servings: servingsInput
        }
        props.addNewFood(foodToAdd)
    }

    const handleChangeName = (event) => {
        setNameInput(event.target.value)
    }

    const handleChangeImage = (event) => {
        setImageInput(event.target.value)
    }

    const handleChangeCalories = (event) => {
        setCaloriesInput(event.target.value)
    }

    const handleChangeServings = (event) => {
        setServingsInput(event.target.value)
    }
  return (
    <div>

       <h2>Add Food Entry</h2>
 <form>
       <label>Name</label>
       <Input type="text" name="name" value={nameInput} onChange={handleChangeName}/>

      <label>Image</label>
      <Input type="text" name="image" value={imageInput} onChange={handleChangeImage}/>

      <label>Calories</label>
      <Input type="number" name="calories" value={caloriesInput} onChange={handleChangeCalories}/>

      <label>Servings</label>
      <Input type="number" name="servings" value={servingsInput} onChange={handleChangeServings}/>

      <button onClick={addFood}>Create</button>
    </form>
  </div>
  )
}

export default AddFoodForm