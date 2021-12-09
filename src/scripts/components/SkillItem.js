import React from 'react';

class SkillItem extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    if(this.props.icon) {
      return (
        <div className="skill-item" style={{background: this.props.color}}>
          {this.props.icon}
        </div>
      )
    } else {
      return (
        <div className="skill-item">
          <img src={this.props.image} alt={this.props.name} />
        </div>
      )
    }
  }
}

export default SkillItem;