// libraries
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { LightBox } from 'components';
// styles
import styles from './EventPictures.module.scss';
const cx = classNames.bind(styles);

const EventPictures = ({ data }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);


  
  const[showAll,setShowAll]=useState(false)
 
  const eventPictures = [];
  const Images=[]

  data.ImageUrls.forEach((element) => {
    eventPictures.push({ img: element, id: 0 });
    Images.push(element)
  });
  const NumberOfImages=eventPictures.length
  

  return (
    <div className={cx('event-pictures')}>
      <div className={cx('pictures-head')}>
        <h1>Event Pictures</h1>
        <p>See all</p>
      </div>
      <div className={cx('event-imgs-parent')}>
        {!showAll&& eventPictures.map((item, ind) => (
        ind!==3? ind<4&&
          <div className={cx('event-pic')} key={ind} onClick={()=>{setLightboxOpen(true)}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src={item.img} alt='event picture'  width="100%" height="100%" loader={()=>(item.img)}/>
          </div>
         : NumberOfImages>3&&
          <div className={cx('event-pic',NumberOfImages>4?'show-all':'')} key={ind} onClick={()=>{setLightboxOpen(true)}}>
            {NumberOfImages>4 && <div className={cx('more-images')}>
              <h2>{NumberOfImages-4}+</h2>
             <p>More photos from this event</p>
            </div>}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src={item.img} alt='event picture'  width="100%" height="100%" loader={()=>(item.img)}/>
          </div>
        ))}
         {showAll && eventPictures.map((item, ind) => (
      
          <div className={cx('event-pic')} key={ind}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src={item.img} alt='event picture'  width="100%" height="100%" loader={()=>(item.img)}/>
          </div>
          
        ))}
      </div>
      <LightBox
        images={Images}
        isOpen={lightboxOpen}
        setIsOpen={setLightboxOpen}
      />
    </div>
  );
};

export default EventPictures;
