import { useNoScroll } from 'hooks';
import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox-next';

const LightBox = ({ images, isOpen, setIsOpen }) => {
  const [index, setIndex] = useState(0);
  const [_images, _setImages] = useState([...(images || [])]);
  useNoScroll(isOpen);

  useEffect(() => {
    _setImages([...(images || [])]);
    return () => _setImages([]);
  }, [images]);

  if (!images) return null;

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={_images[index]}
          nextSrc={_images[(index + 1) % _images?.length]}
          prevSrc={_images[(index + _images.length - 1) % _images?.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            setIndex((index) => {
              return (index + _images?.length - 1) % _images?.length;
            });
          }}
          onMoveNextRequest={() => {
            setIndex((index) => {
              return (index + 1) % _images?.length;
            });
          }}
        />
      )}
    </>
  );
};

export default LightBox;
