// import React from 'react'
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Head from 'next/head';


const About = () => {
  return (


    <div className={styles.container} >

    <Head>
    <title> About Page </title>
    </Head>
    <h1 className= {styles.homepage}>
    This is about page
    </h1>

    <Image src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" width="800" height="400" >
    </Image>
    </div>
  )
}

export default About
