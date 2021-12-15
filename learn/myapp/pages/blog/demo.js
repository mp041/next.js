// import React from 'react'
import styles from "../../styles/Home.module.css";
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const data = await res.json();
  // console.log(data, "dataaaa");
  return {props: {
      data
    }};
};

const Demo = ({
  data
}) => {
  return (
    <>
    <div style = {{textAlign : "center", display : "flex"}} > {
    data.slice(0,5).map((curEle) => {
      return (

        <div class="card container my-5" style={{width: "18rem"}}>
        <Image class="card-img-top" src="/user.png" width="300" height="300" alt="Card image cap"></Image>
          <div class="card-body">
            <h5 class="card-title">{curEle.name}</h5>
            <p class="card-text">{curEle.username}</p>
            <Link href={`/blog/${curEle.id}`}>
            <a class="btn btn-primary">Demo</a>
            </Link>
          </div>
        </div>

        ) }) }
      </div>
    </>
    )
}

export default Demo
