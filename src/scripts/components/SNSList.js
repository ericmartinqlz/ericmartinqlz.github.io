import React from 'react';
import SNSItem from '../components/SNSItem';

import data from '../data/data';

class SNSList extends React.Component {
  constructor() {
    super();
    this.state = {
      sns: [],
    }

    this.getSNS = this.getSNS.bind(this);
  }

  getSNS() {
    return data.sns;
  }

  async componentDidMount() {
    const sns = this.getSNS();
    this.setState({ sns });
  }

  render() {
    return (
      <div className="sns-list">
        {this.state.sns.map((sns) => (
          <SNSItem
            key={sns.name}
            url={sns.url}
            icon={sns.icon}
          />
        ))}
      </div>
    )
  }
}

export default SNSList;