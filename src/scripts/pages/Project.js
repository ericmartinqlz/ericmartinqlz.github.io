import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectList from '../components/ProjectList';

import '../../styles/project-page.css';

class Project extends React.Component {
  constructor() {
    super();
    this.page = "Project";
  }

  render() {
    return (
      <div className="PageDiv page-project">
        <PageHeader page={this.page}/>

        <div className="PageMain">
          <section>
            <ProjectList />
          </section>
        </div>
      </div>
    )
  }
}

export default Project;