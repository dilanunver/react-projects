import React, { useState } from 'react';
import data from './data'
import Categories from './Categories';
import Menu from './Menu';

const App = () => {
  const [foods, setFoods] = useState(data);
  const [restFoods, setRestFoods] = useState(data)
  console.log(restFoods)

  const all = () => {
    setFoods(restFoods)
  }
  const breakfast = () => {
    const newBreakfast = restFoods.filter(item => item.category === 'breakfast');
    setFoods(newBreakfast)
  }
  const lunch = () => {
    const newLunch = restFoods.filter(item => item.category === 'lunch');
    setFoods(newLunch)
  }
  const shakes = () => {
    const newShakes = restFoods.filter(item => item.category === 'shakes');
    setFoods(newShakes)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories all={all} breakfast={breakfast} lunch={lunch} shakes={shakes} ></Categories>
        {foods.map((food) => <Menu {...food} ></Menu>
        )}
      </section>
    </main>
  )
}









export default App