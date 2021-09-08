import { Button } from '@material-ui/core';
import React from 'react';

const Works = () => {
  return (
    <div id="works" className="max-w-screen-lg m-auto px-12 py-24">
      <h2 className="text-2xl font-bold">WORKS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <WorkCard
          work={{
            title: 'Title',
            desc: 'Lorem Ipsum',
            img: 'https://www.workandliveinchina.com/wp-content/uploads/2020/07/Working-in-China-in-2020-Guide.jpg',
            link: '#123'
        }}
        />
        <WorkCard
          work={{
            title: 'Title',
            desc: 'My name is Thanapat Teerarattanyu. I live in Samut Prakan, Thailand. My personality type is INFJ. I am currently studying Bachelor of Science Program in Data Science and Business Analytics at King Mongkuts Institute of Technology Ladkrabang, Thailand.',
            img: 'https://www.workandliveinchina.com/wp-content/uploads/2020/07/Working-in-China-in-2020-Guide.jpg',
          }}
        />
        <WorkCard
          work={{
            title: 'Title',
            desc: 'Lorem Ipsum',
            img: 'https://www.workandliveinchina.com/wp-content/uploads/2020/07/Working-in-China-in-2020-Guide.jpg',
          }}
        />
      </div>
    </div>
  );
};

const WorkCard = props => {
  const { img, title, desc, link } = props.work;
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <img
        src={img}
        style={{ height: '12rem' }}
        className="rounded-lg bg-orange-400 object-cover w-full "
      />
      <div
        style={{ height: 'calc(100% - 12rem)' }}
        className="p-5 flex flex-col justify-between"
      >
        <div>
          <h3 className="font-medium text-xl">{title}</h3>
          <p className="font-light">{desc}</p>
        </div>
        <div className="flex justify-end mt-5">
          <Button color="primary" className="" component="a" href={link}>
            View
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Works;
