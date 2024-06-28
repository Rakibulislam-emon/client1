import React from 'react';
import style from './page.module.css'
import Image from 'next/image';
import Button from '../components/Button/Button';

const about = () => {
   const img = 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
   return (
      <div className={style.container}>
         <div className={style.imgContainer}>
            <Image alt='' fill={true} src={img} className={style.img} />
            <div className={style.imgText}>
               <h1 className={style.imgTitle}>Digital Storytellers</h1>
               <h2 className={style.imgDesc}>
                  Handcrafting award winning digital experiences
               </h2>
            </div>
         </div>
         {/* items */}
         <div className={style.textContainer}>
            <div className={style.item}>
               <h1 className={style.title}>Who Are We?</h1>
               <p className={style.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                  suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                  eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                  beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                  <br />
                  <br />
                  voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                  esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                  officiis voluptatum quo ea eveniet?
               </p>
            </div>
            <div className={style.item}>
               <h1 className={style.title}>What We Do?</h1>
               <p className={style.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                  suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                  eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                  Creative Illustrations
                  <br />
                  <br /> - Dynamic Websites
                  <br />
                  <br /> - Fast and Handy
                  <br />
                  <br /> - Mobile Apps
               </p>
               <Button text={'Contact'} url={'/contact'}/>
            </div>
         </div>
      </div>
   );
};

export default about;