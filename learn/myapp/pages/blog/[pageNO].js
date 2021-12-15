// import React from 'react'
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

export const getStaticPaths = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const data = await res.json();

  const paths = data.map((curEle) => {
    return {
      params : {
        pageNO : curEle.id.toString()
      },
    }
  });
  return {
    paths,
    fallback : false,

  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNO;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  // console.log(data, "pagenoooo");
  return {props: {
      data,
    }};
};

const blog = ({data = []}) => {
  // const {ID, name, tags} = data;
  const router = useRouter();
  const pageNum = router.query.pageNO;
  // console.log(pageNum)
  // console.log(router)

  return <>
    <Head>
    <title> {pageNum} </title>
    </Head>
    <div className={styles.container}>

      <h3>{data.id}</h3>
      <h2>{data.name}</h2>
      <p>{data.username}</p>
      <p>{data.address.street}</p>
      <p>{data.website}</p>
    </div>


   </>;
};

export default blog;
//
// <Image src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" width="800" height="400" >
// </Image>
// <h1 className = {styles.container}> My Page No {pageNum} </h1>
