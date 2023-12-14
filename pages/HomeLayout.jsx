{/* <img src="https://media.istockphoto.com/id/1384246261/photo/many-suitcases-stacked-with-summer-travel-accessories.jpg?s=612x612&w=0&k=20&c=aLMtVY_LY0qulD5cMgFJEB-ZShNLmpmRQQuelwWVWgE=" alt="Los Angeles"/>
      <img src="https://cdn.zeebiz.com/sites/default/files/2023/08/09/255528-airport-passengers-travelers-ani.jpg" alt="Chicago"/>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.residenciasarria.com%2Fen%2Fservices%2Fluggage-storage%2F_i%3A14%2F&psig=AOvVaw1OtyW-oy6vPK_Jw_epC4Vw&ust=1702468844337000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODJ3ufsiYMDFQAAAAAdAAAAABAJ" alt="New York"/> */}


import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Storage from './StorageD';
import HomeNav from './HomeNav';
import { Outlet } from 'react-router-dom';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={4000}>
      <div className='slide-img-container'>
        
        <img style={{objectFit:"cover"}} className='slide-img' src="https://static.vecteezy.com/system/resources/previews/013/396/456/original/people-with-luggage-on-railway-station-at-night-free-vector.jpg" alt="img-1"/>
       </div>
        {/* <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <div className='slide-img-container'>
        <img style={{objectFit:"cover"}} className="slide-img" src="https://img.freepik.com/free-photo/happy-young-couple-tourists-man-woman-holding-suitcases-standing-light-wall_141793-56702.jpg?w=740&t=st=1702384840~exp=1702385440~hmac=371a64982ba2319a78e2a0feadfb1de216189b4a0d113b0cb0ba0be3e8e30da5" alt="img2" />

        </div>

        {/* <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <div className='slide-img-container'>

      <img style={{objectFit:"cover"}} className='slide-img' src="https://media.tegna-media.com/assets/WTHR/images/b44b8475-8d24-481b-9954-2ab729f1ca14/b44b8475-8d24-481b-9954-2ab729f1ca14_1140x641.jpg" alt="img-3"/>
</div>
        {/* <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    <HomeNav/>
    <Outlet/>
   
    </div>
  );
}

export default ControlledCarousel;
