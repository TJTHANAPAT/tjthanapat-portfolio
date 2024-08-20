import React from 'react';
import { Icon } from 'lucide-react';
import GithubIcon from '../assets/GithubIcon';

const Works = () => {
  return (
    <div id="works" className="max-w-screen-lg m-auto px-12 py-24">
      <h2 className="text-2xl font-bold">WORKS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <WorkCard
          work={{
            title: 'Young Webmaster Camp 19 Landing Page',
            year: 2023,
            desc: 'Created the landing page with Young Webmaster Camp 19 developer team.',
            img: '/assets/YWC19-landing-page.png',
            link: 'https://ywc19.ywc.in.th/',
          }}
        />
        <WorkCard
          work={{
            title: 'Rhohit',
            year: 2021,
            desc: 'Rhohit is a platform to track your blood donation. The aim is to encourage people to donate their blood. It won the Best Excecutive Award of Young Webmaster Camp 18.',
            img: '/assets/Rhohit.png',
            link: 'https://ywc18-workshop-c.netlify.app/',
            githubRepoLink: 'https://github.com/WebmasterCamp/ywc18-workshop-c',
          }}
        />
        <WorkCard
          work={{
            title: 'Light Up SSP',
            year: 2019,
            desc: 'Light Up SSP is a website for registration in the careers and university guidance event at Streesmutprakan School.',
            img: '/assets/LightUpSSP.png',
            link: 'https://lightupssp.web.app/',
            githubRepoLink:
              'https://github.com/TJTHANAPAT/light-up-the-project',
          }}
        />
        <WorkCard
          work={{
            title: 'After Die',
            year: 2017,
            desc: 'After Die is a platform to organize and customize a funeral. It won the Winner Prize of Junior Webmaster Camp X.',
            img: '/assets/AfterDie.png',
            link: 'https://dionisus.jwc.in.th/',
          }}
        />
      </div>
    </div>
  );
};

const WorkCard = (props) => {
  const { img, title, year, desc, link, githubRepoLink } = props.work;
  return (
    <div className="bg-white rounded-lg shadow-lg mb-5">
      <img
        src={img}
        alt={title}
        style={{ height: '12rem' }}
        className="rounded-lg bg-orange-400 object-cover w-full "
      />
      <div
        style={{ height: 'calc(100% - 12rem)' }}
        className="p-5 flex flex-col justify-between"
      >
        <div>
          <h3 className="font-medium text-xl">{title}</h3>
          <p className="font-light text-gray-400">{year}</p>
          <p className="font-light">{desc}</p>
        </div>
        {!!githubRepoLink ? (
          <div className="flex items-center justify-between mt-5">
            <a href={githubRepoLink}>
              <GithubIcon className="w-[24px] fill-orange-400 hover:fill-orange-300 ease-in-out duration-300" />
            </a>
            <a
              href={link}
              target="_blank"
              className="hover:bg-gray-100 px-5 py-2 rounded-md ease-in-out duration-300 uppercase"
            >
              View
            </a>
          </div>
        ) : (
          <div className="flex items-center justify-end mt-5">
            <a
              href={link}
              target="_blank"
              className="hover:bg-gray-100 px-5 py-2 rounded-md ease-in-out duration-300 uppercase"
            >
              View
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default Works;
