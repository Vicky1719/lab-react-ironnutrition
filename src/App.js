import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import foods from './foods.json';
import FoodBox from './componentes/FoodBox';
import AddFoodForm from './componentes/AddFoodForm';
import Search from './componentes/Search';

function App() {

  const [foodList, setFoodList] = useState(foods)
  const [showFoodList, setShowFoodList] = useState(foods)

  const addFood = (newFood) => {

    const copy = [...foodList]
    copy.unshift(newFood)
    setFoodList(copy)

    const copy2 = [...showFoodList]
    copy2.push(newFood)
    setShowFoodList(copy2)
  }


  const filterFoodList = (filterQuery) => {

    const filteredArr = foodList.filter((eachFood) => {
           return eachFood.name.includes(filterQuery)

    })
    setShowFoodList(filteredArr)
  }


  return (
    <div className="App">
      <h1>Food List</h1>
      <div>
        <AddFoodForm
          addNewFood={addFood}
          setFoodList={setFoodList}
        />
      </div>

      <hr />
      <Search filterFoodList={filterFoodList} />
      <hr />

      <div>

        {showFoodList.map((food, index) => {
          return (
            <FoodBox
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
              
            />

          )
        })}
      </div>

    </div>
  )
}

export default App
