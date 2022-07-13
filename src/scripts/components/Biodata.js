import React from 'react';

import data from '../data/data';

class Biodata extends React.Component {
  constructor() {
    super();
    this.state = {
      biodata: [],
      age: 0,
      birthDate: "1 January 0001",
      goals: [],
      hobbies: []
    }

    this.getBiodata = this.getBiodata.bind(this);
    this.getAge = this.getAge.bind(this);
  }

  getBiodata() {
    return data.biodata;
  }
  getAge(birthDate) {
    let today = new Date();

    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let monthYear = today.getMonth() - birthDate.getMonth();

    if (monthYear < 0 || (monthYear === 0 && today.getDate() < birthDate.getDate()))
      ageYear--;

    return ageYear
  }

  async componentDidMount() {
    const biodata = this.getBiodata();

    const birthDate = new Date(biodata['birthDate']);
    const age = this.getAge(birthDate);

    let strBirthDate = birthDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    this.setState({ 
      biodata, 
      age, 
      birthDate: strBirthDate,
      goals: biodata.goals,
      hobbies: biodata.hobbies
    });
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th> : </th>
            <td>
              {`${this.state.biodata["firstName"]} ${this.state.biodata["lastName"]}`}
            </td>
          </tr>

          <tr>
            <th>Nickname</th>
            <th> : </th>
            <td>
              {this.state.biodata["nickName"]}
            </td>
          </tr>

          <tr>
            <th>Age</th>
            <th> : </th>
            <td>
            {`${this.state.age}`}
            </td>
          </tr>
          
          <tr>
            <th>Place / Date of birth</th>
            <th> : </th>
            <td>
            {`${this.state.biodata["birthPlace"]} / ${this.state.birthDate}`}
            </td>
          </tr>

          <tr>
            <th>Email</th>
            <th> : </th>
            <td>
              {this.state.biodata["email"]}
            </td>
          </tr>

          <tr>
            <th>Educational Background</th>
            <th> : </th>
            <td>
              {this.state.biodata["education"]}
            </td>
          </tr>

          <tr>
            <th>Address</th>
            <th> : </th>
            <td>
              {this.state.biodata["address"]}
            </td>
          </tr>

          <tr>
            <th>Future Goals</th>
            <th> : </th>
            <td>
              <ul>
                {this.state.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </td>
          </tr>

          <tr>
            <th>Hobby</th>
            <th> : </th>
            <td>
              <ul>
                {this.state.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </td>
          </tr>

          <tr style={{color: "#FFF"}}>
            <th>Favorite idol</th>
            <th> : </th>
            <td>
              {this.state.biodata["favIdol"]}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Biodata;