import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const Works = () => {
  return (
    <div id="works" className="max-w-screen-lg m-auto px-12 py-24">
      <h2 className="text-2xl font-bold">WORKS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      <WorkCard
          work={{
            title: 'Rhohit',
            year: 2021,
            desc: 'Rhohit is a platform to track your blood donation. The aim is to encourage people to donate their blood. It won the Best Excecutive Award of Young Webmaster Camp 18.',
            img: '/tjthanapat-portfolio/assets/Rhohit.png',
            link: 'https://ywc18-workshop-c.netlify.app/',
            githubRepoLink: 'https://github.com/WebmasterCamp/ywc18-workshop-c'
        }}
        />
        <WorkCard
          work={{
            title: 'Light Up SSP',
            year: 2019,
            desc: "Light Up SSP is a website for registration in the careers and university guidance event at Streesmutprakan School.",
            img: '/tjthanapat-portfolio/assets/LightUpSSP.png',
            link: 'https://lightupssp.web.app/',
            githubRepoLink: 'https://github.com/TJTHANAPAT/light-up-the-project'

        }}
        />
        <WorkCard
          work={{
            title: 'After Die',
            year: 2017,
            desc: 'After Die is a platform to organize and customize a funeral. It won the Winner Prize of Junior Webmaster Camp X.',
            img: '/tjthanapat-portfolio/assets/AfterDie.png',
            link: 'https://dionisus.jwc.in.th/',
          }}
        />
        
        
      </div>
    </div>
  );
};

const WorkCard = props => {
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
          <p className="font-light text-orange">{year}</p>
          <p className="font-light">{desc}</p>
        </div>
        <div className="flex justify-end mt-5">
            {githubRepoLink && (
                <IconButton color="primary" component="a" href={githubRepoLink}><GitHubIcon/></IconButton>
            )}
          <Button color="primary" component="a" href={link}>
            View
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Works;
