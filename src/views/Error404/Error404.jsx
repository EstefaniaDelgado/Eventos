import React from 'react'
import styles from './Error404.module.css'
import { useRouteError } from 'react-router-dom';

const Error404 = () => {
    const error =useRouteError();
    console.log(error);
    
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Ops! {error.status}</h3>
        <p className={styles.description}> {error.data}</p>
      </div>
    )
}

export default Error404
