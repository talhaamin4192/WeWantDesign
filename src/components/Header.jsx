import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isHoveringBook, setIsHoveringBook] = useState(false);
  const [isHoveringSignup, setIsHoveringSignup] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnterBook = () => setIsHoveringBook(true);
  const handleMouseLeaveBook = () => setIsHoveringBook(false);

  const handleMouseEnterSignup = () => setIsHoveringSignup(true);
  const handleMouseLeaveSignup = () => setIsHoveringSignup(false);

  const handleMouseEnterLogo = () => setIsHoveringLogo(true);
  const handleMouseLeaveLogo = () => setIsHoveringLogo(false);

  // Track mouse position
  const handleMouseMove = (e) => {
    if (isHoveringLogo) {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHoveringLogo]);

  return (
    <>
      <nav className='fixed left-0 right-0 z-50 flex items-center justify-between h-20 px-12 py-1 mx-auto text-sm bg-black top-3 rounded-xl w-95 font-GTWalsheimPro'>
        <div
          onMouseEnter={handleMouseEnterLogo}
          onMouseLeave={handleMouseLeaveLogo}
        >
          <img
            className='cursor-pointer size-32'
            src={logo}
            alt=""
            style={{
              position: 'relative',
              left: `${(cursorPosition.x - 30) * 0.05}px`, // Adjust the multiplier for smoothness
              top: `${(cursorPosition.y - 30) * 0.05}px`,
              transition: 'left 0.1s ease, top 0.1s ease',
            }}
          />
        </div>
        <div className='flex items-center gap-5 '>
          <Link to="/" className='custom-link'>Solutions</Link>
          <div className='circle'></div>
          <Link to="/" className='custom-link'>Work</Link>
          <div className='circle'></div>
          <Link to="/" className='custom-link'>Pricing</Link>
          <div className='circle'></div>
          <Link to="/" className='custom-link'>Blog</Link>
        </div>
        <div className='flex items-center text-sm text-white gap-14'>
          <Link>
            <div
              onMouseEnter={handleMouseEnterBook}
              onMouseLeave={handleMouseLeaveBook}
              className={`py-3 ${isHoveringBook ? 'transform translate-x-2 translate-y-2' : ''}`}
            >
              <button>Book a call</button>
            </div>
          </Link>
          <Link>
            <div
              onMouseEnter={handleMouseEnterSignup}
              onMouseLeave={handleMouseLeaveSignup}
              className={`relative overflow-hidden p-sm2 rounded-xl group ${isHoveringSignup ? 'transform translate-x-2 translate-y-2' : ''}`}
            >
              <span className='absolute h-52 w-52 bg-grad -top-20 -right-7 -z-10 transform transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]'></span>
              <button className='z-20 py-4 bg-black px-14 rounded-xl'>Sign up</button>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
