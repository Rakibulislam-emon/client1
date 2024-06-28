import React, { useContext } from 'react';
import style from './DarkMode.module.css';
import { ThemeContext } from '../../../context/ThemeContex';
const DarkMode = () => {
    const { toggle, mode } = useContext(ThemeContext)

    return (
        <div className={style.container} onClick={toggle}>
            <div className={style.icon}>🌙</div>
            <div className={style.icon}>☀️</div>
            <div
                style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
                className={style.ball}></div>
        </div>
    );
};

export default DarkMode;