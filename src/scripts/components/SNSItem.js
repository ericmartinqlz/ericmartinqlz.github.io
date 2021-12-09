import React from 'react';

class SNSItem extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div className="sns-item">
        <a href={this.props.url} rel="noopener noreferrer" target="_blank" className="ease-out">
          {this.props.icon}
        </a>
      </div>
    )
  }
}

export default SNSItem;