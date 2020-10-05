import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import groupLogo from '../../../images/logos/Group 1329.png';
import './Home.css';
import '../../../App.css';
import one from '../../../images/images/childSupport.png';
import two from '../../../images/images/refuseShelter.png';
import three from '../../../images/images/foodCharity.png';
import four from '../../../images/images/clothSwap.png';
import five from '../../../images/images/riverClean.png';
import six from '../../../images/images/cleanWater.png';
import seven from '../../../images/images/goodEducation.png';
import eight from '../../../images/images/newBooks.png';
import nine from '../../../images/images/studyGroup.png';
import ten from '../../../images/images/birdHouse.png';
import eleven from '../../../images/images/libraryBooks.png';
import twelve from '../../../images/images/driveSafety.png';
import thirteen from '../../../images/images/musicLessons.png';
import forteen from '../../../images/images/voteRegister.png';
import fifteen from '../../../images/images/clearnPark.png';
import sixteen from '../../../images/images/ITHelp.png';
import seventeen from '../../../images/images/animalShelter.png';
import eightteen from '../../../images/images/babySit.png';
import nineteen from '../../../images/images/stuffedAnimals.png';
import tweenty from '../../../images/images/schoolSuffiles.png';
import { Link } from 'react-router-dom';






const Home = (props) => {
const {id,name} = props.information;
   
    return (
          
            
        <div>
         
        <header>
                <div>

                    <div>
                        <a href=""><img className="logo" src={groupLogo} alt="" /></a>

                        <ul className="main-nav">
                            <li className="active">
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Donation</a>
                            </li>
                            <li>
                                <a href="">Events</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                               <Button variant="contained" color="primary">Register</Button>  
                            </li>

                            <li>
                                <Button variant="contained" color="secondary">Admin</Button>
                            </li>
                        </ul>

                    </div>
                    <div className="App">
                        I GROW BY HELPING PEOPLE IN NEED<br />

                    </div>

                </div>

            </header>

            <div class="container">

           <Link to={`/registration/${id}`} >    <div className="geelary">
                          <img src={one} alt="" />
                          <div className="dec">children support</div>
                        </div>
              

                  <div className="geelary">
                          <img src={two} alt="" />
                          <div className="dec">refuej selter</div>
                        </div>
                

                <div className="geelary">
                    <img src={three} alt="" />
                    <div className="dec">Food Charity</div>
                </div>

                <div className="geelary">
                    <img src={four} alt="" />
                    <div className="dec">Host a clothing swap</div>
                </div>

                <div className="geelary">
                    <img src={five} alt="" />
                    <div className="dec">Host a river clean up</div>
                </div>

                <div className="geelary">
                    <img src={six} alt="" />
                    <div className="dec">Clean water for child</div>
                </div>

                <div className="geelary">
                    <img src={seven} alt="" />
                    <div className="dec">Good education</div>
                </div>


                <div className="geelary">
                    <img src={eight} alt="" />
                    <div className="dec">New books for children</div>
                </div>

                <div className="geelary">
                    <img src={nine} alt="" />
                    <div className="dec">host a study group</div>
                </div>


                <div className="geelary">
                    <img src={ten} alt="" />
                    <div className="dec">Build bird house for your neighbor</div>
                </div>


                <div className="geelary">
                    <img src={eleven} alt="" />
                    <div className="dec">Organize books at the library</div>
                </div>

                <div className="geelary">
                    <img src={twelve} alt="" />
                    <div className="dec">Give a seminar on driving safety</div>
                </div>


                <div className="geelary">
                    <img src={thirteen} alt="" />
                    <div className="dec">Give free music</div>
                </div>


                <div className="geelary">
                    <img src={forteen} alt="" />
                    <div className="dec">Tech people how to register to vote</div>
                </div>


                <div className="geelary">
                    <img src={fifteen} alt="" />
                    <div className="dec">Clean up your local park</div>
                </div>

                <div className="geelary">
                    <img src={sixteen} alt="" />
                    <div className="dec">Give it help to local adults</div>
                </div>

                <div className="geelary">
                    <img src={seventeen} alt="" />
                    <div className="dec">Foster selter animal</div>
                </div>

                <div className="geelary">
                    <img src={eightteen} alt="" />
                    <div className="dec">Babysit during PtA meetings</div>
                </div>

                <div className="geelary">
                    <img src={nineteen} alt="" />
                    <div className="dec">Collect stuffed animals</div>
                </div>

                <div className="geelary">
                    <img src={tweenty} alt="" />
                    <div className="dec">Collect school supplies</div>
                </div>

                </Link> 
                 













            </div>
        

        </div>


    );
};

export default Home;