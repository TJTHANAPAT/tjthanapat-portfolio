import React from 'react';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import About from './About';
import Navbar from './Navbar';
import Works from './Works';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        style={{ minHeight: 'calc(100vh - 100px)' }}
        className="flex items-center"
      >
        <div className="w-full">
          <div className="max-w-screen-lg m-auto p-12 pb-28 flex flex-wrap-reverse justify-center lg:justify-between items-center">
            <div style={{ maxWidth: '500px' }} className="mt-5 lg:-mt-5">
              <h1 className="text-4xl md:text-5xl font-semibold text-orange-500">
                THANAPAT TEERARATTANYU
              </h1>
              <p className="font-thin mt-3 mb-5">
                Hello, my name is Thanapat Teerarattanyu.
                <br />I am a front-end developer and an undergraduate student at
                KMITL.
              </p>
              <Button
                variant="outlined"
                color="primary"
                className="mt-5"
                disableElevation
                component="a"
                href="#content"
              >
                Know Me More
              </Button>
              <div className="mt-12">
                <EmailIcon color="primary" className="mr-3" />
                <FacebookIcon color="primary" className="mr-3" />
                <InstagramIcon color="primary" className="mr-3" />
                <GitHubIcon color="primary" className="mr-3" />
              </div>
            </div>
            <div style={{ maxWidth: '400px' }} className="">
              <img src="/assets/tjthanapat_bw.png" alt="tjthanapat" />
            </div>
          </div>
        </div>
      </div>
      <div id="content" className="bg-gray-50">
        <About />
        <Works />
      </div>
      <Footer />
    </>
  );
};

export default Home;
