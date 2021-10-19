import React from 'react';
import './Blog.css'




const Blog = () => {

    return (
        <div id='Blog'>
            <h1 className='bg-primary p-5'><h2 className='fw-bold'>Our Blog:</h2></h1>
            <h1>Our Client Says:</h1>
            <div className='bloging'>
                {/* bloging */}
                <div className='border border-warning m-3 '>

                    <p>It is the best online servive</p>

                </div>
                <div className='border border-warning m-3 '>

                    <p>keep going and all the best</p>
                </div>


            </div>
            {/* <div className='border borde-3 p-3 m-2'>
                <input type="text" placeholder='subscribe' />
                <button className='btn btn-warning'>Subscribe</button>
            </div> */}
        </div>
    );
};

export default Blog;