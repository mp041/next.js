import React from "react";
import {useSelector } from 'react-redux';
import Blog from "./Blog";

export default function OurBlogContainer(){
  console.log("hellloooow")
  const oneBlog  = useSelector((state) => state.oneBlog)
  console.log(oneBlog,"blog`_container");
  return <Blog oneBlog={oneBlog} />
}
