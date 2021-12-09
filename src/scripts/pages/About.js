import React from 'react';
import PageHeader from '../components/PageHeader';
import Biodata from '../components/Biodata';

import '../../styles/about-page.css';

import ProfileImage from '../../assets/images/eric-martin.jpg';
import Photo1 from '../../assets/images/photo-1.jpeg';
import Photo2 from '../../assets/images/photo-2.jpeg';
import Photo3 from '../../assets/images/photo-3.jpg';
import Photo4 from '../../assets/images/photo-4.jpg';
import Photo5 from '../../assets/images/photo-5.jpg';

class About extends React.Component {
  constructor() {
    super();
    this.page = "About Me";
  }

  render() {
    return (
      <div className="PageDiv page-about">
        <PageHeader page={this.page}/>

        <div className="PageMain">
          <section>
            <div className="profile">
              <div className="image">
                <img src={ProfileImage} alt="" />
              </div>
              <div className="text">
                <div className="main-text">
                  <p>Computer Science Undergraduate student at Universitas Sumatera Utara. Loves to learn and interested in new and challenging things. Always try to do tasks carefully and as much as possible.</p>
                  <p>Known technology since childhood and interested in it since junior high school. Want to be an expert Front End Developer and having big dream in the Virtual Reality field.</p>
                </div>
                <div className="quote-text">
                  <blockquote>Mimpi tidak pernah mati</blockquote>
                </div>
              </div>
            </div>

            <div className="mini-album">
              <img className="photo" src={Photo1} alt="" />
              <img className="photo" src={Photo2} alt="" />
              <img className="photo" src={Photo3} alt="" />
              <img className="photo" src={Photo4} alt="" />
              <img className="photo" src={Photo5} alt="" />
            </div>

            <div className="biodata">
              <h3>Biodata</h3>
              <Biodata />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default About;