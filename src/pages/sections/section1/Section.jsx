import React, { useRef } from 'react';
import './Section.scss';
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './SliderSection.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';
import myPhoto from '../../../assets/photo_2023-11-03_19-19-17.jpg'
import { LinearProgress, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useAnimation,motion } from 'framer-motion';
import { useEffect } from 'react';


const Section = () => {

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView1) {
      animation1.start(i => ({
        x: 0,
        opacity: 1,
        transition: { delay: i * 0.2 }
      }));
    }
    if (inView2) {
      animation2.start(i => ({
        x: 0,
        opacity: 1,
        transition: { delay: i * 0.2 }
      }));
    }
  }, [inView1, inView2, animation1, animation2]);

  const skills = [
    { name: 'HTML', level: 90, icon: "https://cdn-icons-png.flaticon.com/128/174/174854.png" },
    { name: 'CSS', level: 90 , icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png"},
    { name: 'SCSS', level: 80  ,icon: "https://cdn-icons-png.flaticon.com/128/5968/5968358.png"},
    { name: 'React', level: 70  ,icon: "https://t3.ftcdn.net/jpg/05/83/61/64/240_F_583616402_eeFIruMMzI8pFF4pkAmDjywdMWu9TQsT.jpg"},
    { name: 'JavaScript', level: 80  ,icon: "https://cdn-icons-png.flaticon.com/128/1199/1199124.png"},
    { name: 'Firebase', level: 40  ,icon: "https://cdn-icons-png.flaticon.com/128/4139/4139118.png"},
    { name: 'Redux', level: 50  ,icon: "https://img.icons8.com/?size=80&id=b6vIINYN0kfW&format=png"},
    { name: 'Framer Motion', level: 70  ,icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg"},
    { name: 'Material-UI (MUI)', level: 95  ,icon: "https://mui.com/static/logo.png"},
  ];

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    arrows: true,
    className: "slides"
  };

  const textAnimation = {
    hidden: { opacity: 0, x: -500 },
    visible: custom => ({ 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5, 
        type: "spring", 
        delay: custom * 0.2

      } })

  };
  const btnAnimation = {
    hidden: { opacity: 0, y: 500 },
    visible: custom => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        type: "spring", 
        delay: custom * 0.2

      } })

  };
  const laptopAnimation = {
    hidden: { opacity: 0, y: -500 },
    visible: custom => ({ 
      opacity: 1, 
      y: 0, 
      x: -200,
      transition: { 
        duration: 0.5, 
        type: "spring", 
        delay: custom * 0.2

      } })

  };


  
  

  return (
    <div>
      <div className="section-1">
        <div className="container">
          <div className="container-section-1">
            <motion.div 
            variants={laptopAnimation}
            initial='hidden'
            animate='visible'
            custom={7}
            className="laptop3dDiv"
            >
              <img className='laptop3d' src="https://cdn3d.iconscout.com/3d/premium/thumb/laptop-4065288-3361543.png" alt="" />
            </motion.div>

            <div className="left">
              <div className="name">
                <motion.p 
                variants={textAnimation}
                initial='hidden'
                animate='visible'
                custom={1}
                className='name-p'>Nurzhigit</motion.p>
              </div>
              <div className="last-name">
                <motion.p 
                className='last-name-p'
                variants={textAnimation}
                initial='hidden'
                animate='visible'
                custom={2}
                >Usupov</motion.p>
              </div>
              <div className="text-developer">
                <motion.p 
                  variants={textAnimation}
                  initial='hidden'
                  animate='visible'
                  custom={5}
                className='text-developer-p'
                >Front END</motion.p>
                <motion.p 
                  variants={textAnimation}
                  initial='hidden'
                  animate='visible'
                  custom={5}
                className='text-developer-p'
                >Web Developer</motion.p>
              </div>
              <motion.div 
                  variants={btnAnimation}
                  initial='hidden'
                  animate='visible'
                  custom={4}
              className="left-btns">
                <a href="#slider" 
                className='btns-button-1'
                >Projects</a>

                <motion.a 
                href='#skillBox' 
                className='btns-button-2'
                >Learn More</motion.a>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            className="right">
              <img className='myAvatar' src={myPhoto} alt="" />
            </motion.div>

          </div>
          <div className="arrowDown">
            <a href="#section-2">
              <ArrowDownwardIcon className='iconArrow' />
            </a>
          </div>
        </div>
      </div>

      <div className="section-2" ref={ref1}>
        <div className="container-section-2">
          <p className='section-2-text-1'>Projects</p>

          <div id="slider" className="carousel">
          <Slider  {...settings}>
              <div className="project firstDiv">
                <div className="project-imgDiv-1"></div>
                <div className="project-textDiv-1">
                  <p className='nameProject'>Yntymak - 87</p>
                  <p className='descriptionProject'>
                  Yntymak 87 is a specialized
                   website designed to facilitate the 
                   search for and communication with
                    employees within my brother's 
                    companies. This convenient tool 
                    is aimed at strengthening internal
                     corporate communication and 
                     collaboration
                  </p>

                  <a target='_blank' href='https://project-1-4ukx.vercel.app/allContacts'  id='yntymak' className='toYntymakLink'>Read</a>
                </div>
              </div>

              <div className="project secondDiv">
                <div className="project-imgDiv-2"></div>
                <div className="project-textDiv-1">
                  <p className='nameProject'>Task Helper</p>
                  <p className='descriptionProject'>
                  Task Helper is created to 
                  improve the educational process 
                  for students and schoolchildren,
                   making their lives easier. This
                    statement is based on my own experience, as I am a student myself

                  </p>

                  <a target='_blank' href='https://task-helper-wheat.vercel.app' id='yntymak' className='toHelperTask toYntymakLink'>Read</a>
                </div>              
                </div>
            </Slider>
          </div>
        </div>
      </div>

      <div>
      <div className="section-3">
        <div className="container-section-3">
          <h1>ME</h1>
          <img
            className='myAvatar' 
            src={myPhoto} alt=""
          />
          <div ref={ref1}>
            <motion.div initial={{ x: -100, opacity: 0 }} custom={0} animate={animation1} className="myNameBlock">
              <AccountCircleIcon className='myNameIcon' />
              <p className='myName'>NURZHIGIT USUPOV</p>
            </motion.div>

            <motion.div initial={{ x: -100, opacity: 0 }} custom={1} animate={animation1} className="myAgeBlock">
              <CakeIcon className='myAgeIcon'/>
              <p className='myAge'>18 y.o</p>
            </motion.div>

            <motion.div initial={{ x: -100, opacity: 0 }} custom={2} animate={animation1} className="myEducationBlock">
              <SchoolIcon className='myEducationIcon' />
              <p className='myEducation'>Ensuring Information System Security <br /> at Kyrgyz State University, Kyrgyzstan</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="section-4">
        <div ref={ref2} className="container-section-4">
          <div id='skillBox' className='skillBlock' >
            <motion.h2 initial={{ x: -100, opacity: 0 }} custom={0} animate={animation2} className='section-4-text-1'>My Skills</motion.h2>
            {skills.map((skill, index) => (
              <motion.div key={index} initial={{ x: -100, opacity: 0 }} custom={index + 1} animate={animation2} className="skill">
                <img src={skill.icon} alt={skill.name} className="skillIcon" />
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <Typography className='skillName' variant="subtitle1">{skill.name}</Typography>
                </a>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{ height: 8, backgroundColor: '#e0e0e0', borderRadius: 4 }}
                />
                <Typography variant="caption" className='skillLevel' sx={{ textAlign: 'right' }}>{skill.level}%</Typography>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="linkToBiografyBlock">
          <Link to='/biography' className='linkToBiografy'>Биография</Link>
        </div>
      </div>
    </div>



    </div>
  )
}

export default Section;