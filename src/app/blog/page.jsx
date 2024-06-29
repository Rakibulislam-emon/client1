import React from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';
export const metadata = {
    title: "nahiyanDev / blogPage",
    description: "blog page",
  };
async function getData() {
    const res = await fetch('http://localhost:3000/blog/api/post')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const blog = async () => {
    const blogs = await getData()
    // filter data  1 to 10 only
    //   const data = blogs.filter(item => item.id <= 10)
    
    //   console.log('newData:', data)
    
    return (
        <div className='contain'>
            {blogs.map(item => (
                <div key={item.id} className={styles.container}>
                    <Link href={`/blog/${item._id}`} className={styles.container} key={'item._id'}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={item.img}
                                alt=""
                                width={400}
                                height={250}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>{item.description.split(' ').slice(0,50).join(' ')}</p>
                        </div>
                    </Link>
                </div>
            ))
            }

        </div>
    );
};

export default blog;