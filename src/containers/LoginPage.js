import React from 'react';

// COMPONENTS:
import LoginOptionsButton from './../components/LoginOptionsButton';
import LogoComponent from './../components/LogoComponent';

// IMAGES:
import hubmeta_logo from './../assets/logo.png';
import Google_icon from './../assets/search.svg';
import Linkedin_icon from './../assets/linkedin.svg';
import Twitter_icon from './../assets/twitter.svg';
import Outlook_icon from './../assets/outlook.svg';

function LoginPage() {
  return (
    <section className="login-page-sectioin">
      <div className="login-contatiner">
        <div className="login-form">
          <LogoComponent style={{ 'margin-top': '6rem' }} />
          <h1 className="login-form_welcome-text">Welcome Back</h1>

          <form className="login-form_inputs">
            <div className="inputs-email">
              <label className="inputs-email_label" for="email">
                Username / Email
              </label>
              <input
                type="email"
                className="inputs-email_input"
                name="email"
                id="email"
                placeholder="Username or Email"
              ></input>
            </div>
            <div className="inputs-password">
              <label className="inputs-password_label" for="password">
                Password
              </label>
              <input
                type="password"
                className="inputs-password_input"
                name="password"
                id="password"
                placeholder="Password"
              ></input>
            </div>
            <div className="inputs-checkbox">
              <input
                name="keep-me-login"
                id="keep-me-login"
                className="inputs-checkbox_input"
                type="checkbox"
              ></input>
              <label className="inputs-checkbox_label" for="keep-me-login">
                Keep me loged in
              </label>
              <a className="inputs-checkbox_forget-pass-txt" href="#">
                Forget Your Password?
              </a>
            </div>
            <button className="inputs-button">Login</button>
            <div className="login-options-seprator">
              <hr className="login-options-seprator_line"></hr>
              <p className="login-options-seprator_text">Or Login With </p>
              <hr className="login-options-seprator_line"></hr>
            </div>
            <div className="login-options-wrapper">
              <LoginOptionsButton icon={Google_icon} />
              <LoginOptionsButton icon={Linkedin_icon} />
              <LoginOptionsButton icon={Twitter_icon} />
              <LoginOptionsButton icon={Outlook_icon} />
            </div>
            <div className="dont-have-account-wrapper">
              <p className="dont-have-account-wrapper_txt">
                Don't have an accunt?
              </p>
              <a className="dont-have-account-wrapper_link" href="#">
                Signup
              </a>
            </div>
          </form>
        </div>
        <div className="login-form-backgorund"></div>
      </div>
    </section>
  );
}

export default LoginPage;
