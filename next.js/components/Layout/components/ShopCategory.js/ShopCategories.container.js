import React from 'react'
import ShopCategory from './ShopCategory';
import { useSelector } from 'react-redux'


export default function ShopCategoriesContainer() {
  const shopCategoryArr = useSelector((state) => state.shopCategory)
  console.log(shopCategoryArr,"hello_container ")
  return <ShopCategory categories = {shopCategoryArr} />;
}
