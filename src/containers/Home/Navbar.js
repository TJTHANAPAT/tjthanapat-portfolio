import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div
        style={{ height: '100px' }}
        className=" max-w-screen-lg m-auto pl-12 pr-12 pt-10 pb-5 flex flex-wrap"
      >
        <a href="#about" className="inline-block ml-auto mr-7">ABOUT</a>
        <a href="#works" className="inline-block mr-auto md:mr-7">WORKS</a>
      </div>
    </div>
  );
};

export default Navbar;
