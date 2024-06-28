import React from 'react';
import style from './page.module.css'
import Image from 'next/image';
const Footer = () => {
    return (
        <div className={style.container}>
               <div>©2024 Nahiyan . All rights reserved.</div>
               <div className={style.social}>
                <Image className={style.icons} src='/1.png' alt='/1.png' width={15} height={15}/>
                <Image className={style.icons} src='/2.png' alt='/2.png' width={15} height={15}/>
                <Image className={style.icons} src='/3.png' alt='/3.png' width={15} height={15}/>
                <Image className={style.icons} src='/4.png' alt='/4.png' width={15} height={15}/>
               </div>
        </div>
    );
};

export default Footer;