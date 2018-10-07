import React from 'react';
import './ContactUs.css';

const contactUs = () => (
    <div className="columns contactUs-complete-layout">
        <div className="column  is-half is-offset-one-quarter contactUs-layout">
        <div className="contactUs-header">
                <h1>Keep In Touch</h1>
                <hr />
            </div>
            <div class="field is-horizontal">
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Full Name"/>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
  </div>
</div>





<div class="field is-horizontal">
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
      </div>
    </div>
  </div>
</div>
    <a className="button">Register Now</a>
        </div>
    </div>
)

export default contactUs;