import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from '../components/Layout/components/Slider/Slider';
// import ShopCategory from '../components/Layout/components/ShopCategory.js/ShopCategory'
// import FeatureProduct from '../components/Layout/components/FeatureProducts/FeatureProduct';
// import Blog from "../components/Layout/components/Blog/Blog";
import dynamic from 'next/dynamic'

const ShopCategory = dynamic(() => import('../components/Layout/components/ShopCategory.js/ShopCategories.container'),{ loading: () => <p>...</p>,ssr: false })

const FeatureProduct = dynamic(() => import('../components/Layout/components/FeatureProducts/OneProduct.container'),{ loading: () => <p>...</p>,ssr: false })

const Blog = dynamic(() => import('../components/Layout/components/Blog/OneBlog.container'),{ loading: () => <p>...</p>,ssr: false })


export default function Home() {
  return (
    <>
    <Slider />
    <ShopCategory />
    <FeatureProduct />
    <Blog />
    </>
  )
}
