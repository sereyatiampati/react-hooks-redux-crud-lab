import React from "react";
import Review from "./Review";
import { useSelector } from "react-redux";


function Reviews({restaurantId}) {
  const reviews = useSelector(state => state.reviews.entities)
  const restaurantReviews = reviews.filter(review=> review.restaurantId === restaurantId)
  return <ul>{restaurantReviews.map(review=> <Review key={review.id} review={review}/>)}</ul>;
}

export default Reviews;
