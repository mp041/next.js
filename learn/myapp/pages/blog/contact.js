// import React from 'react'
import styles from "../../styles/Home.module.css";
import Head from 'next/head';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={styles.container}>
    <Head>
    <title> Contact Page </title>
    </Head>


    <h1 className={styles.homepage}>
    This is contact page
    </h1>

    <Image src="https://images.pexels.com/photos/263564/pexels-photo-263564.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" width="800" height="400" >
    </Image>
    </div>
  )
}

export default Contact
