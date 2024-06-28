import React from 'react';
import style from './blogDetails.module.css'
import Image from 'next/image';
import { notFound } from 'next/navigation';
// import { items } from '@/app/portfolio/[category]/Data';


async function getData(id) {
    const res = await fetch(`http://localhost:3000/blog/api/post`)

    if (!res.ok) {

        return notFound()
    }

    return res.json()
}
export async function generateMetadata({ params }) {
    //  console.log('params:', params)
    const post = await getData(params.id)
    const filter = post.filter(item => item._id === params.id)
    // console.log('filter:', filter[0].title)

    return {
        title: `nahiyanDev / blog/ ${filter[0].title}`,
        description: `Read the latest blog post by nahiyanDev about ${filter[0].description}`,
        
    }
}
const dynamicBlogs = async ({ params }) => {
    const data = await getData(params.id)
    // filter data based on id
    const filter = data.filter(item => item._id === params.id)
    return (
        <>
            {
                filter.map(data => <div key={data._id} className={style.mainContainer}>
                    <div className={style.topContainer}>
                        <div className={style.content}>
                            <h1 className={style.title}>{data.title}</h1>
                            <p className={style.desc}>{data.short_description}</p>
                            <div>
                                <span>
                                    author image and gmail
                                </span>
                            </div>
                        </div>
                        <div className={style.imgContainer}>
                            <Image src={data.img} alt='' fill={true} />
                        </div>
                    </div>
                    <div className={style.bottomContainer}>
                        <p>
                            {data.description}
                        </p>
                    </div>

                </div>)
            }
        </>
    );
};

export default dynamicBlogs;

