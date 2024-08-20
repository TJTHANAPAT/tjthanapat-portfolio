import React from 'react';

const About = () => {
  return (
    <div id="about" className="max-w-screen-lg mx-auto px-12 pt-24">
      <h2 className="text-2xl font-bold">ABOUT</h2>
      <div className='flex flex-col gap-5 mt-8'>
        <div>
          <h3 className="text-2xl mb-3">Education</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <p className="">Undergraduate</p>
              <p className="text-xl font-light">
                King Mongkut's Institute of Technology Ladkrabang, Thailand.
              </p>
              <p>B.S. Data Science and Business Analytics</p>
              <p className="font-light text-orange-400">2020 - 2023</p>
            </div>
            <SchoolHistory
              school={{
                level: 'Middle School and High School',
                name: 'Streesmutprakan School, Thailand',
                startYear: 2014,
                graduateYear: 2019,
              }}
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl mt-5 mb-3">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 text-center">
            <div>React</div>
            <div>Javascript</div>
            <div>Firebase</div>
            <div>Python</div>
            <div>SQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SchoolHistory = (props) => {
  const { name, level, startYear, graduateYear } = props.school;
  return (
    <div>
      <p className="">{level}</p>
      <p className="text-xl font-light">{name}</p>
      <p className="font-light text-orange-400">
        {startYear} - {graduateYear}
      </p>
    </div>
  );
};

export default About;
