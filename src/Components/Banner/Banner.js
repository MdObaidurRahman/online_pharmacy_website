import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import one from '../../Images/Banner/1.jpg'
import two from '../../Images/Banner/2.jpg'
import three from '../../Images/Banner/3.jpg'

const Banner = () => {
    return (
        <>
<Carousel className='carousel'>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src='https://c8.alamy.com/comp/2CCPW9K/pretty-female-pharmacist-offering-products-of-body-care-in-pharmacy-2CCPW9K.jpg'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7a3iHpAFkn27XlXqq4ipO_nBhoeyh6cx2g&usqp=CAU'
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV21aiPLQHBFxuP0rj9RmTJBjYDvhA70iATQ&usqp=CAU'
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;