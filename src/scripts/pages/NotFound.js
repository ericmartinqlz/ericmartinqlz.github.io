import React from 'react';
import PageHeader from '../components/PageHeader';

class NotFound extends React.Component {
  constructor() {
    super();
    this.page = "404";
  }

  render() {
    return (
      <div className="PageDiv page-not-found">
        <PageHeader page={this.page}/>

        <div className="PageMain">
          <section>
            <h2>Not Found</h2>
          </section>
        </div>
      </div>
    )
  }
}

export default NotFound;