import React, { useEffect, useState } from 'react';
import styles from './Description.module.scss';

const limit = { DESKTOP: 580, MOBILE: 200 };

const Description = ({ id, description }) => {
  const [text, setText] = useState(null);
  const [seeMore, setSeeMore] = useState(false);
  const [isTrim, setIsTrim] = useState(false);

  useEffect(() => {
    setTrimText(description);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setTrimText(description);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const setTrimText = (_text) => {
    if (window.innerWidth < 640) {
      setText(trimText(_text, limit.MOBILE));
    } else {
      setText(trimText(_text, limit.DESKTOP));
    }
  };

  const trimText = (_text, _limit) => {
    if (_text?.length < _limit) {
      setIsTrim(false);

      return _text;
    }

    setIsTrim(true);
    return _text.substring(0, _limit) + '...';
  };

  const handleClick = () => {
    setSeeMore(!seeMore);
  };

  return isTrim ? (
    <div className={styles.wrapper}>
      <p className={styles.label}>{!seeMore ? text : description}</p>
      <span onClick={handleClick}>
        {!seeMore ? 'Continue reading' : 'Show Less'}
      </span>
    </div>
  ) : (
    <>
      {text && (
        <div className={styles.wrapper}>
          <p className={styles.label}>{text}</p>
        </div>
      )}
    </>
  );
};

export default Description;
