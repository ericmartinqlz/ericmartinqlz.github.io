import React from 'react';
import CertificateItem from '../components/CertificateItem';

import data from '../data/data';

class CertificateList extends React.Component {
  constructor() {
    super();
    this.state = {
      certificates: [],
    }

    this.getCertificates = this.getCertificates.bind(this);
  }

  getCertificates() {
    return data.certificates;
  }

  async componentDidMount() {
    const certificates = this.getCertificates();
    this.setState({ certificates });
  }

  render() {
    return (
      <div className="certificate-list">
        {this.state.certificates.map((certificate, index) => (
          <CertificateItem
            key={index}
            title={certificate.title}
            from={certificate.from}
            url={certificate.url}
            imgJPG={certificate.imgJPG}
            imgWEBP={certificate.imgWEBP}
          />
        ))}
      </div>
    )
  }
}

export default CertificateList;