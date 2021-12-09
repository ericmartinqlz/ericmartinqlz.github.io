import React from 'react';
import PageHeader from '../components/PageHeader';

class Loading extends React.Component {
  constructor() {
    super();
    this.page = "Loading";
  }

  render() {
    return (
      <div className="PageDiv page-not-found">
        <PageHeader page={this.page}/>

        <div className="PageMain">
          <section>
            <h2>Loading...</h2>
          </section>
        </div>
      </div>
    )
  }
}

export default Loading;