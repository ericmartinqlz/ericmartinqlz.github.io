import React from 'react';
import PageHeader from '../components/PageHeader';
import CertificateList from '../components/CertificateList';

import '../../styles/certificate-page.css';

class Certificate extends React.Component {
  constructor() {
    super();
    this.page = "Certificate";
  }

  render() {
    return (
      <div className="PageDiv page-certificate">
        <PageHeader page={this.page}/>

        <div className="PageMain">
          <section>
            <CertificateList />
          </section>
        </div>
      </div>
    )
  }
}

export default Certificate;