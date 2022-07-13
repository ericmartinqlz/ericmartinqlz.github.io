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
            <div className="frontend-section">
              <h3>Frontend Dev</h3>
              <CertificateList type="frontend" />
            </div>

            <div className="game-section">
              <h3>Game Dev</h3>
              <CertificateList type="game" />
            </div>

            <div className="other-section">
              <h3>Others</h3>
              <CertificateList type="other" />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Certificate;