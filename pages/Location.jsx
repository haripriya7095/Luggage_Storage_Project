import React from 'react';
import '../src/css_folder/location.css'; // Import your CSS file

export default function Location() {
  return (
    <body>
      <div>
        <section className="sectionStyle">
          <article className='box'>
            <h3>Call</h3>
            <p className="callNumber">+917799976811</p>

            <section>
              <h3>Directions</h3>
              <div>
                <div className="mapContainer">
                  <img
                    src="https://maps.zomato.com/php/staticmap?center=16.4968652987,80.6640246883&amp;maptype=zomato&amp;markers=16.4968652987,80.6640246883,pin_res32&amp;sensor=false&amp;scale=2&amp;zoom=16&amp;language=en&amp;size=500x250"
                    loading="lazy"
                    alt="Map"
                  />
                </div>
              </div>
              <p className="address">40-1-52D, Ground Floor, KK Towers, Acheraya Ranga Nagar, Labbipet, Vijayawada</p>

              <div>
                <a href="https://www.google.com/maps/dir/?api=1&amp;destination=16.4968652987,80.6640246883" target="_blank" rel="noopener noreferrer">
                  <div className='button'>
                    <i>
                      <span>Directions</span>
                    </i>
                  </div>
                </a>
              </div>
            </section>

            <a href="https://www.zomato.com/vijayawada/restaurants/dominos-pizza-1" className="linkToStores" target="_blank" rel="noopener noreferrer" role="link">
              <span>
                <span>See all nearby luggage stores in Vijayawada</span>
                <i>
                  <span>▶</span>
                </i>
              </span>
            </a>
          </article>
        </section>
      </div>
    </body>
  );
}
