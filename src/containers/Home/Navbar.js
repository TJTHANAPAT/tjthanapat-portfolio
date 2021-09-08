import React from 'react';

const Navbar = () => {
  return (
    // <div className="sticky top-0 bg-white ">
    <div>
      <div
        style={{ height: '100px' }}
        className=" max-w-screen-lg m-auto pl-12 pr-12 pt-10 pb-5 flex flex-wrap"
      >
        <span className="inline-block ml-auto mr-7">ABOUT</span>
        <span className="inline-block mr-auto md:mr-7">WORKS</span>
      </div>
    </div>
  );
};

export default Navbar;
