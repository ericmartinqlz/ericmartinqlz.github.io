import React from 'react';

class CertificateItem extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div className="certificate-item">
        <a href={this.props.url} rel="noopener noreferrer" target="_blank">
          <div className="certificate-image">
            <picture>
              <source type="image/webp" srcSet={this.props.imgWEBP} />
              <source type="image/jpeg" srcSet={this.props.imgJPG} />
              <img src={this.props.imgJPG} alt={this.props.title} />
            </picture>
          </div>

          <div className="certificate-info">
            <h3>{this.props.title}</h3>
            <p>{this.props.from}</p>
          </div>
        </a>
      </div>
    )
  }
}

export default CertificateItem;