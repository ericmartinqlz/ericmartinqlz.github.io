import React from 'react';
import CertificateItem from '../components/CertificateItem';

import data from '../data/data';

class CertificateList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      certificates: [],
    }

    this.props = props;
    this.getCertificates = this.getCertificates.bind(this);
  }

  getCertificates(type) {
    return data.certificates[type];
  }

  async componentDidMount() {
    const certificates = this.getCertificates(this.props.type) || [];
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