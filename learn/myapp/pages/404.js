// import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';



const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    },5000)
  },[])

  return (
    <>
    <div className = {styles.container}>
    <div class= {styles.loader}> </div>
    <br />

    <h1>404</h1>
    <p>Page Not Found</p>
    <button className="btn btn-danger">Homepage</button>

    </div>
    </>
  )
}

export default ErrorPage
