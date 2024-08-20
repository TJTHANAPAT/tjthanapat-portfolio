import React from 'react';

const Hero = () => {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 100px)' }}
      className="flex items-center"
    >
      <div className="w-full">
        <div className="max-w-screen-lg m-auto p-12 pb-28 flex flex-wrap-reverse justify-center lg:justify-between items-center">
          <div style={{ maxWidth: '480px' }} className="mt-5 lg:-mt-5">
            <h1 className="text-4xl md:text-5xl font-semibold text-orange-400">
              THANAPAT TEERARATTANYU
            </h1>
            <p className="font-thin mt-3 mb-5">
              Hello, my name is Thanapat Teerarattanyu.
              <br />I am a recent graduate with a degree in data science and
              business analytics from the School of Information Technology, King
              Mongkut's Institute of Technology Ladkrabang, Thailand. I am
              passionate about information technology and believe that I can
              make a better world with it.
            </p>
            <a href="#content">
              <button
                type="button"
                class="uppercase text-orange-400 bg-white border border-orange-300 focus:outline-none hover:bg-orange-100 focus:ring-4 focus:ring-orange-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Know More About Me
              </button>
            </a>
            <div className="mt-12 flex gap-5">
              <a
                className="hero-button"
                target="_blank"
                href="mailto:thanapatteerarattanyu@gmail.com"
              >
                Email
              </a>
              <a
                className="hero-button"
                target="_blank"
                href="https://www.linkedin.com/in/tjthanapat/"
              >
                LinkedIn
              </a>
              <a
                className="hero-button"
                target="_blank"
                href="https://github.com/tjthanapat"
              >
                GitHub
              </a>
            </div>
          </div>
          <div style={{ maxWidth: '400px' }} className="">
            <img src="/assets/tjthanapat.png" alt="tjthanapat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
