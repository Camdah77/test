import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';
import pic1 from '../assets/images/menu/m1.png';
import pic2 from '../assets/images/menu/m2.png';
import pic3 from '../assets/images/menu/m3.png';
import pic4 from '../assets/images/menu/m4.png';
import pic5 from '../assets/images/menu/m5.png';
import pic6 from '../assets/images/menu/m6.png';
import pic7 from '../assets/images/menu/m7.png';
import pic8 from '../assets/images/menu/m8.png';
import pic9 from '../assets/images/menu/m9.png';

const punycode = require('punycode.js');  // Updated

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            Camilla
            <br />
          </h1>
          <p>
            Art by Anuya
          </p>
        </header>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="Gallery" />
            </span>
            <Link to="/gallery">
              <h2>Gallery</h2>
            </Link>
          </article>

          <article className="style2">
            <span className="image">
              <img src={pic2} alt="PrintStudio" />
            </span>
            <Link to="/printstudio">
              <h2>PrintStudio</h2>
            </Link>
          </article>

          <article className="style3">
            <span className="image">
              <img src={pic3} alt="Art for sale" />
            </span>
            <Link to="/forsale">
              <h2>Art for sale</h2>
            </Link>
          </article>

          <article className="style4">
            <span className="image">
              <img src={pic4} alt="Home Decor" />
            </span>
            <Link to="/interior">
              <h2>HomeDecor</h2>
            </Link>
          </article>

          <article className="style5">
            <span className="image">
              <img src={pic5} alt="Make Art" />
            </span>
            <Link to="/makeart">
              <h2>Make Art</h2>
            </Link>
          </article>

          <article className="style6">
            <span className="image">
              <img src={pic6} alt="Art Class Online" />
            </span>
            <Link to="/classonline">
              <h2>Art Class Online</h2>
            </Link>
          </article>

          <article className="style7">
            <span className="image">
              <img src={pic7} alt="Art Class IRL" />
            </span>
            <Link to="/classirl">
              <h2>Art Class IRL</h2>
            </Link>
          </article>

          <article className="style8">
            <span className="image">
              <img src={pic8} alt="Camilla" />
            </span>
            <Link to="/camilla">
              <h2>Camilla</h2>
            </Link>
          </article>

          <article className="style9">
            <span className="image">
              <img src={pic9} alt="Contact" />
            </span>
            <Link to="/contact">
              <h2>Contact</h2>
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
