import React, { useContext, useState } from 'react';
import './RegisterVolentear.css';
import pic from '../../images/logos/Group 1329.png'
import { UserContext } from '../../App';
import 'date-fns';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from 'react-router-dom';

const RegisterVolentear = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());


    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const handleRegister = () => {
        const registering = { ...loggedInUser, ...selectedDate };
        console.log(registering);
        fetch('http://localhost:5000/registering', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registering)

        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div>
            <div >
                <img style={{ height: '50px', position: "absolute", left: '678px', top: '90px' }} src={pic} alt="" />
            </div>

            <div className="reg-box">
                <h2>Register as a volunteer</h2>

                <div className="text-box">
                    <input placeholder="Full name" value={loggedInUser.name} type="text" name="" id="" />
                </div>

                <div className="text-box">
                    <input placeholder="Username / Email" value={loggedInUser.email} type="text" name="" id="" />
                </div>

                <div className="text-box">
                    {/* <input placeholder="Date" type="text" name="" id=""/> */}
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                          
                            <KeyboardDatePicker
                               
                               format="MM/dd/yyyy"
                               value={selectedDate}
                               onChange={handleDateChange}
                               KeyboardButtonProps={{
                                   'aria-label': 'change date',
                               }} 
                              
                            />




                        </Grid>
                    </MuiPickersUtilsProvider>


                </div>

                <div className="text-box">
                    <input placeholder="Description" type="text" name="" id="" />
                </div>

                <div className="text-box">
                    <input placeholder="Organization books at the library" type="text" name="" id="" />
                </div>

               <Link to='/registered'><button onClick={handleRegister} className="btn">Registration</button></Link> 

            </div>
        </div>
    );
};

export default RegisterVolentear;