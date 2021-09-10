import React from 'react'
// import GoogleLogin from 'react-google-login';
import logo from '../Images/logo.svg';
import googleIcon from '../Images/googleIcon.svg'
import gihubIcon from '../Images/GitHub-logo.png'
export default function Signup() {
    // const googleClientID = '944973167240-59o416hur2ohbp1cugi8pqthh4me14nf.apps.googleusercontent.com'
    // const responseGoogle = (response) => {
    //     console.log(response);
    // }

    return (
        <div className="form-container">
            <div className="inner-container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="brand-title">
                    <h1 className="main-title">
                        Aceme&nbsp;Corp.
                    </h1><br />
                    <span className="signintxt">
                        Sign&nbsp;in or <a href='/' className="createbtn">create&nbsp;an&nbsp;account</a>
                    </span>
                </div>
                <div className="signIn-Opn">
                    <span>Sign in with</span><br />
                    <span className="google">
                        <button type='button'><img src={googleIcon} alt="google" />Google</button>
                    </span>
                    <span className="github">
                        <button type='button'><img src={gihubIcon} alt="Github" />Github</button>
                    </span>
                </div>

                <hr className="hrtxt" data-content="Or continue with" />

                <form>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" placeholder='john.doe@acme.com' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='*******' />
                    <br />
                    <span className="remember-me"><input type="checkbox" name="rememberMe" />&nbsp;&nbsp;Remember&nbsp;me</span>

                    <a href="/" className='forgetLink'>Forget&nbsp;your&nbsp;password&nbsp;?</a>
                    <br />
                    <input type="submit" value='Sign in' />
                </form>

            </div>
        </div>
    );
}
