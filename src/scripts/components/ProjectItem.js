import React from 'react';

class ProjectItem extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div className="project-item">
        <div className="project-image">
          <picture>
            <source type="image/webp" srcSet={this.props.imgWEBP} />
            <source type="image/jpeg" srcSet={this.props.imgJPG} />
            <img src={this.props.imgJPG} alt={this.props.title} />
          </picture>
        </div>

        <div className="project-info">
          <h3>{this.props.title}</h3>
          <div className="project-cta">
            <a href={this.props.urlView} rel="noopener noreferrer" target="_blank" className="view ease-out">View</a>
            <a href={this.props.urlSource} rel="noopener noreferrer" target="_blank" className="source-code">Source Code</a>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItem;