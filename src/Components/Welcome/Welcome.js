import React from 'react';

import './Welcome.css'

const Welcome = () => {
    return (
<div>
    <h2 className='fw-bold mt-5 mb-5'><u>Welcome to our Medical Service</u></h2>
<div className='welcome mt-5 mb-5 responsive'>
            <div >
                <img  src='https://media.istockphoto.com/photos/portrait-of-a-cheerful-handsome-pharmacist-leaning-on-counter-at-picture-id1134018512?k=20&m=1134018512&s=612x612&w=0&h=iCgrUYmLLdFiJePX70URUuA8cH7sEZFHj8ohDsZHHIU=' alt="" />
            </div>
            <div >
                <div className=' text-center m-5 p-3 ' >
                <h1 className='bg-primary m-3'>Request Appointment</h1>
                <h1 className='bg-primary m-3 '>Find Doctor</h1>
                <h1 className='bg-primary m-3'>Find Location</h1>
                <h1 className='bg-primary m-3'>Emergency Contact</h1>
                </div>
                
            </div>
        </div>
</div>
    );
};

export default Welcome;