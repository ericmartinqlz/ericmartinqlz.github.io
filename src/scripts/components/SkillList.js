import React from 'react';
import SkillItem from '../components/SkillItem';

import data from '../data/data';

class SkillList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      skills: [],
    }

    this.props = props;
    this.getSkills = this.getSkills.bind(this);
  }

  getSkills(type) {
    return data.skills[type];
  }

  async componentDidMount() {
    const skills = this.getSkills(this.props.type);
    this.setState({ skills });
  }

  render() {
    console.log(this.state.skills)
    return (
      <div className="skill-list">
        {this.state.skills.map((skill) => (
          <SkillItem
            key={skill.name}
            icon={skill.icon}
            image={skill.image}
            color={skill.color}
          />
        ))}
      </div>
    )
  }
}

export default SkillList;