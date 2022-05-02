import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Star from '../../public/icon-star.svg';

const Rating = () => {
  const [finished, setFinished] = useState(false);
  const [clicked, setClicked] = useState(0);
  const handleClick = (num) => {
    setClicked(num);
    if (num === clicked) {
      setClicked(0);
    }
  };

  const handleSubmit = () => {
    if (clicked != 0) {
      setFinished(true);
    }
  };
  return (
    <div className="rating">
      {finished ? (
        <div className="rating__finished">
          <div className="rating__image-container">
            <Image
              src="/illustration-thank-you.svg"
              layout="fill"
              alt="illustration of a machine that prints receipts"
            />
          </div>
          <div className="rating__selection-container">
            You selected {clicked} out of 5
          </div>
          <h1 className="rating__thank-you">Thank you!</h1>
          <p className="rating__thank-p">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      ) : (
        <>
          <div className="rating__star">
            <Image src={Star} height="15px" width="15px" alt="star" />
          </div>
          <h1 className="rating-h1">How did we do?</h1>
          <p className="rating-p">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rating__rates-container">
            <div
              className={`rating__rate ${clicked === 1 && 'clicked'}`}
              onClick={() => handleClick(1)}
            >
              1
            </div>
            <div
              className={`rating__rate ${clicked === 2 && 'clicked'}`}
              onClick={() => handleClick(2)}
            >
              2
            </div>
            <div
              className={`rating__rate ${clicked === 3 && 'clicked'}`}
              onClick={() => handleClick(3)}
            >
              3
            </div>
            <div
              className={`rating__rate ${clicked === 4 && 'clicked'}`}
              onClick={() => handleClick(4)}
            >
              4
            </div>
            <div
              className={`rating__rate ${clicked === 5 && 'clicked'}`}
              onClick={() => handleClick(5)}
            >
              5
            </div>
          </div>
          <button className="rating__submit" onClick={() => handleSubmit()}>
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default Rating;
