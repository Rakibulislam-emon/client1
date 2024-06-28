import React from 'react'
import style from './category.module.css'
import Button from '@/app/components/Button/Button'
import Image from 'next/image'
import { items } from './Data'
import { notFound } from 'next/navigation'

const getData = async (category) => {
  const data = items[category]
  if (data) {
    return data
  }
  notFound()
}

const category = async ({ params }) => {
  const data = await getData(params.category)
  return (
    <div className={style.container}>
      <h1 className={style.title}>{params.category}</h1>
      {
        data.map(item => (
          <div key={item.id} className={style.items} >
            <div className={style.content}>
              <h1 className={style.subTitle}>{item.title}</h1>
              <p className={style.desc}>{item.desc}
              </p>
              <Button text={'See More'} url={'#'} />
            </div>
            <div className={style.imgContainer}>
              <Image src={item?.image} alt='' fill={true} />
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default category