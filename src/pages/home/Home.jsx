import React from 'react'
import './Home.scss';
import Section from '../sections/section1/Section' ;
import Section2 from '../sections/section2/Section2' ;
import Section3 from '../sections/Section3/Section3' ;



const Home = () => {
  return (
    <div>
        <div className="home">
                <Section />
        </div>
    </div>
  )
}

export default Home