import classNames from 'classnames/bind';
import { useState,useEffect } from 'react';
import Image from 'next/image';
// styles
import styles from './styles.module.scss';

// assets
import { AddImage, TrashFill } from '../../../svgs';

const cx = classNames.bind(styles);

const MainEventImage = ({formData,setFormData}) => {
  const [image, setImage] = useState({ imgSrc: null, imgName: null });

  const handleChange = (event) => {
      setFormData((prev) => {
        return({...prev,eventImage:event.target.files})
      });
 
    const img = event.target.files[0];
    const imgSrc = URL.createObjectURL(img);
    const imgName = img.name;
    setImage({
      imgSrc,
      imgName,
    });
  };

  const removeImage = () => {
    setImage({ imgSrc: null, imgName: null });
    setFormData((prev) => {
      return({...prev,eventImage:''})
    });
  };
  useEffect(() => {

   if(!image.imgSrc && formData.eventImage){
    setImage({
      imgSrc:URL.createObjectURL(formData.eventImage[0]),
      imgName:formData.eventImage[0].name,
    });
   }
  }, [])

  return (
    <div className={cx('main-event-image')}>
      <h2>Main Event Image</h2>
      <p>
        This is the first image attendees will see at the top of your listing.
        Use a high <br /> quality image: 2180x1080px (2:1 ratio).
      </p>
      <div className={cx('image-upload', { 'contains-image': image.imgSrc })}>
        <input type='file' name='image' id='image' onChange={handleChange} />
        <button className={cx('remove-img-btn')} onClick={removeImage}>
          <TrashFill />
        </button>
        <label htmlFor='image'>
          <AddImage />
          <span>Drag & Drop or click to add main event image</span>
          <p>JPG or PNG</p>
        </label>
        <div className={cx('preview-image')}>
          <Image src={ image.imgSrc?image.imgSrc:""} alt={image.imgName} layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default MainEventImage;
