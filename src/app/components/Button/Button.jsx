import React from 'react';
import style from './button.module.css'
import Link from 'next/link';
const Button = ({text,url}) => {
    return (
       <Link href={url}>
            <div className={style.btn}>
           {text}     
            </div>
      </Link>
    );
};

export default Button;