import React, { useState } from 'react';
import '../../Styles/Faq.css';
import { IconContext } from 'react-icons';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const FaqItem = ({ question, answer, index }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <>
      <IconContext.Provider
        value={{
          color: '#fff',
          size: '20px',
        }}
      >
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggle(index)}>
            <h3>{question}</h3>
            <span>
              {clicked === index ? <BsChevronUp /> : <BsChevronDown />}
            </span>
          </div>
          {clicked === index ? (
            <p dangerouslySetInnerHTML={{ __html: answer }}></p>
          ) : null}
        </div>
      </IconContext.Provider>
    </>
  );
};

export default FaqItem;
