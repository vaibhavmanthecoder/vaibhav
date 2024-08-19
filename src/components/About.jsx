import aboutImg from "../assets/vaibhav.jpg";
import React from 'react';
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>
        About <span className='text-neutral-500'>Me</span>
      </h1>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='w-full lg:w-1/2 flex items-center justify-center'>
          <img className="rounded-2xl w-90 h-90" src={aboutImg} alt="About Me" />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <p className="max-w-lg p-4 lg:p-0 text-grey-800">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
