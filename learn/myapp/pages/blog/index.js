// import React from 'react'
import styles from "../../styles/Home.module.css";
// import Head from "next/head";
import Link from "next/link";
// import Badge from "react-bootstrap/Badge";
// import Image from 'next/image';
import Head from 'next/head';


const blog = () => {
  return (
    <>

      <Head>
      <title>
      Home Page
       </title>
      </Head>
      <div className = {styles.container}>
      <h1>Home page</h1>
      </div>

    </>
  );
};
export default blog;
