import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Button from '../components/Button/Button';
const contact = () => {
   
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>
                Lets keep in touch
            </h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image fill={true} src='/contact.png' alt='' className={styles.img} />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="name" className={styles.input} />
                    <input type="text" placeholder="email" className={styles.input} />
                    <textarea
                        className={styles.textArea}
                        placeholder="message"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    );
};

export default contact;