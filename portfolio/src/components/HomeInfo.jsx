import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className=" font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn" >
             {btnText}
             <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
) 

const renderContent = {
    1: (
        <h1 className=" sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className='font-semibold'>Yashraj</span> 👋
            <br />
            A software engineer and CS grad from India.
            </h1>
    ),
    2: (
        <InfoBox 
            text="My journey as a software engineer and a computer science graduate"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
            text="learnt many things over the years, here are some of my projects"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="need a MERN developer? I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's Talk!"
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo