import React from 'react';

const About = () => {
  return (
    <div id="about" className="max-w-screen-lg m-auto px-12 pt-24">
      <h2 className="text-2xl font-bold">ABOUT</h2>
      <p className="mt-5">
        My name is Thanapat Teerarattanyu. I live in Samut Prakan, Thailand. My
        personality type is INFJ. I am currently studying Bachelor of Science
        Program in Data Science and Business Analytics at King Mongkut's
        Institute of Technology Ladkrabang, Thailand.
      </p>
      <div className="mt-5">
        <h3 className="text-2xl mb-3">Education</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <SchoolHistory
            school={{
              level: 'Primary School',
              name: 'St.Raphael School, Thailand',
              startYear: 2004,
              graduateYear: 2013,
            }}
          />
          <SchoolHistory
            school={{
              level: 'Middle School and High School',
              name: 'Streesmutprakan School, Thailand',
              startYear: 2014,
              graduateYear: 2019,
            }}
          />
          <SchoolHistory
            school={{
              level: 'Undergraduate',
              name: "King Mongkut's Institute of Technology Ladkrabang, Thailand.",
              startYear: 2020,
              graduateYear: 'present',
            }}
          />
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-2xl mb-3">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 text-center">
          <div>React</div>
          <div>Javascript</div>
          <div>Firebase</div>
          <div>Python</div>
          <div>SQL</div>
        </div>
      </div>
    </div>
  );
};

const SchoolHistory = props => {
  const { name, level, startYear, graduateYear } = props.school;
  return (
    <div>
      <p className="">{level}</p>
      <p className="text-xl font-light">{name}</p>
      <p className="font-light text-orange">
        {startYear} - {graduateYear}
      </p>
    </div>
  );
};

export default About;
