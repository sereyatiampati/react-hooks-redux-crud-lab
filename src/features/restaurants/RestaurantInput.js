import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {
  const [name, setName]= useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(restaurantAdded(name))
    setName("")
  }
  return(
    <form onSubmit={handleSubmit}>
    <label>name</label>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
      <button type="submit">Add Restaurant</button>
  </form>
  )
};

export default RestaurantInput;
