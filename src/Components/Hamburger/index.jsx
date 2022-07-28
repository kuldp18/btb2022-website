import React from 'react';

const Hamburger = ({ isOpen }) => {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>

      <style jsx>{`
        .hamburger {
          width: 5rem;
          height: 5rem;
          display: flex;
          justify-content: space-around;
          flex-flow: column nowrap;
          z-index: 10;
          position: relative;
        }

        .burger {
          width: 2.7rem;
          height: 0.5rem;
          border-radius: 10px;
          background-color: #fd5047;
          transform-origin: 1px;
          transition: all 0.3s linear;
          margin-bottom: 5px;
        }

        .burger1 {
          transform: ${isOpen ? 'rotate(45deg) translate(6px, -2px)' : ''};
        }
        .burger2 {
          opacity: ${isOpen ? 0 : 1};
        }
        .burger3 {
          transform: ${isOpen ? 'rotate(-45deg) translate(14px, -5px)' : ''};
        }
      `}</style>
    </>
  );
};

export default Hamburger;
