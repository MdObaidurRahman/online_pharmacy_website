import React from 'react';
import './Footer.css'


const Footer = () => {

    return (
        <div className='bg-dark text-white p-5 footer mt-5 footer'>
            {/* link use for footer */}
            <div>
                <a className='m-5' href="https://www.facebook.com/">Facebook</a>
                <a className='m-5' href="https://mail.google.com/mail/u/0/#inbox">E-mail</a>
                <a className='m-5' href="https://www.linkedin.com/feed/">Linkedin</a>
            </div>
            <h1>programming Hero Learner</h1>

        </div>
    );
};

export default Footer;