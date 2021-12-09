import React from 'react';
import PageHeader from '../components/PageHeader';
import SkillList from '../components/SkillList';

import '../../styles/skill-page.css';

class Skill extends React.Component {
  constructor() {
    super();
    this.page = "Skill";
  }

  render() {
    return (
      <div className="PageDiv page-skill">
        <PageHeader page={this.page}/>

        <div className="PageMain">
          <section>
            <div className="technology-section">
              <h3>Technology</h3>
              <SkillList type="technology"/>
            </div>

            <div className="design-section">
              <h3>Design</h3>
              <div className="skill-list">
                <SkillList type="design"/>
              </div>
            </div>

            <div className="others-section">
              <h3>Others</h3>
              <div className="skill-list">
                <div className="skill-item">

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )  
  }
}

export default Skill;