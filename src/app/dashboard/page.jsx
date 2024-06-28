"use client"
import React from 'react';
import style from "./page.module.css";
import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const session = useSession();
    console.log('session:', session);

    // Use optional chaining and conditional destructuring
    const email = session?.data?.user?.email || 'not found';

    return (
        <div className={style.dashboard}>
            Dashboard
            <p>{email}</p>
        </div>
    );
};

export default Dashboard;
