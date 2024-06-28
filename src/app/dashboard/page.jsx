"use client"
import React from 'react';
import style from "./page.module.css"
import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const session = useSession()
    console.log('session:', session)

    return (
        <div>
            Dashboard
        </div>
    );
};

export default Dashboard;