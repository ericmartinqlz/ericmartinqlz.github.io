import React from 'react';
import ProjectItem from '../components/ProjectItem';

import data from '../data/data';

class ProjectList extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    }

    this.getProjects = this.getProjects.bind(this);
  }

  getProjects() {
    return data.projects;
  }

  async componentDidMount() {
    const projects = this.getProjects();
    this.setState({ projects });
  }

  render() {
    return (
      <div className="project-list">
        {this.state.projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            urlView={project.urlView}
            urlSource={project.urlSource}
            imgJPG={project.imgJPG}
            imgWEBP={project.imgWEBP}
          />
        ))}
      </div>
    )
  }
}

export default ProjectList;