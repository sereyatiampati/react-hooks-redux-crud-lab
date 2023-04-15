import React, { useState } from "react";
// import Reviews from "./Reviews";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";


function ReviewInput({restaurantId}) {
  const [comment, setComment] = useState("")
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = {comment: comment, restaurant: restaurantId}
    dispatch(reviewAdded(newReview))
    setComment("")
  }
  return (<>
  <form onSubmit={handleSubmit}>
    <label>comment</label>
      <textarea name="comment" value={comment} onChange={(e)=> setComment(e.target.value)}></textarea>
      <input type="submit"/>
  </form>
  </>)
}

export default ReviewInput;
