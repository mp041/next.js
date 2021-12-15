// import React from 'react'
import styles from "../../styles/Home.module.css";
import Image from 'next/image';
import Head from 'next/head';


const Home = () => {
  return (
    <div className = {styles.container}>
    <Head>
    <title>
    Blog Page
    </title>
    </Head>
    <h1 className={styles.homepage}> Welcome, To Homepage!!! </h1>
    <Image src="/demo1.png" height="400" width="600"></Image>

    </div>
  )
}

export default Home
