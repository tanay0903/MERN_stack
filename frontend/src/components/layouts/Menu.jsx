import React from 'react'
import FoodItem from './FoodItem'

export default function Menu() {
  return (
    <div>
      <div>
        <h2>Italian</h2>
        <hr />
        <div className="row">
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
        </div>
      </div>

      <hr />

      <div>
        <h2>Indian</h2>
        <hr />
        <div className="row">
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
        </div>
      </div>

      <hr />

      <div>
        <h2>Chinese</h2>
        <hr />
        <div className="row">
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
        </div>
      </div>
    </div>
  )
}
