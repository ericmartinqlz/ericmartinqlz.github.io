import React from 'react';
import PageHeader from '../components/PageHeader';
import SNSList from '../components/SNSList';

import '../../styles/contact-page.css';

class Contact extends React.Component {
  constructor() {
    super();
    this.page = "Contact";
  }

  render() {
    return (
      <div className="PageDiv page-contact">
        <PageHeader page={this.page}/>

        <div className="PageMain">
          <section>
            <div className="contact-flex">
              <div className="left">
                <form>
                  <div className="form-div">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" class="input input-text"/>
                  </div>
                  <div className="form-div">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" class="input input-text"/>
                  </div>
                  <div className="form-div">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" class="input input-text"/>
                  </div>
                  <div className="form-div">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="6" class="input input-textarea"></textarea>
                  </div>
                  <button class="button primary">Submit</button>
                </form>
              </div>

              <div className="right">
                <SNSList />

                <div className="footer">
                  Created with ❤️<br />by <strong>EricMartinQLZ</strong>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Contact;