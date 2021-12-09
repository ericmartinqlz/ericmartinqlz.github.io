import React from 'react';
import PageHeader from '../components/PageHeader';
import Soon from './Soon';

class Timeline extends React.Component {
  constructor() {
    super();
    this.page = "Timeline";
  }

  render() {
    return (
      <div className="PageDiv page-timeline">
        <PageHeader page={this.page}/>

        <div className="PageMain">
          <section>
            <Soon />
          </section>
        </div>
      </div>
    )
  }
}

export default Timeline;