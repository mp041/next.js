import React from "react";
import {useSelector } from 'react-redux';
import FeatureProduct from "./FeatureProduct";

export default function OurTeamContainer(){
  console.log("hellloooow")
  const oneProduct  = useSelector((state) => state.oneProduct)
  console.log(oneProduct,"Product_container");
  return <FeatureProduct oneProduct={oneProduct} />
}
